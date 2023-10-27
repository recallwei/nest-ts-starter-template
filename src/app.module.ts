import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import Joi from 'joi'

import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AuthModule } from './auth/auth.module'
import { CosModule } from './cos/cos.module'
import { DictionariesModule } from './dictionaries/dictionaries.module'
import { FilesModule } from './files/files.module'
import { PrismaModule } from './prisma/prisma.module'
import { UsersModule } from './users/users.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development.local', '.env.development', '.env'], // 优先匹配 .env
      isGlobal: true, // 声明为全局模块
      cache: true, // 开启缓存，提高性能
      validationSchema: Joi.object({
        PORT: Joi.number().default(3000)
      }),
      expandVariables: true // 允许变量扩展
    }),
    PrismaModule,
    AuthModule,
    UsersModule,
    DictionariesModule,
    FilesModule,
    CosModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
