import type Controller from "@shared/protocols/controller"
import validations from "./validations"
import { injectable } from "tsyringe"
import { type Output } from "@shared/protocols/controller"
import { error, success } from "@shared/helpers/controller"

@injectable()
export default class ExampleController implements Controller {
  public async handle(input: any): Promise<Output> {
    const validatonErrors = validations.handle(input)
    if (validatonErrors.length > 0) {
      return error(validatonErrors.shift()!)
    }

    return success("Hello world")
  }
}
