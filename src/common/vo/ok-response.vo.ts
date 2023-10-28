import { ApiProperty } from '@nestjs/swagger'

import { BaseResponseVo } from './base-response.vo'

export class OkResponseVo<T> extends BaseResponseVo {
  @ApiProperty({ description: '响应数据' })
  data?: T

  constructor(okResponseVo?: OkResponseVo<T>) {
    const { code, message = '请求成功', data } = okResponseVo ?? {}
    super({
      code,
      message
    })
    this.data = data
  }
}
