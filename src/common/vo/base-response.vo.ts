import { ApiPropertyOptional } from '@nestjs/swagger'

export abstract class BaseResponseVo {
  @ApiPropertyOptional({ description: '业务代码' })
  code?: string

  @ApiPropertyOptional({ description: '提示信息' })
  message?: string

  constructor(baseResponseVo: BaseResponseVo) {
    Object.assign(this, baseResponseVo)
  }
}
