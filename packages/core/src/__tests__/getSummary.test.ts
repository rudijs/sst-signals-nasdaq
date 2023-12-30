import { describe, it, expect } from "vitest"
import { getSummary } from "../getSummary"
import summaryData from "./fixtures/stock-v2-get-summary_US_WULF.json"

describe("#getSummary", () => {
  it("should return the summary for the given symbol", async () => {
    const result = await getSummary(summaryData)
    // console.log("result :>> ", result)
    // { symbol: 'WULF', marketCap: 578196032, fullTimeEmployees: 8 }
    expect(result.symbol).toBe("WULF")
    expect(result.marketCap).toBe(578196032)
    expect(result.fullTimeEmployees).toBe(8)
  })
})
