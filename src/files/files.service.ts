import { Injectable } from '@nestjs/common'
import { sep } from 'path'

import { File } from './entities'

@Injectable()
export class FilesService {
  upload(files: Express.Multer.File[]): File[] {
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
        return new File({
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
