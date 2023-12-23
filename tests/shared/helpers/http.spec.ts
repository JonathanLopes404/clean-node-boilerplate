import { badRequest, created, ok } from "@shared/helpers/http"

describe("HTTP helper", () => {
  test("ensure ok helper function returns correct data", () => {
    const response = ok("any_data")

    expect(response).toEqual({
      statusCode: 200,
      body: {
        status: "success",
        data: "any_data",
      },
    })
  })

  test("ensure badRequest helper function returns correct data", () => {
    const error = new Error("any_message")
    const response = badRequest(error)

    expect(response).toEqual({
      statusCode: 400,
      body: {
        status: "error",
        message: "any_message",
        error,
      },
    })
  })

  test("ensure created helper function returns correct data", () => {
    const response = created()

    expect(response).toEqual({
      statusCode: 201,
      body: {
        status: "success",
        data: null,
      },
    })
  })
})
