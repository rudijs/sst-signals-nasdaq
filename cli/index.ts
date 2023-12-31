import { Command } from "commander"
// import using the 'js file extension' to avoid the 'Cannot use import statement outside a module' error
// for this use case of compiling the typescript code to javascript and running it in node
import { main } from "../packages/core/src/nasdaq.js"
import { main as tvList } from "../packages/core/src/tradingViewList.js"
import { main as processSignals } from "../packages/core/src/process.js"
import { fetchData } from "../packages/core/src/fetchData.js"
import { fetchHistoricalData } from "../packages/core/src/fetchHistoricalData.js"
import { main as processSignals2 } from "../packages/core/src/process2.js"
import { summary } from "../packages/core/src/summary.js"
import Table from "cli-table"

const program = new Command()

program.name("signals-nasdaq").description("CLI for NASDAQ signals").version("1.0.0")

const requiredEnvironmanetVars = ["RAPIDAPI_API_KEY"]

requiredEnvironmanetVars.forEach((item) => {
  if (!process.env[item]) {
    throw new Error(`Required environment variable missing: ${item}`)
  }
})

const RAPIDAPI_API_KEY = process.env.RAPIDAPI_API_KEY as string

// Usage
// node dist/cli nasdaq >! dist/curl.sh
// bash dist/curl.sh

// program
//   .command("nasdaq")
//   .description("Fetch, store, process and create report from nasdaq data")
//   .action(async () => {
//     await main()
//   })

// program
//   .command("signals")
//   .description("Read data and generate signals")
//   .action(async () => {
//     await processSignals()
//   })

program
  .command("list")
  .description("Print list of symbols for tradingview")
  .action(async () => {
    await tvList()
  })

program
  .command("fetch-summary")
  .description("Fetch symbol summary data from Yahoo finance")
  .action(async () => {
    await fetchData(RAPIDAPI_API_KEY)
  })

program
  .command("fetch-data")
  .description("Fetch symbol historical data from Yahoo finance")
  .action(async () => {
    await fetchHistoricalData(RAPIDAPI_API_KEY)
  })

program
  .command("signals2")
  .description("Read data and generate signals")
  .action(async () => {
    await processSignals2()
  })

program
  .command("summary")
  .description("Summary data")
  .action(async () => {
    const res = await summary()
    // console.log(res)
    // instantiate
    var table = new Table({
      head: ["Stock", "Market Cap"],
      // colWidths: [100, 200],
    })

    // table is an Array, so you can `push`, `unshift`, `splice` and friends
    res.forEach((element) => {
      table.push([element.symbol, element.marketCapFmt])
    })

    console.log(table.toString())
  })

program.parse()
