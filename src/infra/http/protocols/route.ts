import { type Output } from "@shared/protocols/controller"

export type RouterMethod = "get" | "post" | "delete"

export type RouteHandler = (input: any) => Promise<Output>

export default interface Route {
  handler: RouteHandler
  method: RouterMethod
  path: string
}
