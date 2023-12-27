import type Controller from "@infra/http/protocols/controller"
import validations from "./validations"
import { injectable } from "tsyringe"
import type HttpRequest from "@infra/http/protocols/http-request"
import type HttpResponse from "@infra/http/protocols/http-response"
import { badRequest, ok } from "@infra/http/helpers"

@injectable()
export default class ExampleController implements Controller {
  public async handle(request: HttpRequest): Promise<HttpResponse> {
    const validatonErrors = validations.handle(request.body)
    if (validatonErrors.length > 0) {
      return badRequest(validatonErrors.shift()!)
    }

    return ok()
  }
}
