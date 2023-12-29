export type NasdaqSymbol = {
  name: string
  symbol: string
  exchange: string
  type?: string
  url?: string
  lists?: string[]
  tradableAt?: string[]
}

export const miners: NasdaqSymbol[] = [
  {
    symbol: "WULF",
    name: "TeraWulf Inc.",
    exchange: "NASDAQ",
    lists: ["ia", "ap"],
    url: "https://finance.yahoo.com/quote/WULF",
    type: "Hosted Mining",
  },
  {
    symbol: "CBTTF",
    name: "Cathedra Bitcoin Inc",
    exchange: "OTC",
    url: "https://finance.yahoo.com/quote/CBTTF",
    type: "Prop Mining",
  },
  {
    symbol: "BTCM",
    name: "BIT Mining Ltd",
    exchange: "NYSE",
    url: "https://finance.yahoo.com/quote/BTCM",
    tradableAt: ["boom"],
    type: "Prop Mining",
  },
  {
    symbol: "CIFR",
    name: "Cipher Mining Inc.",
    exchange: "NASDAQ",
    lists: ["ia"],
    url: "https://finance.yahoo.com/quote/CIFR",
    tradableAt: ["boom"],
    type: "Hosted Mining",
  },
  {
    symbol: "BLQC",
    name: "BlockQuarry Corp.",
    exchange: "OTC",
    url: "https://finance.yahoo.com/quote/BLQC",
    type: "Hosted Mining",
  },
  {
    symbol: "BITF",
    name: "Bitfarms Ltd.",
    exchange: "NASDAQ",
    lists: ["ia"],
    url: "https://finance.yahoo.com/quote/BITF",
    tradableAt: ["boom"],
    type: "Prop Mining",
  },
  {
    symbol: "MARA",
    name: "Marathon Patent Group Inc.",
    exchange: "NASDAQ",
    lists: ["ia", "ap"],
    url: "https://finance.yahoo.com/quote/MARA",
    type: "Hosted Mining",
  },
  {
    symbol: "HUT",
    name: "Hut 8 Mining Corp.",
    exchange: "NASDAQ",
    lists: ["ia", "ap"],
    url: "https://finance.yahoo.com/quote/HUT",
    type: "Prop Mining",
  },
  {
    symbol: "GREE",
    name: "Greenidge",
    exchange: "NASDAQ",
    url: "https://finance.yahoo.com/quote/GREE",
    type: "Diversified",
    lists: ["ap"],
  },
  {
    symbol: "SDIG",
    name: "Stronghold Digital Mining Inc",
    exchange: "NASDAQ",
    url: "https://finance.yahoo.com/quote/SDIG",
    type: "Hosted Mining",
    lists: ["ap"],
  },
  {
    symbol: "HIVE",
    name: "VHIVE Blockchain Technologies Ltd",
    exchange: "NASDAQ",
    lists: ["ia", "ap"],
    url: "https://finance.yahoo.com/quote/HIVE",
    type: "Prop Mining",
  },
  {
    symbol: "DGHI",
    name: "Digihost Technology Inc",
    exchange: "NASDAQ",
    lists: ["ia"],
    url: "https://finance.yahoo.com/quote/DGHI",
    tradableAt: ["boom"],
    type: "Hosted Mining",
  },
  {
    symbol: "CLSK",
    name: "CleanSpark Inc",
    exchange: "NASDAQ",
    lists: ["ia", "ap"],
    url: "https://finance.yahoo.com/quote/CLSK",
    tradableAt: ["boom"],
    type: "Hosted Mining",
  },
  {
    symbol: "ANY",
    name: "Sphere 3D Corp",
    exchange: "NASDAQ",
    lists: ["ia"],
    url: "https://finance.yahoo.com/quote/ANY",
    tradableAt: ["boom"],
    type: "Diversified",
  },
  {
    symbol: "IREN",
    name: "Iris Energy Ltd",
    exchange: "NASDAQ",
    lists: ["ia", "ap"],
    url: "https://finance.yahoo.com/quote/IREN",
    tradableAt: ["boom"],
    type: "Prop Mining",
  },
  {
    symbol: "ARBK",
    name: "Argo Blockchain Plc",
    exchange: "NASDAQ",
    lists: ["ia", "ap"],
    url: "https://finance.yahoo.com/quote/ARBK",
    tradableAt: ["boom"],
  },
  {
    symbol: "CORZQ",
    name: "Core Scientific, Inc.",
    exchange: "OTC",
    lists: ["ia", "ap"],
    url: "https://finance.yahoo.com/quote/CORZQ",
    type: "Diversified",
  },
  {
    symbol: "MGTI",
    name: "MGT Capital Investments Inc",
    exchange: "OTC",
    url: "https://finance.yahoo.com/quote/MGTI",
    tradableAt: ["boom"],
    type: "Prop Mining",
  },
  {
    symbol: "BTZI",
    name: "BOTS Inc",
    exchange: "OTC",
    url: "https://finance.yahoo.com/quote/BTZI",
    tradableAt: ["boom"],
    type: "Diversified",
  },
  {
    symbol: "WELX",
    name: "Winland Holdings Corp",
    exchange: "OTC",
    url: "https://finance.yahoo.com/quote/WELX",
    tradableAt: ["boom"],
    type: "Hosted Mining",
  },
  {
    symbol: "CSTR",
    name: "CryptoStar Corp.",
    exchange: "NASDAQ",
    url: "https://finance.yahoo.com/quote/CSTR",
    tradableAt: ["boom"],
    type: "Prop Mining and Hosting",
  },
  {
    symbol: "INTV",
    name: "Integrated Ventures Inc",
    exchange: "OTC",
    url: "https://finance.yahoo.com/quote/INTV",
    type: "Hosted Mining",
  },
  {
    symbol: "INVU",
    name: "Investview Inc",
    exchange: "OTC",
    url: "https://finance.yahoo.com/quote/INVU",
    tradableAt: ["boom"],
    type: "Hosted Mining",
  },
  {
    symbol: "MIGI",
    name: "Mawson Infrastructure Group Inc",
    exchange: "NASDAQ",
    lists: ["ia"],
    url: "https://finance.yahoo.com/quote/MIGI",
    tradableAt: ["boom"],
    type: "Prop Mining",
  },
  {
    symbol: "CCTL",
    name: "Coin Citadel",
    exchange: "OTC",
    url: "https://finance.yahoo.com/quote/CCTL",
    tradableAt: ["boom"],
    type: "Hosted Mining",
  },
  {
    symbol: "EBON",
    name: "Ebang International Holdings, Inc.",
    exchange: "NASDAQ",
    url: "https://finance.yahoo.com/quote/EBON",
    tradableAt: ["boom"],
    type: "Manufacturer",
  },
  {
    symbol: "CBTC",
    name: "XTRA Bitcoin Inc.",
    exchange: "OTC",
    url: "https://finance.yahoo.com/quote/CBTC",
    tradableAt: ["boom"],
    type: "Prop Mining",
  },
  {
    symbol: "RIOT",
    name: "Riot Blockchain, Inc.",
    exchange: "NASDAQ",
    lists: ["ia", "ap"],
    url: "https://finance.yahoo.com/quote/RIOT",
    type: "Hosted Mining",
  },
  {
    symbol: "DMGI",
    name: "DMG Blockchain Solutions",
    exchange: "TSXV",
    url: "https://finance.yahoo.com/quote/DMGI",
    type: "Prop Mining and Hosting",
    lists: ["ap"],
  },
  {
    symbol: "NB2",
    name: "Northern Data AG",
    exchange: "XETR",
    url: "https://finance.yahoo.com/quote/NB2",
    tradableAt: ["boom"],
    type: "Prop Mining and Hosting",
  },
  {
    symbol: "BFCH",
    name: "BitFrontier Capital Holdings Inc.",
    exchange: "OTC",
    url: "https://finance.yahoo.com/quote/BFCH",
    tradableAt: ["boom"],
    type: "Hosted Mining",
  },
  {
    symbol: "SOS",
    name: "SOS Limited",
    exchange: "NYSE",
    url: "https://finance.yahoo.com/quote/SOS",
    tradableAt: ["boom"],
    type: "Diversified",
  },
  {
    symbol: "SASR",
    name: "Sandy Spring Bancorp",
    exchange: "NASDAQ",
    url: "https://finance.yahoo.com/quote/SASR",
    tradableAt: ["boom"],
    type: "Prop Mining",
  },
  {
    symbol: "CAN",
    name: "Canaan, Inc.",
    exchange: "NASDAQ",
    url: "https://finance.yahoo.com/quote/CAN",
    tradableAt: ["boom"],
    type: "Manufacturer",
  },
  {
    symbol: "LEAS",
    name: "Strategic Asset Leasing Inc.",
    exchange: "OTC",
    url: "https://finance.yahoo.com/quote/LEAS",
    tradableAt: ["boom"],
    type: "Prop Mining",
  },
  {
    symbol: "BTBT",
    name: "Bit Digital Inc.",
    exchange: "NASDAQ",
    lists: ["ia", "ap"],
    url: "https://finance.yahoo.com/quote/BTBT",
    type: "Hosted Mining",
  },
  {
    symbol: "SATO",
    name: "Sato Technologies Corp.",
    exchange: "TSXV",
    url: "https://finance.yahoo.com/quote/SATO.V",
    lists: ["ap"],
  },
  {
    symbol: "WGMI",
    name: "Valkyrie Bitcoin Miners ETF",
    exchange: "NASDAQ",
    url: "https://finance.yahoo.com/quote/WGMI",
  },
  {
    symbol: "BTDR",
    name: "Bitdeer Technologies Group",
    exchange: "NASDAQ",
    url: "https://finance.yahoo.com/quote/BTDR",
    tradableAt: ["boom"],
    lists: ["ap"],
  },
  {
    symbol: "SLNH",
    name: "Soluna Holdings, Inc.",
    exchange: "NASDAQ",
    url: "https://finance.yahoo.com/quote/SLNH",
    tradableAt: ["boom"],
    lists: ["ap"],
  },
  {
    symbol: "PHX",
    name: "Phoenix Group Plc",
    exchange: "ADX",
    url: "https://www.tradingview.com/symbols/ADX-PHX/",
    tradableAt: [],
    lists: [],
  },
]

