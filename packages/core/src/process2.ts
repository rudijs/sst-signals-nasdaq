import fs from "fs"
import path from "path"
import { rsi, fisherTransform } from "./lib/signals.js"

export const main = async () => {
  let directoryPath = `${process.cwd()}/dist/packages/core/src/data/historical-data`

  if (process.env.NODE_ENV === "test") {
    directoryPath = `${process.cwd()}/packages/core/src/__tests__/fixtures/historical-data`
  }

  try {
    const files = await fs.promises.readdir(directoryPath)
    // console.log(files)

    files.forEach(async (file) => {
      const ticker = file.split(".")[0]
      console.log(`==> Processing ${ticker}`)

      const filePath = path.join(directoryPath, file)
      const stat = await fs.promises.stat(filePath)

      if (stat.isFile()) {
        try {
          const content = await fs.promises.readFile(filePath, "utf8")
          // console.log(content)
          const data = JSON.parse(content)
          // console.log("data :>> ", data)

          const rsiSignal = rsi(data.prices, ticker, 2)
          // console.log("rsiSignal :>> ", rsiSignal)

          const fisherSignal = fisherTransform(data.prices, ticker)
          // console.log("fisherSignal :>> ", fisherSignal)

          if (rsiSignal.side === "overbought" && fisherSignal.side === "bearish") {
            console.log(`==> ${ticker} Selling`)
            return
          }

          if (rsiSignal.side === "overbought" && fisherSignal.side === "bullish") {
            console.log(`==> ${ticker} Selling: Profit taking`)
            return
          }

          if (rsiSignal.side === "oversold") {
            console.log(`==> ${ticker} Buying`)
            return
          }

          console.log(`==> ${ticker} Neutral`)
        } catch (error) {
          console.log(`==> ${ticker} Error: ${error}`)
        }
      }
    })
  } catch (error) {
    console.error(error)
  }

  return "Done"
}
