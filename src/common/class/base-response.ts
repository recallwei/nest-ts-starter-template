import { ApiPropertyOptional } from '@nestjs/swagger'

export abstract class BaseResponse {
  @ApiPropertyOptional({ description: '业务代码' })
  code?: number

  @ApiPropertyOptional({ description: '提示信息' })
  message?: string

  constructor(partial: Partial<BaseResponse>) {
    Object.assign(this, partial)
  }
}
