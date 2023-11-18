import Route from "@protocols/route"
import Bill from "./controllers/bill"

const controller = new Bill()

const routes: Route[] = [
  {
    path: "/bill",
    handler: controller.new,
    method: "post",
  },
]

export default routes
