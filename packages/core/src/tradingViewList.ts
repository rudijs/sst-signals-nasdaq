import { min } from "mathjs"
import { miners } from "./symbolsList.js"
import * as fs from "fs"

export const main = () => {
  const minersBTC: string[] = []
  const minersIa: string[] = []
  const minersAp: string[] = []
  const minersRjs: string[] = []
  const minersBoom: string[] = []
  const minersBlackrock: string[] = []
  const minersETF: string[] = []
  const minersETFHoldings: string[] = []
  const minersETFNonHoldings: string[] = []

  const currentWorkingDirectory = process.cwd()
  // console.log(`Current working directory: ${currentWorkingDirectory}`)

  const outDir = `${currentWorkingDirectory}/dist`

  for (const miner of miners) {
    const { symbol, exchange } = miner

    minersBTC.push(`${exchange}:${symbol}`)

    if (miner.lists?.includes("ia")) {
      minersIa.push(`${exchange}:${symbol}`)
    }

    if (miner.lists?.includes("rjs")) {
      minersRjs.push(`${exchange}:${symbol}`)
    }

    if (miner.lists?.includes("ap")) {
      minersAp.push(`${exchange}:${symbol}`)
    }

    if (miner.tradableAt?.includes("boom")) {
      minersBoom.push(`${exchange}:${symbol}`)
    }

    if (miner.type === "ETF") {
      minersETF.push(`${exchange}:${symbol}`)
    }

    if (miner.etfs.length) {
      minersETFHoldings.push(`${exchange}:${symbol}`)
    } else {
      minersETFNonHoldings.push(`${exchange}:${symbol}`)
    }

    if (miner.holders?.includes("BlackRock")) {
      minersBlackrock.push(`${exchange}:${symbol}`)
    }
  }

  fs.writeFileSync(outDir + "/Miners-BTC.txt", minersBTC.join(","))
  fs.writeFileSync(outDir + "/Miners-IA.txt", minersIa.join(","))
  fs.writeFileSync(outDir + "/Miners-RJS.txt", minersRjs.join(","))
  fs.writeFileSync(outDir + "/Miners-AP.txt", minersAp.join(","))
  fs.writeFileSync(outDir + "/Miners-Boom.txt", minersBoom.join(","))
  fs.writeFileSync(outDir + "/Miners-BlackRock.txt", minersBlackrock.join(","))
  fs.writeFileSync(outDir + "/Miners-ETF.txt", minersETF.join(","))
  fs.writeFileSync(outDir + "/Miners-ETF-Holdings.txt", minersETFHoldings.join(","))
  fs.writeFileSync(outDir + "/Miners-ETF-Non-Holdings.txt", minersETFNonHoldings.join(","))
}
