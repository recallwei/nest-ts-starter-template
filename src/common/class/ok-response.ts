import { BaseResponse } from './base-response'

export class OkResponse<T> extends BaseResponse {
  data?: T

  constructor(partial: Partial<OkResponse<T>>) {
    const { code, message = '请求成功', data } = partial
    super({ code, message })
    this.data = data
  }
}
