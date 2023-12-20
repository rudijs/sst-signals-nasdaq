import { miners } from "./symbolsList.js"

export const main = () => {
  const list: string[] = []

  for (const miner of miners) {
    const { symbol, exchange } = miner

    list.push(`${exchange}:${symbol}`)
  }

  console.log(list.join(","))
}
