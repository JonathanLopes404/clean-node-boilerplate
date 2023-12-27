import type HttpRequest from "./http-request"
import type HttpResponse from "./http-response"

export default interface Controller {
  handle: (request: HttpRequest) => Promise<HttpResponse>
}
