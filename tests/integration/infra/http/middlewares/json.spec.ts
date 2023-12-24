import { success } from "@shared/helpers/controller"
import { type Output } from "@shared/protocols/controller"
import ExpressAdapter from "@infra/express/express-adapter"
import request from "supertest"

describe("JSON Middleware Test", () => {
  let _app: ExpressAdapter

  beforeAll(async () => {
    _app = new ExpressAdapter()
    await _app.init()
  })

  it("Should parse json body", async () => {
    _app.addRoute({
      path: "/test_parse_json",
      method: "post",
      handler: async (input: any): Promise<Output> => {
        return success(input)
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
