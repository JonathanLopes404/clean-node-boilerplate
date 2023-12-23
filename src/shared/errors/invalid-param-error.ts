export default class InvalidParamError extends Error {
  public readonly paramName: string

  constructor(paramName: string, message: string) {
    super(message)
    this.name = "InvalidParamError"
    this.paramName = paramName
  }
}
