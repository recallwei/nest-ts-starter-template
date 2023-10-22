import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  ParseIntPipe,
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
  ApiTags,
  ApiUnauthorizedResponse
} from '@nestjs/swagger'

import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { UsersService } from './users.service'

@ApiTags('用户')
@ApiBearerAuth('bearer')
@Controller('users')
export class UsersController {
  @Inject(UsersService)
  private readonly usersService: UsersService

  @ApiOperation({ summary: '创建用户' })
  @ApiCreatedResponse({ description: '创建成功' })
  @ApiUnauthorizedResponse({ description: '认证失败' })
  @ApiBadRequestResponse({ description: '参数错误' })
  @ApiConflictResponse({ description: '用户已存在' })
  @ApiBody({ description: '用户信息', type: CreateUserDto })
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto)
  }

  @ApiOperation({ summary: '用户列表' })
  @ApiOkResponse({ description: '请求成功' })
  @ApiUnauthorizedResponse({ description: '认证失败' })
  @ApiQuery({ name: 'page', description: '页码', required: true, example: 1 })
  @ApiQuery({
    name: 'pageSize',
    description: '每页条数',
    required: true,
    example: 10
  })
  @Get()
  findMany() {
    return this.usersService.findMany()
  }

  @ApiOperation({ summary: '当前用户' })
  @ApiOkResponse({ description: '请求成功' })
  @ApiUnauthorizedResponse({ description: '认证失败' })
  @Get('info')
  findCurrent() {
    return this.usersService.findCurrent()
  }

  @ApiOperation({ summary: '用户详情' })
  @ApiOkResponse({ description: '请求成功' })
  @ApiUnauthorizedResponse({ description: '认证失败' })
  @ApiNotFoundResponse({ description: '用户不存在' })
  @ApiParam({ name: 'id', description: '用户 ID', required: true, example: 1 })
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.findOneById(id)
  }

  @ApiOperation({ summary: '修改用户' })
  @ApiOkResponse({ description: '请求成功' })
  @ApiUnauthorizedResponse({ description: '认证失败' })
  @ApiBadRequestResponse({ description: '参数错误' })
  @ApiNotFoundResponse({ description: '用户不存在' })
  @ApiParam({ name: 'id', description: '用户 ID', required: true })
  @ApiBody({ description: '用户信息', type: UpdateUserDto })
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto
  ) {
    return this.usersService.update(id, updateUserDto)
  }

  @ApiOperation({ summary: '删除用户' })
  @ApiOkResponse({ description: '删除成功' })
  @ApiUnauthorizedResponse({ description: '认证失败' })
  @ApiBadRequestResponse({ description: '参数错误' })
  @ApiNotFoundResponse({ description: '用户不存在' })
  @ApiParam({ name: 'id', description: '用户 ID', required: true })
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.remove(id)
  }
}
