import type Route from "@infra/http/protocols/route"
import container from "@infra/container"
import ExampleController from "../controllers/example"

const exampleController = container.resolve(ExampleController)

const routes: Route[] = [
  {
    path: "/",
    handler: exampleController.handle.bind(exampleController),
    method: "get",
  },
]

export default routes
