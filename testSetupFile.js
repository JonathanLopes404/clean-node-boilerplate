require("reflect-metadata")

// Depedency Injection Container
const { registerContainerDependencies } = require("./src/infra/container")
registerContainerDependencies()

// Env
const dotenv = require("dotenv")
const { join } = require("node:path")
dotenv.config({ path: join(__dirname, ".env.test") })

// date and time
jest.useFakeTimers({ doNotFake: ["nextTick", "setImmediate"] }).setSystemTime(new Date("2021-01-01T00:00:00"))
