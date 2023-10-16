import { Injectable } from '@nestjs/common'

import { UsersService } from '@/users/users.service'

import type { LoginDto } from './dto'

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  signup() {
    return this.usersService.findAll()
  }

  loginByUsername(loginDto: LoginDto) {
    return loginDto
  }
}
