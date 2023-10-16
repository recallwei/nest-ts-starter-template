import { Module } from '@nestjs/common'

import { AppController } from './app.controller'
import { AppService } from './app.service'
import { FilesModule } from './files/files.module'
import { UsersModule } from './users/users.module'
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UsersModule, FilesModule, AuthModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
