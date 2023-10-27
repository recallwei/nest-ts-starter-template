import { HttpStatus } from '@nestjs/common'
import { ApiProperty } from '@nestjs/swagger'

import { BaseResponseVo } from './base-response.vo'

export class CreatedResponseVo<T> extends BaseResponseVo {
  @ApiProperty({ description: '响应数据' })
  data: T

  constructor(createdResponseVo: CreatedResponseVo<T>) {
    const { code, message = '创建成功', data } = createdResponseVo
    super({
      code,
      message,
      statusCode: HttpStatus.CREATED
    })
    this.data = data
  }
}
