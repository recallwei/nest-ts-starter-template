import { ApiProperty } from '@nestjs/swagger'

import { UserVo } from '@/users/vo'

export class LoginVo {
  @ApiProperty({ description: '用户信息', type: UserVo })
  user: UserVo

  @ApiProperty({ description: '访问令牌' })
  accessToken: string

  constructor(partial: Partial<LoginVo>) {
    Object.assign(this, partial)
  }
}
