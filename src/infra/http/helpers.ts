import type HttpResponse from "./protocols/http-response"

export function ok(data: any = null): HttpResponse {
  return {
    statusCode: 200,
    body: {
      status: "success",
      data,
    },
  }
}

export function badRequest(error: Error): HttpResponse {
  return {
    statusCode: 400,
    body: {
      status: "error",
      message: error.message,
      error,
    },
  }
}

export function serverError(error: Error): HttpResponse {
  return {
    statusCode: 400,
    body: {
      status: "error",
      message: "Ocorreu um erro inesperado",
      error,
    },
  }
}
