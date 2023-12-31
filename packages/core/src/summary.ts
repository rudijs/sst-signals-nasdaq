import fs from "fs"
import path from "path"
import { getSummary } from "./getSummary.js"

export const summary = async () => {
  let directoryPath = `${process.cwd()}/dist/packages/core/src/data/summary`

  if (process.env.NODE_ENV === "test") {
    directoryPath = `${process.cwd()}/packages/core/src/__tests__/fixtures/summary`
  }

  const summaryData: any[] = []

  try {
    const files = await fs.promises.readdir(directoryPath)
    // console.log("files :>> ", files)

    for (const file of files) {
      // files.slice(0, 1).forEach(async (file) => {
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

          const summary = getSummary(data)
          // console.log("summary :>> ", summary)

          summaryData.push(summary)
        } catch (error) {
          console.log(`==> ${ticker} Error: ${error}`)
        }
      }
    }
  } catch (error) {
    console.error(error)
  }

  return summaryData.sort((a, b) => b.marketCap - a.marketCap)
}
