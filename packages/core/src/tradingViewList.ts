import { miners } from "./symbolsList.js"
import * as fs from "fs"

export const main = () => {
  const minersBTC: string[] = []
  const minersIa: string[] = []
  const minersBoom: string[] = []

  const currentWorkingDirectory = process.cwd()
  // console.log(`Current working directory: ${currentWorkingDirectory}`)

  const outDir = `${currentWorkingDirectory}/dist`

  for (const miner of miners) {
    const { symbol, exchange } = miner

    minersBTC.push(`${exchange}:${symbol}`)

    if (miner.lists?.includes("ia")) {
      minersIa.push(`${exchange}:${symbol}`)
    }

    if (miner.tradableAt?.includes("boom")) {
      minersBoom.push(`${exchange}:${symbol}`)
    }
  }

  fs.writeFileSync(outDir + "/Miners-BTC.txt", minersBTC.join(","))
  fs.writeFileSync(outDir + "/Miners-IA.txt", minersIa.join(","))
  fs.writeFileSync(outDir + "/Miners-Boom.txt", minersBoom.join(","))
}
