import HttpRequest from "./http-request";
import HttpResponse from "./http-response";

export type RouteHandler = {
  (request: HttpRequest): Promise<HttpResponse>;
};

export default interface Route {
  handle: RouteHandler;
  method: "get" | "post" | "delete";
  path: string;
}
