import WebAppFramework from "@protocols/web-app-framework"
import express, { Express } from "express"

export default class ExpressAdapter implements WebAppFramework {
  private express: Express

  constructor() {
    this.express = express()
  }

  addMiddleware(middleware: any): void {
    this.express.use(middleware)
  }

  listen(port: number, callback?: (() => void) | undefined): void {
    this.express.listen(port, callback)
  }
}
