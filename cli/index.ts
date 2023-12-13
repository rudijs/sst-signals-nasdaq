import { Command } from "commander"
// import using the 'js file extension' to avoid the 'Cannot use import statement outside a module' error
// for this use case of compiling the typescript code to javascript and running it in node
import { main } from "../packages/core/src/nasdaq.js"

const program = new Command()

program.name("signals-nasdaq").description("CLI for NASDAQ signals").version("1.0.0")

// Usage
// node dist/cli nasdaq >! dist/curl.sh
// bash dist/curl.sh

program
  .command("nasdaq")
  .description("Fetch, store, process and create report from nasdaq data")
  .action(async () => {
    await main()
  })

program.parse()
