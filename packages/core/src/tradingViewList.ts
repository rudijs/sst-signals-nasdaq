import { miners } from "./symbolsList.js"

export const main = () => {
  const list: string[] = []

  for (const miner of miners) {
    const { symbol, exchange } = miner

    // list.push(`${exchange}:${symbol}`)
    console.log(`https://trade.boom.com.hk/allmarkets/newBuyOrderPlace.jsp?market=US&code=${symbol}&quantity=2`)
    console.log("")
  }

  console.log(list.join(","))
  console.log(list.join(","))
}
