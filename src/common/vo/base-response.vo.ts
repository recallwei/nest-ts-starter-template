import { ApiPropertyOptional } from '@nestjs/swagger'

export abstract class BaseResponseVo {
  @ApiPropertyOptional({ description: '业务代码' })
  code?: number

  @ApiPropertyOptional({ description: '提示信息' })
  message?: string

  @ApiPropertyOptional({ description: '响应状态码' })
  statusCode?: number

  constructor(baseResponseVo: BaseResponseVo) {
    Object.assign(this, baseResponseVo)
  }
}
