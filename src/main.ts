import { VersioningType } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import type { NestExpressApplication } from '@nestjs/platform-express'

import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule)

  // 全局前缀 - 如果没有子域名，可以设置全局前置
  app.setGlobalPrefix('/api')

  // 启用版本控制
  app.enableVersioning({ type: VersioningType.URI })

  /**
   * 静态资源
   * 用作上传文件的存储目录
   * 例如：http://localhost:3000/storage/xxx.png
   */
  app.useStaticAssets('public', { prefix: '/static' })
  app.useStaticAssets('uploads', { prefix: '/uploads' })

  await app.listen(3000)
}
bootstrap().catch(() => {})
