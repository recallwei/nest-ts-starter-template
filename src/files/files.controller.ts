import {
  Controller,
  Get,
  Param,
  Post,
  Res,
  UploadedFiles,
  UseInterceptors
} from '@nestjs/common'
import { AnyFilesInterceptor } from '@nestjs/platform-express'
import { Response } from 'express'

import { STORAGE_DIR } from '@/common'

import { FilesService } from './files.service'

@Controller('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @Post()
  @UseInterceptors(AnyFilesInterceptor())
  upload(@UploadedFiles() files: Express.Multer.File[]) {
    return this.filesService.upload(files)
  }

  @Get('download/:path')
  download(@Param('path') path: string, @Res() res: Response) {
    return res.download(`${STORAGE_DIR}/${path}`)
  }

  @Get(':path')
  findOne(@Param('path') path: string, @Res() res: Response) {
    return res.sendFile(path, { root: STORAGE_DIR })
  }
}
