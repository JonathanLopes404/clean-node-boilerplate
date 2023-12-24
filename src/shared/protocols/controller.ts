export interface SuccessOutput {
  status: "success"
  data: any
}

export interface ErrorOutput {
  status: "error"
  message: string
  error: Error
}

export type Output = SuccessOutput | ErrorOutput

export default interface Controller {
  handle: (input: any) => Promise<Output>
}
