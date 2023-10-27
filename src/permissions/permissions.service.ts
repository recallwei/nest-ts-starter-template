import { Injectable } from '@nestjs/common'

import type { CreatePermissionDto } from './dto/create-permission.dto'
import type { UpdatePermissionDto } from './dto/update-permission.dto'

@Injectable()
export class PermissionsService {
  create(createPermissionDto: CreatePermissionDto) {
    console.log(createPermissionDto)
    return 'This action adds a new permission'
  }

  findAll() {
    return 'This action returns all permissions'
  }

  findOne(id: number) {
    return `This action returns a #${id} permission`
  }

  update(id: number, updatePermissionDto: UpdatePermissionDto) {
    console.log(updatePermissionDto)
    return `This action updates a #${id} permission`
  }

  remove(id: number) {
    return `This action removes a #${id} permission`
  }
}
