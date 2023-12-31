import { describe, it, expect } from "vitest"
import { summary } from "../summary"

describe("summary", () => {
  it("should return 101", async () => {
    const result = await summary()
    console.log("result :>> ", result)
    // expect(result).toBe("Done")
  })
})
