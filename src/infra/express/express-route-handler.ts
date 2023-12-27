import { type RouteHandler } from "@infra/http/protocols/route"
import { type Request, type RequestHandler, type Response } from "express"
import type HttpResponse from "@infra/http/protocols/http-response"

export default function expressRouteHandlerAdapter(routeHandler: RouteHandler): RequestHandler {
  return (request: Request, response: Response) => {
    const responsePromise: Promise<HttpResponse> = routeHandler({
      body: request.body,
    })

    void responsePromise.then((httpResponse) => {
      response.status(httpResponse.statusCode).json(httpResponse.body)
    })
  }
}
