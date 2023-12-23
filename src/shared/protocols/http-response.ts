export interface SuccessBody {
  status: "success"
  data: any
}

export interface ErrorBody {
  status: "error"
  message: string
  error: Error
}

export default interface HttpResponse {
  statusCode: number
  body: SuccessBody | ErrorBody
}
