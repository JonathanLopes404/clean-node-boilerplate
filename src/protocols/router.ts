import Route from "./route"

export default interface Router {
  addRoute(route: Route): void
  getRouter(): any
}
