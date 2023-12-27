import container from "@infra/container"
import ExpressApplication from "@infra/express"

container.registerSingleton<ExpressApplication>("Application", ExpressApplication)
