import axios from "axios"
import * as fs from "fs"
import { miners } from "./symbolsList.js"

const currentWorkingDirectory = process.cwd()
// console.log(`Current working directory: ${currentWorkingDirectory}`)

const outDir = `${currentWorkingDirectory}/dist/packages/core/src/data/historical-data`

// make outdir if it doesn't exist
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir)
}

export const fetchHistoricalData = async (apiKey: string) => {
  // console.log("miners :>> ", miners)
  for (const miner of miners) {
    console.log("miner :>> ", miner.symbol)

    const options = {
      method: "GET",
      url: "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v3/get-historical-data",
      params: {
        symbol: miner.yahooFinanceSymbol || miner.symbol,
        region: miner.region,
      },
      headers: {
        "X-RapidAPI-Key": apiKey,
        "X-RapidAPI-Host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
      },
    }
    // console.log("options :>> ", options)

    try {
      const response = await axios.request(options)
      // console.log(response.data)
      // write data to file
      fs.writeFileSync(outDir + `/${miner.symbol}.json`, JSON.stringify(response.data, null, 2))
    } catch (error) {
      console.error(error)
    }
  }
}
