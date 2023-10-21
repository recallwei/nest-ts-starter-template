import type { OnApplicationShutdown } from '@nestjs/common'
import { Global, Inject, Module } from '@nestjs/common'
import { ModuleRef } from '@nestjs/core'

import { PrismaService } from './prisma.service'

@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService]
})
export class PrismaModule implements OnApplicationShutdown {
  @Inject(ModuleRef)
  private readonly moduleRef: ModuleRef

  async onApplicationShutdown() {
    await this.moduleRef.get<PrismaService>(PrismaService).$disconnect()
  }
}
