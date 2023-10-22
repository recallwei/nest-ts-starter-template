import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, Length, NotContains } from 'class-validator'

export class LoginDto {
  @ApiProperty({ description: '用户名' })
  @Length(4, 16, { message: '用户名长度范围为 4 ~ 16 位' })
  @IsNotEmpty({ message: '用户名不能为空' })
  @NotContains(' ', { message: '用户名不能包含空格' })
  readonly username: string

  @ApiProperty({ description: '密码' })
  @Length(6, 16, { message: '密码长度范围为 6 ~ 16 位' })
  @IsNotEmpty({ message: '密码不能为空' })
  @NotContains(' ', { message: '密码不能包含空格' })
  readonly password: string
}
