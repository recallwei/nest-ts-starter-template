import type { Request } from 'express'

import type { JWTPayload } from '@/auth/interfaces'

export interface CustomRequest extends Request {
  user?: JWTPayload
}
