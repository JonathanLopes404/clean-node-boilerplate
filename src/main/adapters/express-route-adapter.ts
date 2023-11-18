import { RouteHandler } from "@protocols/route";
import { Request, RequestHandler, Response } from "express";

export default function expressRouteAdapter(
  routeHandler: RouteHandler
): RequestHandler {
  return async (request: Request, response: Response) => {
    const httpResponse = await routeHandler(request);

    return response.status(httpResponse.statusCode).json(httpResponse.body);
  };
}
