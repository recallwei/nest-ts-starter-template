import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post
} from '@nestjs/common'
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiBody,
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiTags
} from '@nestjs/swagger'

import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { UsersService } from './users.service'

@ApiTags('用户')
@ApiBearerAuth('bearer')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({ summary: '创建用户' })
  @ApiCreatedResponse({ description: '创建成功' })
  @ApiBadRequestResponse({ description: '参数错误' })
  @ApiConflictResponse({ description: '用户已存在' })
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto)
  }

  @ApiOperation({ summary: '用户列表' })
  @ApiOkResponse({ description: '请求成功' })
  @ApiQuery({ name: 'page', description: '页码', required: true, example: 1 })
  @ApiQuery({
    name: 'pageSize',
    description: '每页条数',
    required: true,
    example: 10
  })
  @Get()
  findAll() {
    return this.usersService.findAll()
  }

  @ApiOperation({ summary: '用户详情' })
  @ApiOkResponse({ description: '请求成功' })
  @ApiNotFoundResponse({ description: '用户不存在' })
  @ApiParam({
    name: 'id',
    description: '用户 ID',
    required: true,
    example: 1
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id)
  }

  @ApiOperation({ summary: '修改用户' })
  @ApiOkResponse({ description: '请求成功' })
  @ApiBadRequestResponse({ description: '参数错误' })
  @ApiParam({
    name: 'id',
    description: '用户 ID',
    required: true
  })
  @ApiBody({ description: '用户信息', type: UpdateUserDto })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto)
  }

  @ApiOperation({ summary: '删除用户' })
  @ApiOkResponse({ description: '删除成功' })
  @ApiBadRequestResponse({ description: '参数错误' })
  @ApiNotFoundResponse({ description: '用户不存在' })
  @ApiParam({
    name: 'id',
    description: '用户 ID',
    required: true
  })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id)
  }
}
