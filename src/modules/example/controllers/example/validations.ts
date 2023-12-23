import type HttpRequest from "@shared/protocols/http-request"

const validations = {
  handle: (request: HttpRequest): Error[] => {
    const errors: Error[] = []

    return errors
  },
}

export default validations
