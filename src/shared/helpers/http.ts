import type HttpResponse from "@shared/protocols/http-response"

export function ok(data: any = null): HttpResponse {
  return {
    statusCode: 200,
    body: {
      status: "success",
      data,
    },
  }
}

export function created(): HttpResponse {
  return {
    statusCode: 201,
    body: {
      status: "success",
      data: null,
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
