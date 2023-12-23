import type Controller from "@shared/protocols/controller"
import type HttpRequest from "@shared/protocols/http-request"
import type HttpResponse from "@shared/protocols/http-response"
import validations from "./validations"
import { injectable } from "tsyringe"
import { badRequest, ok } from "@shared/helpers/http"

@injectable()
export default class ExampleController implements Controller {
  public async handle(request: HttpRequest): Promise<HttpResponse> {
    const validatonErrors = validations.handle(request)
    if (validatonErrors.length > 0) {
      return badRequest(validatonErrors.shift()!)
    }

    return ok("Hello world")
  }
}
