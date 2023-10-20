import { Module } from '@nestjs/common'

import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AuthModule } from './auth/auth.module'
import { DictionariesModule } from './dictionaries/dictionaries.module'
import { FilesModule } from './files/files.module'
import { PrismaModule } from './prisma/prisma.module'
import { PrismaService } from './prisma/prisma.service'
import { UsersModule } from './users/users.module'

@Module({
  imports: [
    FilesModule,
    AuthModule,
    UsersModule,
    DictionariesModule,
    PrismaModule
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService]
})
export class AppModule {}
