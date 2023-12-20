import fs from "fs"
import path from "path"
import { rsi, fisherTransform } from "./lib/signals.js"

export const main = async () => {
  console.log(101, process.cwd())
  console.log(process.env.NODE_ENV)
  let directoryPath = `${process.cwd()}/dist/packages/core/src/data/`

  if (process.env.NODE_ENV === "test") {
    directoryPath = `${process.cwd()}/packages/core/src/__tests__/fixtures/`
  }

  try {
    const files = await fs.promises.readdir(directoryPath)
    // console.log(files)

    files.forEach(async (file) => {
      const ticker = file.split("_")[0]
      // console.log(`==> Processing ${ticker}`)

      const filePath = path.join(directoryPath, file)
      const stat = await fs.promises.stat(filePath)

      if (stat.isFile()) {
        const content = await fs.promises.readFile(filePath, "utf8")
        // console.log(content)
        const data = JSON.parse(content)
        // console.log("data :>> ", data)

        const rsiSignal = rsi(data.c, ticker, 2)
        // console.log("rsiSignal :>> ", rsiSignal)

        const fisherSignal = fisherTransform(data, ticker)
        // console.log("fisherSignal :>> ", fisherSignal)

        if (rsiSignal.side === "overbought" && fisherSignal.side === "bearish") {
          console.log(`==> ${ticker} Selling`)
          return
        }

        if (rsiSignal.side === "overbought" && fisherSignal.side === "bullish") {
          console.log(`==> ${ticker} Profit taking`)
          return
        }

        if (rsiSignal.side === "oversold") {
          console.log(`==> ${ticker} Buying`)
          return
        }

        console.log(`==> ${ticker} Neutral`)
      }
    })
  } catch (error) {
    console.error(error)
  }

  return "Done"
}
