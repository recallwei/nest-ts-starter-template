import { applyDecorators } from '@nestjs/common'
import { ApiExtraModels, ApiQuery } from '@nestjs/swagger'

import { PageDto } from '@/common/dto'

type QueryType = 'searchText' | 'date'

export const ApiPageQuery = (...type: QueryType[]) => {
  const decorators = [
    ApiExtraModels(PageDto),
    ApiQuery({
      name: 'page',
      description: '页码',
      required: true,
      example: 1
    }),
    ApiQuery({
      name: 'pageSize',
      description: '每页条数',
      required: true,
      example: 10
    })
  ]
  if (type.includes('searchText')) {
    decorators.push(
      ApiQuery({
        name: 'searchText',
        description: '搜索关键字',
        required: false
      })
    )
  }
  if (type.includes('date')) {
    decorators.push(
      ApiQuery({
        name: 'startTime',
        description: '开始日期',
        required: false,
        example: () => {
          const yesterday = new Date()
          yesterday.setDate(yesterday.getDate() - 1)
          return yesterday.toISOString()
        }
      }),
      ApiQuery({
        name: 'endTime',
        description: '结束日期',
        required: false,
        example: new Date().toISOString()
      })
    )
  }
  return applyDecorators(...decorators)
}
