export default class MissingParamError extends Error {
  public readonly paramName: string

  constructor(paramName: string, message: string) {
    super(message)
    this.name = "MissingParamError"
    this.paramName = paramName
  }
}
