import { Controller, Get, Inject, Redirect, Render } from '@nestjs/common'
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger'

import { AppService } from './app.service'

@ApiTags('应用')
@Controller()
export class AppController {
  @Inject(AppService)
  private readonly appService: AppService

  @ApiOperation({ summary: '应用首页' })
  @ApiOkResponse({ description: '请求成功' })
  @Render('index')
  @Get()
  getApp() {
    return { title: 'Nest TypeScript Starter Template' }
  }

  @ApiOperation({ summary: '应用信息' })
  @ApiOkResponse({ description: '请求成功' })
  @Get('app-info')
  getVersion() {
    return this.appService.getAppInfo()
  }

  @ApiOperation({ summary: '测试重定向' })
  @ApiOkResponse({ description: '请求成功' })
  @Redirect('/')
  @Get('redirect')
  getRedirect() {}
}
