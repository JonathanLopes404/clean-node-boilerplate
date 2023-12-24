import { type Output } from "@shared/protocols/controller"
import { type RouteHandler } from "@infra/http/protocols/route"
import { type Request, type RequestHandler, type Response } from "express"

export default function expressRouteHandlerAdapter(routeHandler: RouteHandler): RequestHandler {
  return (request: Request, response: Response) => {
    const responsePromise: Promise<Output> = routeHandler(request.body)

    void responsePromise.then((output) => {
      if (output.status === "success") {
        response.status(200).json({
          status: output.status,
          data: output.data,
        })
      } else {
        response.status(400).json({
          status: output.status,
          message: output.message,
        })
      }
    })
  }
}
