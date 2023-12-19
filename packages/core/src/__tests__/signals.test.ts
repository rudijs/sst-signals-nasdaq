import { describe, it, expect } from "vitest"
import { rsi, fisherTransform2 } from "../lib/signals"
import mockCandlesCLSK from "./fixtures/IREN_1D_30.json"

describe("rsi", () => {
  it("RSI should ...", () => {
    // console.log(mockCandlesCLSK)
    const result = rsi(mockCandlesCLSK.c, "CLSK")
    expect(result).toBe(101)
  })

  it("Fisher Transform should ...", () => {
    // console.log(mockCandlesCLSK)
    const result = fisherTransform2(mockCandlesCLSK, "CLSK")
    // console.log("result :>> ", result)
    // expect(result).toBe(101)
  })
})
