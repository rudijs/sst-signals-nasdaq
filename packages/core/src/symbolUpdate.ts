import { NasdaqSymbol } from "./symbolsList.js"
import { bitq, bkch, wgmi, dapp } from "./etf-holdings"

export const main = (data: NasdaqSymbol[]) => {
  // console.log("data :>> ", data)

  const boomTickers = [
    "BTCM",
    "SGLY",
    "CIFR",
    "BITF",
    "DGHI",
    "CLSK",
    "ANY",
    "IREN",
    "ARBK",
    "MGTI",
    "BTZI",
    "WELX",
    "CSTR",
    "INVU",
    "MIGI",
    "CCTL",
    "EBON",
    "CBTC",
    "NB2",
    "BFCH",
    "SOS",
    "SASR",
    "CAN",
    "LEAS",
  ]

  const apListTickers = [
    "SLNH",
    "SATO",
    "GREE",
    "DMGI",
    "SDIG",
    "ARBK",
    "BTBT",
    "HIVE",
    "IREN",
    "CORZQ",
    "WULF",
    "BTIF",
    "BTDR",
    "HUT",
    "CLSK",
    "RIOT",
    "MARA",
  ]

  const equityTypes = [
    { name: "WULF", type: "Hosted Mining" },
    { name: "CBTTF", type: "Prop Mining" },
    { name: "BTCM", type: "Prop Mining" },
    // { name: "SGLY", type: "Diversified" },
    { name: "CIFR", type: "Hosted Mining" },
    { name: "BLQC", type: "Hosted Mining" },
    { name: "BITF", type: "Prop Mining" },
    { name: "MARA", type: "Hosted Mining" },
    { name: "HUT", type: "Prop Mining" },
    { name: "GREE", type: "Diversified" },
    { name: "SDIG", type: "Hosted Mining" },
    { name: "HIVE", type: "Prop Mining" },
    { name: "DGHI", type: "Hosted Mining" },
    { name: "CLSK", type: "Hosted Mining" },
    { name: "ANY", type: "Diversified" },
    { name: "LGLOF", type: "Hosted Mining" },
    { name: "IREN", type: "Prop Mining" },
    { name: "ARBKF", type: "Hosted Mining" },
    { name: "CORZQ", type: "Diversified" },
    { name: "MGTI", type: "Prop Mining" },
    { name: "BTZI", type: "Diversified" },
    { name: "TAALF", type: "Hosting Services" },
    { name: "WELX", type: "Hosted Mining" },
    { name: "RIGZ", type: "ETF" },
    { name: "CSTR", type: "Prop Mining and Hosting" },
    { name: "INTV", type: "Hosted Mining" },
    { name: "INVU", type: "Hosted Mining" },
    { name: "MIGI", type: "Prop Mining" },
    { name: "CCTL", type: "Hosted Mining" },
    { name: "EBON", type: "Manufacturer" },
    { name: "CBTC", type: "Prop Mining" },
    { name: "RIOT", type: "Hosted Mining" },
    { name: "DMGI", type: "Prop Mining and Hosting" },
    { name: "NB2", type: "Prop Mining and Hosting" },
    { name: "BFCH", type: "Hosted Mining" },
    { name: "SOS", type: "Diversified" },
    { name: "SASR", type: "Prop Mining" },
    { name: "CAN", type: "Manufacturer" },
    { name: "LEAS", type: "Prop Mining" },
    { name: "HUT", type: "Prop Mining" },
    { name: "BTBT", type: "Hosted Mining" },
  ]

  const bitqTickers = bitq.map((item) => item.symbol)
  // console.log("bitqTickers :>> ", bitqTickers)

  const bkchTickers = bkch.map((item) => item.symbol)
  // console.log("bkchTickers :>> ", bkchTickers)

  const wgmiTickers = wgmi.map((item) => item.symbol)
  // console.log("wgmiTickers :>> ", wgmiTickers)

  const dappTickers = dapp.map((item) => item.symbol)
  // console.log("dappTickers :>> ", dappTickers)

  for (const miner of data) {
    // add url
    // miner.url = `https://finance.yahoo.com/quote/${miner.symbol}`
    // https://finance.yahoo.com/quote/WULF
    // if (boomTickers.includes(miner.symbol)) {
    //   miner.tradableAt = ["boom"]
    // }
    // // add type
    // const found = equityTypes.find((item) => item.name === miner.symbol)
    // if (found) {
    //   // console.log("found :>> ", found)
    //   miner.type = found.type
    // }
    // if (apListTickers.includes(miner.symbol)) {
    //   if (miner.lists) {
    //     miner.lists.push("ap")
    //   } else {
    //     miner.lists = ["ap"]
    //   }
    // }

    if (bitqTickers.includes(miner.symbol)) miner.etfs.push("BITQ")
    if (bkchTickers.includes(miner.symbol)) miner.etfs.push("BKCH")
    if (wgmiTickers.includes(miner.symbol)) miner.etfs.push("WGMI")
    if (dappTickers.includes(miner.symbol)) miner.etfs.push("DAPP")
  }

  return data
}
