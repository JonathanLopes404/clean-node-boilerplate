import type Route from "@shared/protocols/route"
import type WebAppFramework from "@shared/protocols/web-app-framework"
import express, { Router, type Express } from "express"
import { type Server } from "http"
import expressRouteHandlerAdapter from "./express-route-handler"

export default class ExpressAdapter implements WebAppFramework {
  private readonly express: Express
  private readonly _router: Router
  private server: Server

  constructor() {
    this.express = express()
    this._router = Router()
  }

  addMiddleware(middleware: any): void {
    this.express.use(middleware)
  }

  public getRouter(): Router {
    return this._router
  }

  public addRoute(route: Route): void {
    this._router[route.method](route.path, expressRouteHandlerAdapter(route.handler))
  }

  public initRouter(): void {
    this.express.use(this._router)
  }

  listen(port: number, callback?: (() => void) | undefined): void {
    this.server = this.express.listen(port, callback)
  }

  close(): void {
    this.server.close()
  }
}
