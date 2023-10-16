import { VersioningType } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import type { NestExpressApplication } from '@nestjs/platform-express'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    abortOnError: false
  })

  // 全局前缀 - 如果没有子域名，可以设置全局前置
  app.setGlobalPrefix('/api')

  // 启用版本控制
  app.enableVersioning({ type: VersioningType.URI })

  // 启用 shutdown hooks
  app.enableShutdownHooks()

  /**
   * 静态资源
   * 用作上传文件的存储目录
   * 例如：http://localhost:3000/storage/xxx.png
   */
  app.useStaticAssets('public', { prefix: '/static' })
  app.useStaticAssets('uploads', { prefix: '/uploads' })

  // Swagger
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

  await app.listen(4777)
}
bootstrap().catch(() => {})
