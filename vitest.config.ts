// vitest.config.ts
import { defineConfig } from "vitest/config"

export default defineConfig({
  test: {
    // reporters: ["verbose"],
    coverage: {
      provider: "v8",
      enabled: true,
      reporter: ["text", "json", "html"],
      all: true,
      include: ["packages/**/*.ts"],
      exclude: ["packages/**/types/*", "packages/**/*.d.ts"], //"services/test/scratch.test.ts"],
    },
  },
})
