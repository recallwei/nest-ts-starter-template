import { Inject, Injectable } from '@nestjs/common'

import { PrismaService } from '@/prisma/prisma.service'
import { UsersService } from '@/users/users.service'

import type { LoginDto } from './dto'

@Injectable()
export class AuthService {
  @Inject(PrismaService)
  private readonly prismaService: PrismaService

  @Inject(UsersService)
  private readonly usersService: UsersService

  signup() {
    return this.prismaService
      .$queryRaw`SELECT * FROM "system_user" Where id = 2`
  }

  loginByUsername(loginDto: LoginDto) {
    return loginDto
  }
}
