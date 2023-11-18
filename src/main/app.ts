import Route from "@protocols/route";
import express, { Express, Router } from "express";
import fg from "fast-glob";
import { join } from "node:path";
import expressRouteAdapter from "./adapters/express-route-adapter";

class App {
  private _app: Express;
  private router: Router;

  constructor() {
    this._app = express();
    this.router = Router();

    this.initRoutes();
    this.initMiddlewares();
  }

  public initRoutes() {
    const routesPaths = fg.sync(
      join(__dirname, "../", "domains", "*/routes.ts")
    );

    for (const routePath of routesPaths) {
      import(routePath).then(({ default: routes }) => {
        routes.map((route: Route) => {
          this.router[route.method](
            route.path,
            expressRouteAdapter(route.handle)
          );
        });
      });
    }
  }

  public initMiddlewares() {
    this._app.use(this.router);
  }

  public listen(port: number, callback?: (() => void) | undefined): void {
    this._app.listen(port, callback);
  }
}

export default new App();
