import { type SuccessOutput, type ErrorOutput } from "@shared/protocols/controller"

export function error(error: Error): ErrorOutput {
  return {
    status: "error",
    message: error.message,
    error,
  }
}

export function success(data: any = null): SuccessOutput {
  return {
    status: "success",
    data,
  }
}
