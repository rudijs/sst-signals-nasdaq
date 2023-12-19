import { describe, it, expect } from "vitest"
import { rsi, fisherTransform2 } from "../lib/signals"
import mockCandles from "./fixtures/IREN_1D_30.json"

describe("rsi", () => {
  it("RSI should be overbought", () => {
    // console.log(mockCandles)
    const result = rsi(mockCandles.c, "IREN", 2)
    // console.log("result :>> ", result)
    expect(result.name).toBe("RSI 2")
    expect(result.type).toBe("Momentum")
    expect(result.symbol).toBe("IREN")
    expect(result.side).toBe("overbought")
  })

  it("Fisher Transform should be bullish", () => {
    // console.log(mockCandles)
    const result = fisherTransform2(mockCandles, "IREN")
    // console.log("result :>> ", result)
    expect(result.name).toBe("Fisher Transform")
    expect(result.type).toBe("Momentum")
    expect(result.symbol).toBe("IREN")
    expect(result.side).toBe("bullish")
  })
})
