import { ApiProperty } from '@nestjs/swagger'

export class FileVo {
  @ApiProperty({ description: '文件路径', type: String })
  path: string

  @ApiProperty({ description: '接口提交字段名称', type: String })
  fieldname: string

  @ApiProperty({ description: '文件名称', type: String })
  filename: string

  @ApiProperty({ description: '原始文件名称', type: String })
  originalname: string

  @ApiProperty({ description: '媒体类型', type: String })
  mimetype: string

  @ApiProperty({ description: '文件大小', type: Number })
  size: number

  constructor(partial: Partial<FileVo>) {
    Object.assign(this, partial)
  }
}
