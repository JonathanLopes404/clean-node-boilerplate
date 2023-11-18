import Route from "@protocols/route"
import { Router } from "express"
import IRouter from "@protocols/router"
import expressRouteAdapter from "./express-route-handler"

export default class ExpressRouterAdapter implements IRouter {
  private _router: Router

  constructor() {
    this._router = Router()
  }

  public getRouter(): Router {
    return this._router
  }

  public addRoute(route: Route): void {
    this._router[route.method](route.path, expressRouteAdapter(route.handler))
  }
}
