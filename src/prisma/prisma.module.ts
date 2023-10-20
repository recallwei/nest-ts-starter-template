import type { OnApplicationShutdown } from '@nestjs/common'
import { Global, Module } from '@nestjs/common'
import { ModuleRef } from '@nestjs/core'

import { PrismaService } from './prisma.service'

@Global()
@Module({})
export class PrismaModule implements OnApplicationShutdown {
  constructor(private moduleRef: ModuleRef) {}

  async onApplicationShutdown() {
    await this.moduleRef.get<PrismaService>(PrismaService).$disconnect()
  }
}
