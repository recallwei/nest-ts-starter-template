import type { Type } from '@nestjs/common'
import { applyDecorators } from '@nestjs/common'
import { ApiExtraModels, ApiOkResponse, getSchemaPath } from '@nestjs/swagger'

import { OkResponseVo } from '@/common'

export const ApiOkBaseResponse = <T extends Type<unknown>>({
  type,
  description = '请求成功'
}: {
  type: T
  description?: string
}) =>
  applyDecorators(
    ApiExtraModels(OkResponseVo, type),
    ApiOkResponse({
      description,
      schema: {
        $ref: getSchemaPath(OkResponseVo),
        properties: {
          data: {
            type: 'object',
            $ref: getSchemaPath(type)
          }
        }
      }
    })
  )
