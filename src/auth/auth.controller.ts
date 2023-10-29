import {
  BadRequestException,
  Body,
  Controller,
  Ip,
  ParseEnumPipe,
  Post,
  Query
} from '@nestjs/common'
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiNotImplementedResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
  ApiUnauthorizedResponse
} from '@nestjs/swagger'
import type { User } from '@prisma/client'
import { plainToClass } from 'class-transformer'

import { ApiOkBaseResponse, OkResponseVo, SkipAuth } from '@/common'
import { UserVo } from '@/users/vo'

import { AuthService } from './auth.service'
import { LoginDto } from './dto'
import { LoginType } from './enum'
import { LoginVo } from './vo'

@ApiTags('认证')
@SkipAuth()
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: '注册' })
  @ApiCreatedResponse({ description: '注册成功' })
  @ApiBadRequestResponse({ description: '输入有误' })
  @ApiUnauthorizedResponse({ description: '认证失败' })
  @ApiConflictResponse({ description: '用户名已存在' })
  @Post('signup')
  signup() {
    return this.authService.signup()
  }

  @ApiOperation({ summary: '登录' })
  @ApiOkBaseResponse({ description: '登录成功', type: LoginVo })
  @ApiBadRequestResponse({ description: '用户名或密码不正确' })
  @ApiUnauthorizedResponse({ description: '认证失败' })
  @ApiNotImplementedResponse({ description: '不支持该登录方式' })
  @ApiQuery({
    name: 'type',
    type: String,
    description: '登录类型，支持：username、email',
    required: true,
    enum: LoginType,
    example: LoginType.username
  })
  @ApiBody({
    type: LoginDto,
    description: '登录信息',
    examples: {
      admin: {
        value: {
          username: 'admin',
          password: '123456'
        },
        description: '测试超级管理员登录'
      },
      visitor: {
        value: {
          username: 'visitor',
          password: '123456'
        },
        description: '测试访客登录'
      }
    }
  })
  @Post('login')
  async login(
    @Query(
      'type',
      new ParseEnumPipe(LoginType, {
        exceptionFactory: () => new BadRequestException('不支持该登录方式')
      })
    )
    type: LoginType,
    @Body() loginDto: LoginDto,
    @Ip() ip: string
  ) {
    console.log(ip)

    let user: User

    switch (type) {
      // 用户名登录
      case LoginType.username:
        user = await this.authService.loginByUsername(loginDto)
        break
      // 邮箱登录
      case LoginType.email:
        return this.authService.loginByEmail(loginDto)
      default:
        return new BadRequestException('不支持该登录方式')
    }

    return new OkResponseVo({
      data: new LoginVo({
        user: plainToClass(UserVo, user),
        accessToken: this.authService.generateToken(user)
      }),
      message: '登录成功'
    })
  }
}
