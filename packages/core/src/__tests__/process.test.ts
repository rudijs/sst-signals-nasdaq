import { describe, it, expect } from "vitest"
import { main } from "../process"

describe("main", () => {
  it('should return "Done"', async () => {
    const result = await main()
    expect(result).toBe("Done")
  })
})
