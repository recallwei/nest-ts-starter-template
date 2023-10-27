import { join } from 'node:path'

import {
  ClassSerializerInterceptor,
  ValidationPipe,
  VersioningType
} from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { NestFactory, Reflector } from '@nestjs/core'
import type { NestExpressApplication } from '@nestjs/platform-express'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    abortOnError: false
  })

  // 全局管道
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // 自动删除非 dto 中的属性
      transform: true, // 自动转换类型
      transformOptions: {
        enableImplicitConversion: true // 允许隐式转换
      },
      // disableErrorMessages: true, // 禁用错误消息
      stopAtFirstError: true
    })
  )

  // 全局拦截器
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)))

  // 全局前缀 - 如果没有子域名，可以设置全局前置
  app.setGlobalPrefix('/')

  // 启用版本控制
  app.enableVersioning({ type: VersioningType.URI })

  /**
   * 使用应用 shutdown 相关的生命周期，必须启用 shutdown hooks
   * - onModuleDestroy()
   * - beforeApplicationShutdown()
   * - onApplicationShutdown()
   *
   * 默认建议关闭，会占用一定的性能，仅当需要时才启用
   * @see https://docs.nestjs.com/fundamentals/lifecycle-events#application-shutdown
   */
  app.enableShutdownHooks()

  /**
   * 静态资源
   * 用作上传文件的存储目录
   * 例如：http://localhost:3000/storage/xxx.png
   */
  app.useStaticAssets(join(__dirname, '..', 'public'), { prefix: '/' })
  app.useStaticAssets(join(__dirname, '..', 'uploads'), { prefix: '/uploads' })

  /**
   * 视图目录
   * 例如：http://localhost:3000/views/xxx.pug
   */
  app.setBaseViewsDir(join(__dirname, '..', 'views'))
  // 视图引擎，使用 pug
  app.setViewEngine('pug')

  // Swagger 配置
  const config = new DocumentBuilder()
    .setTitle('Nest API')
    .setDescription(
      `<p>Nest TypeScript Starter Template 后台管理系统的接口文档，基于 Nest.js + TypeScript + Prisma + PostgreSQL。</p>
  <p>Apifox 线上地址：<a>https://nest-ts-starter-template.apifox.cn/</a></p>`
    )
    .setVersion('1.0')
    .addBearerAuth({
      type: 'http',
      description: '基于 JWT 认证',
      name: 'bearer'
    })
    .build()

  const document = SwaggerModule.createDocument(app, config, {})

  /**
   * 文档地址为 /api
   * 例如：http://localhost:3000/api/docs
   * Swagger JSON 地址为 /api/docs-json
   * 例如：http://localhost:3000/api/docs-json
   */
  SwaggerModule.setup('api/docs', app, document)

  const configService = app.get(ConfigService)

  const port = configService.get<string>('PORT') ?? 3000

  await app.listen(+port)
}
bootstrap().catch(() => {})
