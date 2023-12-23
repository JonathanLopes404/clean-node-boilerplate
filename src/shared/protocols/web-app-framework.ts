import type Route from "./route"

export default interface WebAppFramework {
  listen: (port: number, callback?: () => void) => void
  addMiddleware: (middleware: any) => void
  close: () => void
  addRoute: (route: Route) => void
  getRouter: () => any
  initRouter: () => void
}
