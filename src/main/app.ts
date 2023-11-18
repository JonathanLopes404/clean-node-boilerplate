import fg from "fast-glob"
import { join } from "node:path"
import Router from "@protocols/router"
import ExpressRouterAdapter from "./adapters/express-router"
import Route from "@protocols/route"
import WebAppFramework from "@protocols/web-app-framework"
import ExpressAdapter from "./adapters/express-adapter"

interface AppDependencies {
  router: Router
  webAppFramework: WebAppFramework
}

class App {
  private _app: WebAppFramework
  private router: Router

  constructor(dependencies: AppDependencies) {
    this.router = dependencies.router
    this._app = dependencies.webAppFramework

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
    this._app.addMiddleware(this.router.getRouter())
  }

  public listen(port: number, callback?: (() => void) | undefined): void {
    this._app.listen(port, callback)
  }
}

export default new App({
  router: new ExpressRouterAdapter(),
  webAppFramework: new ExpressAdapter(),
})
