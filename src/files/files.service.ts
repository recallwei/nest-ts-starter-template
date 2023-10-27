import { Injectable } from '@nestjs/common'
import { sep } from 'path'

import { CosService } from '@/cos/cos.service'

import { FileVo } from './vo'

@Injectable()
export class FilesService {
  constructor(private readonly cosService: CosService) {}

  upload(files: Express.Multer.File[]): FileVo[] {
    const filesResult =
      files?.map((file) => {
        const { fieldname, filename, mimetype, size, originalname } = file
        const path = file.path.replaceAll(sep, '/')
        // TODO: 使用日志记录
        console.log({
          path,
          fieldname,
          filename,
          originalname,
          mimetype,
          size
        })
        return new FileVo({
          path,
          fieldname,
          filename,
          originalname,
          mimetype,
          size
        })
      }) ?? []
    return filesResult
  }

  uploadToCos(files: Express.Multer.File[]): FileVo[] {
    this.cosService.uploadFiles(files)
    const filesResult =
      files?.map((file) => {
        const { fieldname, filename, mimetype, size, originalname } = file
        const path = file.path.replaceAll(sep, '/')
        // TODO: 使用日志记录
        console.log({
          path,
          fieldname,
          filename,
          originalname,
          mimetype,
          size
        })
        return new FileVo({
          path,
          fieldname,
          filename,
          originalname,
          mimetype,
          size
        })
      }) ?? []
    return filesResult
  }
}
