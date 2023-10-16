export class LoginDto {
  username = ''

  password = ''

  constructor(partial: Partial<LoginDto>) {
    Object.assign(this, partial)
  }
}
