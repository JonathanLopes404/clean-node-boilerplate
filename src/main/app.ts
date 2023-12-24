import "reflect-metadata"

import type AppFramework from "@infra/protocols/app-framework"
import config from "./config/app"

interface AppDependencies {
  appFramework: AppFramework
}

class App {
  private readonly _app: AppFramework

  constructor(dependencies: AppDependencies) {
    this._app = dependencies.appFramework
  }

  public async run(callback?: (() => void) | undefined): Promise<void> {
    await this._app.run(callback)
  }

  public close(): void {
    this._app.close()
  }
}

export default new App({
  appFramework: config.appFramework,
})
