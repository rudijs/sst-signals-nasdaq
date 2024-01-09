import { describe, it, expect } from "vitest"
import { main } from "../symbolUpdate"
import { miners } from "../symbolsList"

describe("boomTickers", () => {
  it("should contain all the expected tickers", () => {
    const res = main(miners)
    console.log(JSON.stringify(res, null, 2))
  })
})
