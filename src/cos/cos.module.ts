import { HttpModule } from '@nestjs/axios'
import { Global, Module } from '@nestjs/common'

import { CosService } from './cos.service'

@Global()
@Module({
  imports: [HttpModule],
  providers: [CosService],
  exports: [CosService]
})
export class CosModule {}
