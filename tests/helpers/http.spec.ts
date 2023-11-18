import { ok } from "@helpers/http";

describe("HTTP helper", () => {
  test("ensure ok helper function returns correct data", () => {
    const response = ok("any_data");

    expect(response).toEqual({
      statusCode: 200,
      body: {
        status: "success",
        data: "any_data",
      },
    });
  });
});
