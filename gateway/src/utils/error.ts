// Type and Interface
import { ErrorOption, ErrorCode } from "../types/error"

export class CustomError extends Error {
  code: ErrorCode

  constructor(option: ErrorOption) {
    super(option.message)

    this.code = option.code
  }
}
