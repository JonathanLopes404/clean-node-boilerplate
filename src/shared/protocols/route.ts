import type HttpRequest from "./http-request"
import type HttpResponse from "./http-response"

export type RouterMethod = "get" | "post" | "delete"

export type RouteHandler = (request: HttpRequest) => Promise<HttpResponse>

export default interface Route {
  handler: RouteHandler
  method: RouterMethod
  path: string
}
