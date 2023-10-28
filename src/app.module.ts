import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { APP_INTERCEPTOR } from '@nestjs/core'
import Joi from 'joi'

import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AuthModule } from './auth/auth.module'
import {
  ErrorsInterceptor,
  LoggingInterceptor,
  TimeoutInterceptor
} from './common'
import { CosModule } from './cos/cos.module'
import { DictionariesModule } from './dictionaries/dictionaries.module'
import { FilesModule } from './files/files.module'
import { PermissionsModule } from './permissions/permissions.module'
import { PrismaModule } from './prisma/prisma.module'
import { RolesModule } from './roles/roles.module'
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
    RolesModule,
    PermissionsModule,
    DictionariesModule,
    FilesModule,
    CosModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: TimeoutInterceptor
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ErrorsInterceptor
    }
  ]
})
export class AppModule {}
