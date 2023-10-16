import { Module, UnprocessableEntityException } from '@nestjs/common'
import { MulterModule } from '@nestjs/platform-express'
import { diskStorage } from 'multer'
import { extname } from 'path'

import { fileExtensionMap, MAX_UPLOAD_FILE_SIZE } from '@/common'
import { uuid } from '@/utils'

import { FilesController } from './files.controller'
import { FilesService } from './files.service'

@Module({
  imports: [
    /**
     * TODO: 考虑使用配置文件
     * - 文件存储路径
     * - 文件大小限制
     * - 文件上传数量限制
     */
    MulterModule.register({
      storage: diskStorage({
        destination: 'uploads',
        filename: (_, file, callback) =>
          callback(null, `${uuid() + extname(file.originalname)}`)
      }),
      limits: {
        fileSize: MAX_UPLOAD_FILE_SIZE
      },
      fileFilter: (_req, file, callback) => {
        if (fileExtensionMap.get(file.mimetype)) {
          callback(null, true)
        } else {
          callback(
            // TODO: i18n
            new UnprocessableEntityException('无法处理的文件类型'),
            false
          )
        }
      }
    })
  ],
  controllers: [FilesController],
  providers: [FilesService]
})
export class FilesModule {}
