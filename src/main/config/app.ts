import ExpressAdapter from "@main/adapters/express-adapter"
import ExpressRouterAdapter from "@main/adapters/express-router"

const config = {
  webAppFramework: new ExpressAdapter(),
  router: new ExpressRouterAdapter(),
}

export default config
