import { Controller, Get } from '@nestjs/common'
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger'

import { AppService } from './app.service'

@ApiTags('应用')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiOperation({ summary: '应用信息' })
  @ApiOkResponse({ description: '请求成功', type: String })
  @Get()
  getApp(): string {
    return this.appService.getApp()
  }

  @ApiOperation({ summary: '应用版本' })
  @ApiOkResponse({ description: '请求成功', type: String })
  @Get('version')
  getVersion(): string {
    return this.appService.getVersion()
  }
}
