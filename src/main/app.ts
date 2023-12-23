import "reflect-metadata"

import fg from "fast-glob"
import { join } from "node:path"
import type Route from "@shared/protocols/route"
import type WebAppFramework from "@shared/protocols/web-app-framework"
import config from "./config/app"

interface AppDependencies {
  webAppFramework: WebAppFramework
}

class App {
  private readonly _app: WebAppFramework

  constructor(dependencies: AppDependencies) {
    this._app = dependencies.webAppFramework

    void this.initMiddlewares()
      .then(async () => {
        await this.registerModuleDependencies()
      })
      .then(() => {
        this.initRoutes()
      })
  }

  private initRoutes(): void {
    const routesPaths = fg.sync(join(__dirname, "..", "modules", "*", "routes.ts"))

    for (const routePath of routesPaths) {
      void import(routePath).then(({ default: routes }) => {
        routes.forEach((route: Route) => {
          this._app.addRoute(route)
        })
      })
    }

    this._app.initRouter()
  }

  private async registerModuleDependencies(): Promise<void> {
    const registers = fg.sync(join(__dirname, "..", "modules", "*", "dependencies.ts"))

    await Promise.all(registers.map(async (register) => await import(register)))
  }

  private async initMiddlewares(): Promise<void> {
    const middlwaresPaths = fg.sync(join(__dirname, "middlewares", "*.ts"))

    for (const path of middlwaresPaths) {
      await import(path).then(({ default: middleware }) => {
        this._app.addMiddleware(middleware())
      })
    }
  }

  public addRoute(route: Route): void {
    this._app.addRoute(route)
  }

  public listen(port: number, callback?: (() => void) | undefined): void {
    this._app.listen(port, callback)
  }

  public close(): void {
    this._app.close()
  }
}

export default new App({
  webAppFramework: config.webAppFramework,
})
