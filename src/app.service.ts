import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
  getApp(): string {
    return 'Welcome to Nest.js TypeScript Starter Template!'
  }

  getVersion(): string {
    return '1.0.0'
  }
}
