import { ApiPropertyOptional } from '@nestjs/swagger'
import { IsDate, IsOptional } from 'class-validator'

import { PageDto } from './page.dto'

export class PageDateDto extends PageDto {
  @ApiPropertyOptional({
    description: '开始时间',
    default: () => {
      const yesterday = new Date()
      yesterday.setDate(yesterday.getDate() - 1)
      return yesterday.toISOString()
    }
  })
  @IsDate()
  @IsOptional()
  startTime?: Date

  @ApiPropertyOptional({
    description: '结束时间',
    default: new Date().toISOString()
  })
  @IsDate()
  @IsOptional()
  endTime?: Date
}
