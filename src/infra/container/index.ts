import { container } from "tsyringe"
import fg from "fast-glob"
import { join } from "node:path"

export async function registerContainerDependencies(): Promise<void> {
  const registers = fg.sync(join(__dirname, "registers", "*.@(js|ts)"))

  await Promise.all(registers.map(async (register) => await import(register)))
}

export default container
