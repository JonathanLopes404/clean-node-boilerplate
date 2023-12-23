import { type RouteHandler } from "@shared/protocols/route"
import { type Request, type RequestHandler, type Response } from "express"

export default function expressRouteHandlerAdapter(routeHandler: RouteHandler): RequestHandler {
  return (request: Request, response: Response) => {
    const httpResponsePromise = routeHandler({
      body: request.body,
    })

    void httpResponsePromise.then((httpResponse) => {
      response.status(httpResponse.statusCode).json(httpResponse.body)
    })
  }
}
