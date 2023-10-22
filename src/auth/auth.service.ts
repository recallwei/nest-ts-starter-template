import { BadRequestException, Inject, Injectable } from '@nestjs/common'
import { compare, hash } from '@node-rs/bcrypt'
import { plainToClass } from 'class-transformer'

import { OkResponseVo } from '@/common'
import { PrismaService } from '@/prisma/prisma.service'
import { UsersService } from '@/users/users.service'
import { UserVo } from '@/users/vo'

import type { LoginDto } from './dto'
import { LoginVo } from './vo'

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

  /**
   *  用户名登录
   */
  async loginByUsername(loginDto: LoginDto) {
    const { user, exists } = await this.usersService.alreadyExists(
      loginDto.username
    )
    if (!exists) {
      throw new BadRequestException('用户名不存在')
    }

    if (await compare(await hash(loginDto.password), user!.password)) {
      throw new BadRequestException('用户名或密码不正确')
    }

    const userVo = plainToClass(UserVo, user)

    return new OkResponseVo<LoginVo>({
      data: new LoginVo({
        user: userVo,
        accessToken: '123'
      })
    })
  }

  /**
   *  邮箱登录
   */
  loginByEmail(loginDto: LoginDto) {
    console.log(loginDto)
    throw new BadRequestException('不支持该登录方式: email')
  }
}
