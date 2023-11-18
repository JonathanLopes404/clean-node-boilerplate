import express, { Express } from "express"
import fg from "fast-glob"
import { join } from "node:path"
import Router from "@protocols/router"
import ExpressRouterAdapter from "./adapters/express-router"
import Route from "@protocols/route"

interface AppDependencies {
  router: Router
}

class App {
  private _app: Express
  private router: Router

  constructor(dependencies: AppDependencies) {
    this._app = express()
    this.router = dependencies.router

    this.initRoutes()
    this.initMiddlewares()
  }

  public initRoutes() {
    const routesPaths = fg.sync(
      join(__dirname, "..", "domains", "*", "routes.ts")
    )

    for (const routePath of routesPaths) {
      import(routePath).then(({ default: routes }) => {
        routes.map((route: Route) => this.router.addRoute(route))
      })
    }
  }

  public initMiddlewares() {
    this._app.use(this.router.getRouter())
  }

  public listen(port: number, callback?: (() => void) | undefined): void {
    this._app.listen(port, callback)
  }
}

export default new App({
  router: new ExpressRouterAdapter(),
})
