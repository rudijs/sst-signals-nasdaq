import { describe, it, expect } from "vitest"
import { main } from "../process2"

describe("main", () => {
  it('should return "Done"', async () => {
    const result = await main()
    expect(result).toBe("Done")
  })
})
