import { describe, it, expect } from "vitest"
import { rsi, fisherTransform } from "../lib/signals"
import mockCandles from "./fixtures/IREN_1D_30.json"
import mockCandles2 from "./fixtures/stock-v3-get-historical-data_US_WULF.json"

describe("rsi", () => {
  // it("RSI should be overbought", () => {
  //   // console.log(mockCandles)
  //   const result = rsi(mockCandles.c, "IREN", 2)
  //   // console.log("result :>> ", result)
  //   expect(result.name).toBe("RSI 2")
  //   expect(result.type).toBe("Momentum")
  //   expect(result.symbol).toBe("IREN")
  //   expect(result.side).toBe("overbought")
  // })

  // it("Fisher Transform should be bullish", () => {
  //   // console.log(mockCandles)
  //   const result = fisherTransform(mockCandles, "IREN")
  //   // console.log("result :>> ", result)
  //   expect(result.name).toBe("Fisher Transform")
  //   expect(result.type).toBe("Momentum")
  //   expect(result.symbol).toBe("IREN")
  //   expect(result.side).toBe("bullish")
  // })

  it("RSI should be overbought", () => {
    // console.log(mockCandles2)
    const closes = mockCandles2.prices.map((candle: any) => candle.close).reverse()
    // console.log("closes :>> ", closes.length)

    let result = rsi(closes, "WULF", 2)
    // console.log("result :>> ", result)
    expect(result.name).toBe("RSI 2")
    expect(result.type).toBe("Momentum")
    expect(result.symbol).toBe("WULF")
    expect(result.side).toBe("oversold")

    result = rsi(closes, "WULF", 14)
    // console.log("result :>> ", result)
    expect(result.name).toBe("RSI 14")
    expect(result.type).toBe("Momentum")
    expect(result.symbol).toBe("WULF")
    expect(result.side).toBe("neutral")
  })
})
