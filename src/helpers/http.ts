import HttpResponse from "@protocols/http-response";

export function ok(data: any = null): HttpResponse {
  return {
    statusCode: 200,
    body: {
      status: "success",
      data,
    },
  };
}

export function badRequest(message: string): HttpResponse {
  return {
    statusCode: 400,
    body: {
      status: "error",
      message,
    },
  };
}
