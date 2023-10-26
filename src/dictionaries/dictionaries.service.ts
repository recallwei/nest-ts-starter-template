import { Injectable } from '@nestjs/common'

import type { CreateDictionaryDto } from './dto/create-dictionary.dto'
import type { UpdateDictionaryDto } from './dto/update-dictionary.dto'

@Injectable()
export class DictionariesService {
  create(createDictionaryDto: CreateDictionaryDto) {
    return createDictionaryDto
  }

  findMany() {
    return 'This action returns all dictionaries'
  }

  findOne(id: number) {
    return `This action returns a #${id} dictionary`
  }

  update(_id: number, updateDictionaryDto: UpdateDictionaryDto) {
    return updateDictionaryDto
  }

  remove(id: number) {
    return `This action removes a #${id} dictionary`
  }
}
