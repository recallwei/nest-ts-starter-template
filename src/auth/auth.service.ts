import { Inject, Injectable } from '@nestjs/common'

import { UsersService } from '@/users/users.service'

import type { LoginDto } from './dto'

@Injectable()
export class AuthService {
  @Inject(UsersService)
  private readonly usersService: UsersService

  signup() {
    return this.usersService.findCurrent()
  }

  loginByUsername(loginDto: LoginDto) {
    return loginDto
  }
}
