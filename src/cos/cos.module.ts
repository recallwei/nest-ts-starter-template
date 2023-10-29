import { HttpModule } from '@nestjs/axios'
import { Global, Module } from '@nestjs/common'

import { CosController } from './cos.controller'
import { CosService } from './cos.service'

@Global()
@Module({
  imports: [HttpModule],
  controllers: [CosController],
  providers: [CosService]
})
export class CosModule {}
