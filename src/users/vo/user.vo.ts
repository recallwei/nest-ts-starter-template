import { ApiProperty } from '@nestjs/swagger'

export class UserVo {
  @ApiProperty({ description: '用户名', type: String })
  username: string
}
