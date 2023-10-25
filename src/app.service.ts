import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
  getAppInfo() {
    return {
      name: 'Nest TypeScript Starter Template',
      version: '1.0.0'
    }
  }
}