const ai: NasdaqSymbol[] = [
  {
    symbol: "METV",
    name: "MRoundhill Ball Metaverse ETF",
    exchange: "NYSE",
    url: "https://finance.yahoo.com/quote/METV",
  },
  {
    symbol: "TECB",
    name: "iShares U.S. Tech Breakthrough Multisector ETF",
    exchange: "NYSE",
    url: "https://finance.yahoo.com/quote/TECB",
  },
  {
    symbol: "AIQ",
    name: "Global X Artificial Intelligence & Technology ETF",
    exchange: "NASDAQ",
    url: "https://finance.yahoo.com/quote/AIQ",
  },
  {
    symbol: "BOTZ",
    name: "Global X Robotics & Artificial Intelligence ETF",
    exchange: "NASDAQ",
    url: "https://finance.yahoo.com/quote/BOTZ",
  },
  {
    symbol: "ROBT",
    name: "First Trust Nasdaq Artificial Intelligence and Robotics ETF",
    exchange: "NASDAQ",
    url: "https://finance.yahoo.com/quote/ROBT",
  },
  {
    symbol: "PNQI",
    name: "Invesco NASDAQ Internet ETF",
    exchange: "NASDAQ",
    url: "https://finance.yahoo.com/quote/PNQI",
  },
  {
    symbol: "QQQ",
    name: "Invesco QQQ Trust",
    exchange: "NASDAQ",
    url: "https://finance.yahoo.com/quote/QQQ",
  },
  {
    symbol: "LOUP",
    name: "Innovator Deepwater Frontier Tech ETF",
    exchange: "NYSE",
    url: "https://finance.yahoo.com/quote/LOUP",
  },
  {
    symbol: "IXN",
    name: "iShares Global Tech ETF",
    exchange: "NYSE",
    url: "https://finance.yahoo.com/quote/IXN",
  },
  {
    symbol: "IYW",
    name: "iShares U.S. Technology ETF",
    exchange: "NYSE",
    url: "https://finance.yahoo.com/quote/IYW",
  },
  {
    symbol: "XLK",
    name: "Technology Select Sector SPDR Fund",
    exchange: "NYSE",
    url: "https://finance.yahoo.com/quote/XLK",
  },
]
