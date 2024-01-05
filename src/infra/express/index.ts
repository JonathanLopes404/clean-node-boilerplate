import type Route from "@infra/http/protocols/route"
import express, { Router, type Express } from "express"
import { type Server } from "http"
import expressRouteHandlerAdapter from "./express-route-handler"
import fg from "fast-glob"
import { join } from "node:path"

export default class ExpressApplication {
  public readonly express: Express
  private readonly _router: Router
  private server: Server

  constructor() {
    this.express = express()
    this._router = Router()
  }

  public async init(): Promise<void> {
    await Promise.all([this.initMiddlewares(), this.initRoutes()])
  }

  public addMiddleware(middleware: any): void {
    this.express.use(middleware)
  }

  public addRoute(route: Route): void {
    this._router[route.method](route.path, expressRouteHandlerAdapter(route.handler))
  }

  private async initRoutes(): Promise<void> {
    const routesPaths = fg.sync(join(__dirname, "..", "http", "routes", "*.ts"))

    for (const routePath of routesPaths) {
      await import(routePath).then(({ default: routes }) => {
        routes.forEach((route: Route) => {
          this.addRoute(route)
        })
      })
    }

    this.express.use(this._router)
  }

  private async initMiddlewares(): Promise<void> {
    const middlwaresPaths = fg
      .sync(join(__dirname, "..", "http", "middlewares", "*.ts"))
      .filter((path) => !path.endsWith(".test.ts"))

    for (const path of middlwaresPaths) {
      await import(path).then(({ default: middleware }) => {
        this.addMiddleware(middleware())
      })
    }
  }

  async run(callback?: (() => void) | undefined): Promise<void> {
    await this.init()

    const PORT = process.env.PORT ?? 3000
    this.server = this.express.listen(PORT, callback)

    this.server.on("listening", () => {
      console.log(`Server is running on http://localhost:${PORT}`)
    })
  }

  close(): void {
    this.server.close()
  }
}
