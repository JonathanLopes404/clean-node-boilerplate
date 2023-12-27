import "reflect-metadata"

import type ExpressApplication from "@infra/express"
import container, { registerContainerDependencies } from "@infra/container"

async function bootstrap(): Promise<void> {
  await registerContainerDependencies()
  const app = container.resolve<ExpressApplication>("Application")
  await app.run()
}

void bootstrap()
