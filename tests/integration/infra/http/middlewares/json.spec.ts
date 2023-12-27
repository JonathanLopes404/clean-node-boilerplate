import type ExpressApplication from "@infra/express"
import request from "supertest"
import container from "@infra/container"
import type HttpRequest from "@infra/http/protocols/http-request"
import type HttpResponse from "@infra/http/protocols/http-response"
import { ok } from "@infra/http/helpers"

describe("JSON Middleware Test", () => {
  let _app: ExpressApplication

  beforeAll(async () => {
    _app = container.resolve<ExpressApplication>("Application")
    await _app.init()
  })

  it("Should parse json body", async () => {
    _app.addRoute({
      path: "/test_parse_json",
      method: "post",
      handler: async (request: HttpRequest): Promise<HttpResponse> => {
        return ok(request.body)
      },
    })

    const response = await request(_app.express)
      .post("/test_parse_json")
      .send({ ok: true })
      .set("Accept", "application/json")

    expect(response.statusCode).toBe(200)
    expect(response.body.data).toEqual({ ok: true })
  })
})
