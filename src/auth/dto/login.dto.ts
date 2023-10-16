import { ApiProperty } from '@nestjs/swagger'

export class LoginDto {
  @ApiProperty({ name: 'username', description: '用户名', type: String })
  readonly username: string

  @ApiProperty({ name: 'password', description: '密码', type: String })
  readonly password: string
}
