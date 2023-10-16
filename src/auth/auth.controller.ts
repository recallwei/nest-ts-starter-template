import {
  BadRequestException,
  Body,
  Controller,
  Post,
  Query
} from '@nestjs/common'

import { UsersService } from '@/users/users.service'

import { AuthService } from './auth.service'
import { LoginDto } from './dto'

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService
  ) {}

  @Post('signup')
  signup() {
    return this.authService.signup()
  }

  @Post('login')
  login(@Query('type') type: string, @Body() loginDto: LoginDto) {
    if (!type) {
      return new BadRequestException('Missing login type')
    }
    switch (type) {
      case 'username':
        return this.authService.loginByUsername(loginDto)
      default:
        return new BadRequestException(`Invalid login type: ${type}`)
    }
  }
}
