export class File {
  path = ''

  fieldname = ''

  filename = ''

  originalname = ''

  mimetype = ''

  size = 0

  constructor(partial: Partial<File>) {
    Object.assign(this, partial)
  }
}
