import Route from "@protocols/route";
import Bill from "./controllers/bill";

const controller = new Bill();

const routes: Route[] = [
  {
    path: "/",
    handle: controller.new,
    method: "get",
  },
];

export default routes;
