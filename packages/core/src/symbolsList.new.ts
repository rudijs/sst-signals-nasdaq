export type NasdaqSymbol = {
  name: string
  symbol: string
  yahooFinanceSymbol?: string
  exchange: string
  type?: string
  lists?: string[]
  tradableAt?: string[]
  region: "US" | "BR" | "AU" | "CA" | "FR" | "DE" | "HK" | "IN" | "IT" | "ES" | "GB" | "SG"
  etfs: string[]
  holders?: string[]
  notes?: string[]
  links: { name: string; url: string }[]
}

export const miners: NasdaqSymbol[] = [
  {
    symbol: "WULF",
    name: "TeraWulf Inc.",
    exchange: "NASDAQ",
    lists: ["ia", "ap"],
    type: "Hosted Mining",
    etfs: [],
    region: "US",
    notes: [
      "Bearish post halving: https://twitter.com/CK_Cryptoklepto/status/1743060713264816194?t=BFGRAb4FSLu4n1X25amy8A",
      "Bearish post halving: https://twitter.com/Micro2Macr0/status/1743093231082955261?t=BFGRAb4FSLu4n1X25amy8A",
    ],
    holders: ["BlackRock"],
    links: [
      {
        name: "Yahoo Finance",
        url: "https://finance.yahoo.com/quote/WULF",
      },
      {
        name: "Vizual Stocks",
        url: "https://vizualstocks.com/premium/companies?ticker=WULF",
      },
    ],
  },
  {
    symbol: "SATO",
    yahooFinanceSymbol: "SATO.V",
    name: "Sato Technologies Corp.",
    exchange: "TSXV",
    lists: ["ap"],
    type: "Hosted Mining,High-Performance Computing,Artificial Intelligence",
    etfs: [],
    region: "CA",
    links: [
      {
        name: "Yahoo Finance",
        url: "https://finance.yahoo.com/quote/SATO.V",
      },
    ],
  },
  {
    symbol: "CBIT",
    yahooFinanceSymbol: "CBIT.V",
    name: "Cathedra Bitcoin Inc",
    exchange: "TSXV",
    type: "Prop Mining",
    etfs: [],
    region: "CA",
    links: [
      {
        name: "Yahoo Finance",
        url: "https://finance.yahoo.com/quote/CBTTF",
      },
    ],
  },
  {
    symbol: "BTCM",
    name: "BIT Mining Ltd",
    exchange: "NYSE",
    tradableAt: ["boom"],
    type: "Prop Mining",
    etfs: [],
    region: "US",
    links: [
      {
        name: "Yahoo Finance",
        url: "https://finance.yahoo.com/quote/BTCM",
      },
      {
        name: "Vizual Stocks",
        url: "https://vizualstocks.com/premium/companies?ticker=BTCM",
      },
    ],
  },
  {
    symbol: "CIFR",
    name: "Cipher Mining Inc.",
    exchange: "NASDAQ",
    lists: ["ia"],
    tradableAt: ["boom"],
    type: "Hosted Mining",
    etfs: ["WGMI"],
    region: "US",
    holders: ["ia", "BlackRock"],
    links: [
      {
        name: "Yahoo Finance",
        url: "https://finance.yahoo.com/quote/CIFR",
      },
      {
        name: "Vizual Stocks",
        url: "https://vizualstocks.com/premium/companies?ticker=CIFR",
      },
    ],
  },
  {
    symbol: "BLQC",
    name: "BlockQuarry Corp.",
    exchange: "OTC",
    type: "Hosted Mining",
    etfs: [],
    region: "US",
    links: [
      {
        name: "Yahoo Finance",
        url: "https://finance.yahoo.com/quote/BLQC",
      },
    ],
  },
  {
    symbol: "BITF",
    name: "Bitfarms Ltd.",
    exchange: "NASDAQ",
    lists: ["ia"],
    tradableAt: ["boom"],
    type: "Prop Mining",
    etfs: ["BITQ", "BKCH", "WGMI", "DAPP"],
    region: "US",
    holders: ["ia"],
    links: [
      {
        name: "Yahoo Finance",
        url: "https://finance.yahoo.com/quote/BITF",
      },
      {
        name: "Vizual Stocks",
        url: "https://vizualstocks.com/premium/companies?ticker=BITF",
      },
    ],
  },
  {
    symbol: "MARA",
    name: "Marathon Patent Group Inc.",
    exchange: "NASDAQ",
    lists: ["ia", "ap"],
    type: "Hosted Mining",
    etfs: ["BITQ", "BKCH", "WGMI", "DAPP"],
    region: "US",
    holders: ["BlackRock"],
    links: [
      {
        name: "Yahoo Finance",
        url: "https://finance.yahoo.com/quote/MARA",
      },
      {
        name: "Vizual Stocks",
        url: "https://vizualstocks.com/premium/companies?ticker=MARA",
      },
    ],
  },
  {
    symbol: "HUT",
    name: "Hut 8 Mining Corp.",
    exchange: "NASDAQ",
    lists: ["ia", "ap"],
    type: "Prop Mining",
    etfs: ["BITQ", "BKCH", "WGMI"],
    region: "US",
    links: [
      {
        name: "Yahoo Finance",
        url: "https://finance.yahoo.com/quote/HUT",
      },
      {
        name: "Vizual Stocks",
        url: "https://vizualstocks.com/premium/companies?ticker=HUT",
      },
    ],
  },
  {
    symbol: "GREE",
    name: "Greenidge",
    exchange: "NASDAQ",
    type: "Diversified",
    lists: ["ap"],
    etfs: [],
    region: "US",
    holders: ["BlackRock"],
    links: [
      {
        name: "Yahoo Finance",
        url: "https://finance.yahoo.com/quote/GREE",
      },
      {
        name: "Vizual Stocks",
        url: "https://vizualstocks.com/premium/companies?ticker=GREE",
      },
    ],
  },
  {
    symbol: "SDIG",
    name: "Stronghold Digital Mining Inc",
    exchange: "NASDAQ",
    type: "Hosted Mining",
    lists: ["ap"],
    etfs: [],
    region: "US",
    notes: ["Bearish post halving: https://twitter.com/CK_Cryptoklepto/status/1743060713264816194?t=BFGRAb4FSLu4n1X25amy8A"],
    holders: ["BlackRock"],
    links: [
      {
        name: "Yahoo Finance",
        url: "https://finance.yahoo.com/quote/SDIG",
      },
      {
        name: "Vizual Stocks",
        url: "https://vizualstocks.com/premium/companies?ticker=SDIG",
      },
    ],
  },
  {
    symbol: "HIVE",
    name: "VHIVE Blockchain Technologies Ltd",
    exchange: "NASDAQ",
    lists: ["ia", "ap"],
    type: "Prop Mining",
    etfs: ["WGMI"],
    region: "CA",
    holders: ["BlackRock"],
    links: [
      {
        name: "Yahoo Finance",
        url: "https://finance.yahoo.com/quote/HIVE",
      },
      {
        name: "Vizual Stocks",
        url: "https://vizualstocks.com/premium/companies?ticker=HIVE",
      },
    ],
  },
  {
    symbol: "DGHI",
    name: "Digihost Technology Inc",
    exchange: "NASDAQ",
    lists: ["ia"],
    tradableAt: ["boom"],
    type: "Hosted Mining",
    etfs: [],
    region: "US",
    links: [
      {
        name: "Yahoo Finance",
        url: "https://finance.yahoo.com/quote/DGHI",
      },
      {
        name: "Vizual Stocks",
        url: "https://vizualstocks.com/premium/companies?ticker=DGHI",
      },
    ],
  },
  {
    symbol: "CLSK",
    name: "CleanSpark Inc",
    exchange: "NASDAQ",
    lists: ["ia", "ap"],
    tradableAt: ["boom"],
    type: "Hosted Mining",
    etfs: ["BKCH", "WGMI", "DAPP"],
    region: "US",
    holders: ["ia", "BlackRock"],
    links: [
      {
        name: "Yahoo Finance",
        url: "https://finance.yahoo.com/quote/CLSK",
      },
      {
        name: "Vizual Stocks",
        url: "https://vizualstocks.com/premium/companies?ticker=CLSK",
      },
    ],
  },
  {
    symbol: "ANY",
    name: "Sphere 3D Corp",
    exchange: "NASDAQ",
    lists: ["ia"],
    tradableAt: ["boom"],
    type: "Diversified",
    etfs: [],
    region: "US",
    notes: ["Bearish post halving: https://twitter.com/CK_Cryptoklepto/status/1743060713264816194?t=BFGRAb4FSLu4n1X25amy8A"],
    links: [
      {
        name: "Yahoo Finance",
        url: "https://finance.yahoo.com/quote/ANY",
      },
      {
        name: "Vizual Stocks",
        url: "https://vizualstocks.com/premium/companies?ticker=ANY",
      },
    ],
  },
  {
    symbol: "IREN",
    name: "Iris Energy Ltd",
    exchange: "NASDAQ",
    lists: ["ia", "ap"],
    tradableAt: ["boom"],
    type: "Prop Mining",
    etfs: ["BKCH", "WGMI", "DAPP"],
    region: "US",
    links: [
      {
        name: "Yahoo Finance",
        url: "https://finance.yahoo.com/quote/IREN",
      },
      {
        name: "Vizual Stocks",
        url: "https://vizualstocks.com/premium/companies?ticker=IREN",
      },
    ],
  },
  {
    symbol: "ARBK",
    name: "Argo Blockchain Plc",
    exchange: "NASDAQ",
    lists: ["ia", "ap"],
    tradableAt: ["boom"],
    etfs: [],
    region: "US",
    links: [
      {
        name: "Yahoo Finance",
        url: "https://finance.yahoo.com/quote/ARBK",
      },
      {
        name: "Vizual Stocks",
        url: "https://vizualstocks.com/premium/companies?ticker=ARBK",
      },
    ],
  },
  {
    symbol: "CORZQ",
    name: "Core Scientific, Inc.",
    exchange: "OTC",
    lists: ["ia", "ap"],
    type: "Diversified",
    etfs: [],
    region: "US",
    links: [
      {
        name: "Yahoo Finance",
        url: "https://finance.yahoo.com/quote/CORZQ",
      },
    ],
  },
  {
    symbol: "MGTI",
    name: "MGT Capital Investments Inc",
    exchange: "OTC",
    tradableAt: ["boom"],
    type: "Prop Mining",
    etfs: [],
    region: "US",
    links: [
      {
        name: "Yahoo Finance",
        url: "https://finance.yahoo.com/quote/MGTI",
      },
    ],
  },
  {
    symbol: "BTZI",
    name: "BOTS Inc",
    exchange: "OTC",
    tradableAt: ["boom"],
    type: "Diversified",
    etfs: [],
    region: "US",
    links: [
      {
        name: "Yahoo Finance",
        url: "https://finance.yahoo.com/quote/BTZI",
      },
    ],
  },
  {
    symbol: "WELX",
    name: "Winland Holdings Corp",
    exchange: "OTC",
    tradableAt: ["boom"],
    type: "Hosted Mining",
    etfs: [],
    region: "US",
    links: [
      {
        name: "Yahoo Finance",
        url: "https://finance.yahoo.com/quote/WELX",
      },
    ],
  },
  {
    symbol: "CSTR",
    name: "CapStar Financial Holdings Inc",
    exchange: "NASDAQ",
    tradableAt: ["boom"],
    type: "Prop Mining and Hosting",
    etfs: [],
    region: "US",
    holders: ["BlackRock"],
    links: [
      {
        name: "Yahoo Finance",
        url: "https://finance.yahoo.com/quote/CSTR",
      },
      {
        name: "Vizual Stocks",
        url: "https://vizualstocks.com/premium/companies?ticker=CSTR",
      },
    ],
  },
  {
    symbol: "INTV",
    name: "Integrated Ventures Inc",
    exchange: "OTC",
    type: "Hosted Mining",
    etfs: [],
    region: "US",
    links: [
      {
        name: "Yahoo Finance",
        url: "https://finance.yahoo.com/quote/INTV",
      },
    ],
  },
  {
    symbol: "INVU",
    name: "Investview Inc",
    exchange: "OTC",
    tradableAt: ["boom"],
    type: "Hosted Mining",
    etfs: [],
    region: "US",
    links: [
      {
        name: "Yahoo Finance",
        url: "https://finance.yahoo.com/quote/INVU",
      },
    ],
  },
  {
    symbol: "MIGI",
    name: "Mawson Infrastructure Group Inc",
    exchange: "NASDAQ",
    lists: ["ia"],
    tradableAt: ["boom"],
    type: "Prop Mining",
    etfs: [],
    region: "US",
    notes: ["Bearish post halving: https://twitter.com/CK_Cryptoklepto/status/1743060713264816194?t=BFGRAb4FSLu4n1X25amy8A"],
    holders: ["BlackRock"],
    links: [
      {
        name: "Yahoo Finance",
        url: "https://finance.yahoo.com/quote/MIGI",
      },
      {
        name: "Vizual Stocks",
        url: "https://vizualstocks.com/premium/companies?ticker=MIGI",
      },
    ],
  },
  {
    symbol: "CCTL",
    name: "Coin Citadel",
    exchange: "OTC",
    tradableAt: ["boom"],
    type: "Hosted Mining",
    etfs: [],
    region: "US",
    links: [
      {
        name: "Yahoo Finance",
        url: "https://finance.yahoo.com/quote/CCTL",
      },
    ],
  },
  {
    symbol: "EBON",
    name: "Ebang International Holdings, Inc.",
    exchange: "NASDAQ",
    tradableAt: ["boom"],
    type: "Manufacturer",
    etfs: [],
    region: "US",
    holders: ["BlackRock"],
    links: [
      {
        name: "Yahoo Finance",
        url: "https://finance.yahoo.com/quote/EBON",
      },
      {
        name: "Vizual Stocks",
        url: "https://vizualstocks.com/premium/companies?ticker=EBON",
      },
    ],
  },
  {
    symbol: "CBTC",
    name: "XTRA Bitcoin Inc.",
    exchange: "OTC",
    tradableAt: ["boom"],
    type: "Prop Mining",
    etfs: [],
    region: "US",
    links: [
      {
        name: "Yahoo Finance",
        url: "https://finance.yahoo.com/quote/CBTC",
      },
    ],
  },
  {
    symbol: "RIOT",
    name: "Riot Blockchain, Inc.",
    exchange: "NASDAQ",
    lists: ["ia", "ap"],
    type: "Hosted Mining",
    etfs: ["BITQ", "BKCH", "WGMI", "DAPP"],
    region: "US",
    holders: ["ia", "BlackRock"],
    links: [
      {
        name: "Yahoo Finance",
        url: "https://finance.yahoo.com/quote/RIOT",
      },
      {
        name: "Vizual Stocks",
        url: "https://vizualstocks.com/premium/companies?ticker=RIOT",
      },
    ],
  },
  {
    symbol: "DMGI",
    yahooFinanceSymbol: "DMGI.V",
    name: "DMG Blockchain Solutions",
    exchange: "TSXV",
    type: "Prop Mining and Hosting",
    lists: ["ap"],
    etfs: [],
    region: "CA",
    links: [
      {
        name: "Yahoo Finance",
        url: "https://finance.yahoo.com/quote/DMGI",
      },
    ],
  },
  {
    symbol: "NB2",
    yahooFinanceSymbol: "NB2.DE",
    name: "Northern Data AG",
    exchange: "XETR",
    tradableAt: ["boom"],
    type: "Prop Mining and Hosting",
    etfs: ["BITQ", "DAPP"],
    region: "DE",
    links: [
      {
        name: "Yahoo Finance",
        url: "https://finance.yahoo.com/quote/NB2",
      },
    ],
  },
  {
    symbol: "BFCH",
    name: "BitFrontier Capital Holdings Inc.",
    exchange: "OTC",
    tradableAt: ["boom"],
    type: "Hosted Mining",
    etfs: [],
    region: "US",
    links: [
      {
        name: "Yahoo Finance",
        url: "https://finance.yahoo.com/quote/BFCH",
      },
    ],
  },
  {
    symbol: "SOS",
    name: "SOS Limited",
    exchange: "NYSE",
    tradableAt: ["boom"],
    type: "Diversified",
    etfs: [],
    region: "US",
    holders: ["BlackRock"],
    links: [
      {
        name: "Yahoo Finance",
        url: "https://finance.yahoo.com/quote/SOS",
      },
      {
        name: "Vizual Stocks",
        url: "https://vizualstocks.com/premium/companies?ticker=SOS",
      },
    ],
  },
  {
    symbol: "SASR",
    name: "Sandy Spring Bancorp",
    exchange: "NASDAQ",
    tradableAt: ["boom"],
    type: "Prop Mining",
    etfs: [],
    region: "US",
    holders: ["BlackRock"],
    links: [
      {
        name: "Yahoo Finance",
        url: "https://finance.yahoo.com/quote/SASR",
      },
      {
        name: "Vizual Stocks",
        url: "https://vizualstocks.com/premium/companies?ticker=SASR",
      },
    ],
  },
  {
    symbol: "CAN",
    name: "Canaan, Inc.",
    exchange: "NASDAQ",
    tradableAt: ["boom"],
    type: "Manufacturer",
    etfs: [],
    region: "US",
    holders: ["BlackRock"],
    links: [
      {
        name: "Yahoo Finance",
        url: "https://finance.yahoo.com/quote/CAN",
      },
      {
        name: "Vizual Stocks",
        url: "https://vizualstocks.com/premium/companies?ticker=CAN",
      },
    ],
  },
  {
    symbol: "BTBT",
    name: "Bit Digital Inc.",
    exchange: "NASDAQ",
    lists: ["ia", "ap"],
    type: "Hosted Mining and AI",
    etfs: ["BKCH", "WGMI"],
    region: "US",
    holders: ["BlackRock"],
    links: [
      {
        name: "Yahoo Finance",
        url: "https://finance.yahoo.com/quote/BTBT",
      },
      {
        name: "Vizual Stocks",
        url: "https://vizualstocks.com/premium/companies?ticker=BTBT",
      },
    ],
  },
  {
    symbol: "WGMI",
    name: "Valkyrie Bitcoin Miners ETF",
    exchange: "NASDAQ",
    type: "ETF",
    etfs: [],
    region: "US",
    links: [
      {
        name: "Yahoo Finance",
        url: "https://finance.yahoo.com/quote/WGMI",
      },
    ],
  },
  {
    symbol: "BITQ",
    name: "Bitwise Crypto Industry Innovators ETF",
    exchange: "AMEX",
    type: "ETF",
    etfs: [],
    region: "US",
    links: [
      {
        name: "Yahoo Finance",
        url: "https://finance.yahoo.com/quote/BITQ",
      },
    ],
  },
  {
    symbol: "DAPP",
    name: "VanEck Digital Transformation ETF",
    exchange: "NASDAQ",
    type: "ETF",
    etfs: [],
    region: "US",
    links: [
      {
        name: "Yahoo Finance",
        url: "https://finance.yahoo.com/quote/DAPP",
      },
    ],
  },
  {
    symbol: "BKCH",
    name: "Global X Blockchain ETF",
    exchange: "NASDAQ",
    type: "ETF",
    etfs: [],
    region: "US",
    links: [
      {
        name: "Yahoo Finance",
        url: "https://finance.yahoo.com/quote/BKCH",
      },
    ],
  },
  {
    symbol: "BTDR",
    name: "Bitdeer Technologies Group",
    exchange: "NASDAQ",
    tradableAt: ["boom"],
    lists: ["ap"],
    etfs: [],
    region: "US",
    holders: ["BlackRock"],
    links: [
      {
        name: "Yahoo Finance",
        url: "https://finance.yahoo.com/quote/BTDR",
      },
    ],
  },
  {
    symbol: "SLNH",
    name: "Soluna Holdings, Inc.",
    exchange: "NASDAQ",
    tradableAt: ["boom"],
    lists: ["ap"],
    etfs: [],
    region: "US",
    holders: ["BlackRock"],
    links: [
      {
        name: "Yahoo Finance",
        url: "https://finance.yahoo.com/quote/SLNH",
      },
      {
        name: "Vizual Stocks",
        url: "https://vizualstocks.com/premium/companies?ticker=SLNH",
      },
    ],
  },
]
