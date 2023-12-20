// fetch and store nasdaq data
// process each symbol and create report
import { miners } from "./symbolsList.js"

const requiredEnvironmanetVars = ["MARKETDATA_API_KEY"]

requiredEnvironmanetVars.forEach((item) => {
  if (!process.env[item]) {
    throw new Error(`Required environment variable missing: ${item}`)
  }
})

const apiKey = process.env.MARKETDATA_API_KEY

export const main = async () => {
  const currentWorkingDirectory = process.cwd()
  // console.log(`Current working directory: ${currentWorkingDirectory}`)

  const outDir = `${currentWorkingDirectory}/dist/packages/core/src/data`

  console.log(`rm -rfv ${outDir}`)
  console.log(`mkdir -v ${outDir}`)

  for (const miner of miners) {
    const countback = 30
    const resolution = "1D"
    const dateformat = "timestamp"
    const symbol = miner.symbol
    const output = `${outDir}/${symbol}_${resolution}_${countback}.json`

    console.log(`echo '==> Fetching ${symbol} data...'`)

    const cmd = `curl -X 'GET' 'https://api.marketdata.app/v1/stocks/candles/${resolution}/${symbol}/?format=json&countback=${countback}&dateformat=${dateformat}&token=${apiKey}' -H 'accept: */*' -H 'X-CSRFToken: ${apiKey}' -o ${output}`

    console.log(cmd)
  }
}
