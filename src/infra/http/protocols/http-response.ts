interface SuccessResponse {
  status: "success"
  data: any
}

interface ErrorResponse {
  status: "error"
  message: string
  error: Error
}

export default interface HttpResponse {
  statusCode: number
  body: SuccessResponse | ErrorResponse
}
