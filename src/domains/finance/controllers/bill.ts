import { ok } from "@helpers/http"
import Controller from "@protocols/controller"
import HttpRequest from "@protocols/http-request"
import HttpResponse from "@protocols/http-response"

export default class Bill implements Controller {
  public async new(request: HttpRequest): Promise<HttpResponse> {
    return ok("test")
  }
}
