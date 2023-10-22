import {
  ConflictException,
  Inject,
  Injectable,
  NotFoundException
} from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { plainToClass, plainToInstance } from 'class-transformer'

import { OkResponseVo } from '@/common'
import { PrismaService } from '@/prisma/prisma.service'

import type { CreateUserDto } from './dto/create-user.dto'
import type { UpdateUserDto } from './dto/update-user.dto'
import { UserVo } from './vo'

@Injectable()
export class UsersService {
  @Inject(PrismaService)
  private readonly prismaService: PrismaService

  async create(createUserDto: CreateUserDto) {
    try {
      const user = await this.prismaService.user.create({
        data: createUserDto
      })
      const userVo = plainToClass(UserVo, user)
      return new OkResponseVo<UserVo>({
        data: userVo
      })
    } catch (err) {
      if (err instanceof Prisma.PrismaClientKnownRequestError) {
        const { meta, code } = err
        if (code === 'P2002') {
          if ((meta?.target as string[]).includes('username')) {
            throw new ConflictException('用户名已存在')
          }
        }
      }
      throw err
    }
  }

  async findMany() {
    const users = await this.prismaService.user.findMany()
    const userVoList = plainToInstance(UserVo, users)
    return new OkResponseVo<UserVo[]>({
      data: userVoList
    })
  }

  async findOneById(id: number) {
    const user = await this.prismaService.user.findUnique({
      where: {
        id
      }
    })
    if (!user) {
      throw new NotFoundException('用户不存在')
    }
    const userVo = plainToClass(UserVo, user)
    return new OkResponseVo<UserVo>({
      data: userVo
    })
  }

  async findCurrent() {
    const user = await this.prismaService.user.findUnique({
      where: {
        id: 1
      }
    })
    if (!user) {
      throw new NotFoundException('用户不存在')
    }
    const userVo = plainToClass(UserVo, user)
    return new OkResponseVo<UserVo>({
      data: userVo
    })
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`
  }

  remove(id: number) {
    return `This action removes a #${id} user`
  }

  async alreadyExists(username: string) {
    const user = await this.prismaService.user.findUnique({
      where: {
        username
      }
    })
    return {
      user,
      exists: !!user
    }
  }
}
