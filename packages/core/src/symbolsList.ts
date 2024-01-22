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
    lists: ["rjs", "ia", "ap"],
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
        name: "yahooFinance",
        url: "https://finance.yahoo.com/quote/WULF",
      },
      {
        name: "vizualStocks",
        url: "https://vizualstocks.com/premium/companies?ticker=WULF",
      },
      {
        name: "tradingView",
        url: "https://www.tradingview.com/chart/?symbol=NASDAQ:WULF&interval=1D",
      },
    ],
  },
  {
    symbol: "SATO",
    yahooFinanceSymbol: "SATO.V",
    name: "Sato Technologies Corp.",
    exchange: "TSXV",
    lists: ["rjs", "ap"],
    type: "Hosted Mining,High-Performance Computing,Artificial Intelligence",
    etfs: [],
    region: "CA",
    links: [
      {
        name: "yahooFinance",
        url: "https://finance.yahoo.com/quote/SATO.V",
      },
      {
        name: "tradingView",
        url: "https://www.tradingview.com/chart/?symbol=TSXV:SATO&interval=1D",
      },
    ],
  },
  {
    symbol: "CBIT",
    yahooFinanceSymbol: "CBIT.V",
    name: "Cathedra Bitcoin Inc",
    exchange: "TSXV",
    type: "Prop Mining",
    lists: ["rjs"],
    etfs: [],
    region: "CA",
    links: [
      {
        name: "yahooFinance",
        url: "https://finance.yahoo.com/quote/CBTTF",
      },
      {
        name: "tradingView",
        url: "https://www.tradingview.com/chart/?symbol=TSXV:CBIT&interval=1D",
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
        name: "yahooFinance",
        url: "https://finance.yahoo.com/quote/BTCM",
      },
      {
        name: "vizualStocks",
        url: "https://vizualstocks.com/premium/companies?ticker=BTCM",
      },
      {
        name: "tradingView",
        url: "https://www.tradingview.com/chart/?symbol=NYSE:BTCM&interval=1D",
      },
    ],
  },
  {
    symbol: "CIFR",
    name: "Cipher Mining Inc.",
    exchange: "NASDAQ",
    lists: ["rjs", "ia"],
    tradableAt: ["boom"],
    type: "Hosted Mining",
    etfs: ["WGMI"],
    region: "US",
    holders: ["ia", "BlackRock"],
    links: [
      {
        name: "yahooFinance",
        url: "https://finance.yahoo.com/quote/CIFR",
      },
      {
        name: "vizualStocks",
        url: "https://vizualstocks.com/premium/companies?ticker=CIFR",
      },
      {
        name: "tradingView",
        url: "https://www.tradingview.com/chart/?symbol=NASDAQ:CIFR&interval=1D",
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
        name: "yahooFinance",
        url: "https://finance.yahoo.com/quote/BLQC",
      },
      {
        name: "tradingView",
        url: "https://www.tradingview.com/chart/?symbol=OTC:BLQC&interval=1D",
      },
    ],
  },
  {
    symbol: "BITF",
    name: "Bitfarms Ltd.",
    exchange: "NASDAQ",
    lists: ["rjs", "ia"],
    tradableAt: ["boom"],
    type: "Prop Mining",
    etfs: ["BITQ", "BKCH", "WGMI", "DAPP"],
    region: "US",
    holders: ["ia"],
    links: [
      {
        name: "yahooFinance",
        url: "https://finance.yahoo.com/quote/BITF",
      },
      {
        name: "vizualStocks",
        url: "https://vizualstocks.com/premium/companies?ticker=BITF",
      },
      {
        name: "tradingView",
        url: "https://www.tradingview.com/chart/?symbol=NASDAQ:BITF&interval=1D",
      },
    ],
  },
  {
    symbol: "MARA",
    name: "Marathon Patent Group Inc.",
    exchange: "NASDAQ",
    lists: ["rjs", "ia", "ap"],
    type: "Hosted Mining",
    etfs: ["BITQ", "BKCH", "WGMI", "DAPP"],
    region: "US",
    holders: ["BlackRock"],
    links: [
      {
        name: "yahooFinance",
        url: "https://finance.yahoo.com/quote/MARA",
      },
      {
        name: "vizualStocks",
        url: "https://vizualstocks.com/premium/companies?ticker=MARA",
      },
      {
        name: "tradingView",
        url: "https://www.tradingview.com/chart/?symbol=NASDAQ:MARA&interval=1D",
      },
    ],
  },
  {
    symbol: "HUT",
    name: "Hut 8 Mining Corp.",
    exchange: "NASDAQ",
    lists: ["rjs", "ia", "ap"],
    type: "Prop Mining",
    etfs: ["BITQ", "BKCH", "WGMI"],
    region: "US",
    links: [
      {
        name: "yahooFinance",
        url: "https://finance.yahoo.com/quote/HUT",
      },
      {
        name: "vizualStocks",
        url: "https://vizualstocks.com/premium/companies?ticker=HUT",
      },
      {
        name: "tradingView",
        url: "https://www.tradingview.com/chart/?symbol=NASDAQ:HUT&interval=1D",
      },
    ],
  },
  {
    symbol: "GREE",
    name: "Greenidge",
    exchange: "NASDAQ",
    type: "Diversified",
    lists: ["rjs", "ap"],
    etfs: [],
    region: "US",
    holders: ["BlackRock"],
    links: [
      {
        name: "yahooFinance",
        url: "https://finance.yahoo.com/quote/GREE",
      },
      {
        name: "vizualStocks",
        url: "https://vizualstocks.com/premium/companies?ticker=GREE",
      },
      {
        name: "tradingView",
        url: "https://www.tradingview.com/chart/?symbol=NASDAQ:GREE&interval=1D",
      },
    ],
  },
  {
    symbol: "SDIG",
    name: "Stronghold Digital Mining Inc",
    exchange: "NASDAQ",
    type: "Hosted Mining",
    lists: ["rjs", "ap"],
    etfs: [],
    region: "US",
    notes: ["Bearish post halving: https://twitter.com/CK_Cryptoklepto/status/1743060713264816194?t=BFGRAb4FSLu4n1X25amy8A"],
    holders: ["BlackRock"],
    links: [
      {
        name: "yahooFinance",
        url: "https://finance.yahoo.com/quote/SDIG",
      },
      {
        name: "vizualStocks",
        url: "https://vizualstocks.com/premium/companies?ticker=SDIG",
      },
      {
        name: "tradingView",
        url: "https://www.tradingview.com/chart/?symbol=NASDAQ:SDIG&interval=1D",
      },
    ],
  },
  {
    symbol: "HIVE",
    name: "VHIVE Blockchain Technologies Ltd",
    exchange: "NASDAQ",
    lists: ["rjs", "ia", "ap"],
    type: "Prop Mining",
    etfs: ["WGMI"],
    region: "CA",
    holders: ["BlackRock"],
    links: [
      {
        name: "yahooFinance",
        url: "https://finance.yahoo.com/quote/HIVE",
      },
      {
        name: "vizualStocks",
        url: "https://vizualstocks.com/premium/companies?ticker=HIVE",
      },
      {
        name: "tradingView",
        url: "https://www.tradingview.com/chart/?symbol=NASDAQ:HIVE&interval=1D",
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
        name: "yahooFinance",
        url: "https://finance.yahoo.com/quote/DGHI",
      },
      {
        name: "vizualStocks",
        url: "https://vizualstocks.com/premium/companies?ticker=DGHI",
      },
      {
        name: "tradingView",
        url: "https://www.tradingview.com/chart/?symbol=NASDAQ:DGHI&interval=1D",
      },
    ],
  },
  {
    symbol: "CLSK",
    name: "CleanSpark Inc",
    exchange: "NASDAQ",
    lists: ["rjs", "ia", "ap"],
    tradableAt: ["boom"],
    type: "Hosted Mining",
    etfs: ["BKCH", "WGMI", "DAPP"],
    region: "US",
    holders: ["ia", "BlackRock"],
    links: [
      {
        name: "yahooFinance",
        url: "https://finance.yahoo.com/quote/CLSK",
      },
      {
        name: "vizualStocks",
        url: "https://vizualstocks.com/premium/companies?ticker=CLSK",
      },
      {
        name: "tradingView",
        url: "https://www.tradingview.com/chart/?symbol=NASDAQ:CLSK&interval=1D",
      },
    ],
  },
  {
    symbol: "ANY",
    name: "Sphere 3D Corp",
    exchange: "NASDAQ",
    lists: ["rjs", "ia"],
    tradableAt: ["boom"],
    type: "Diversified",
    etfs: [],
    region: "US",
    notes: ["Bearish post halving: https://twitter.com/CK_Cryptoklepto/status/1743060713264816194?t=BFGRAb4FSLu4n1X25amy8A"],
    links: [
      {
        name: "yahooFinance",
        url: "https://finance.yahoo.com/quote/ANY",
      },
      {
        name: "vizualStocks",
        url: "https://vizualstocks.com/premium/companies?ticker=ANY",
      },
      {
        name: "tradingView",
        url: "https://www.tradingview.com/chart/?symbol=NASDAQ:ANY&interval=1D",
      },
    ],
  },
  {
    symbol: "IREN",
    name: "Iris Energy Ltd",
    exchange: "NASDAQ",
    lists: ["rjs", "ia", "ap"],
    tradableAt: ["boom"],
    type: "Prop Mining",
    etfs: ["BKCH", "WGMI", "DAPP"],
    region: "US",
    links: [
      {
        name: "yahooFinance",
        url: "https://finance.yahoo.com/quote/IREN",
      },
      {
        name: "vizualStocks",
        url: "https://vizualstocks.com/premium/companies?ticker=IREN",
      },
      {
        name: "tradingView",
        url: "https://www.tradingview.com/chart/?symbol=NASDAQ:IREN&interval=1D",
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
    notes: ["High debt"],
    links: [
      {
        name: "yahooFinance",
        url: "https://finance.yahoo.com/quote/ARBK",
      },
      {
        name: "vizualStocks",
        url: "https://vizualstocks.com/premium/companies?ticker=ARBK",
      },
      {
        name: "tradingView",
        url: "https://www.tradingview.com/chart/?symbol=NASDAQ:ARBK&interval=1D",
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
        name: "yahooFinance",
        url: "https://finance.yahoo.com/quote/CORZQ",
      },
      {
        name: "tradingView",
        url: "https://www.tradingview.com/chart/?symbol=OTC:CORZQ&interval=1D",
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
        name: "yahooFinance",
        url: "https://finance.yahoo.com/quote/MGTI",
      },
      {
        name: "tradingView",
        url: "https://www.tradingview.com/chart/?symbol=OTC:MGTI&interval=1D",
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
        name: "yahooFinance",
        url: "https://finance.yahoo.com/quote/BTZI",
      },
      {
        name: "tradingView",
        url: "https://www.tradingview.com/chart/?symbol=OTC:BTZI&interval=1D",
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
        name: "yahooFinance",
        url: "https://finance.yahoo.com/quote/WELX",
      },
      {
        name: "tradingView",
        url: "https://www.tradingview.com/chart/?symbol=OTC:WELX&interval=1D",
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
        name: "yahooFinance",
        url: "https://finance.yahoo.com/quote/CSTR",
      },
      {
        name: "vizualStocks",
        url: "https://vizualstocks.com/premium/companies?ticker=CSTR",
      },
      {
        name: "tradingView",
        url: "https://www.tradingview.com/chart/?symbol=NASDAQ:CSTR&interval=1D",
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
        name: "yahooFinance",
        url: "https://finance.yahoo.com/quote/INTV",
      },
      {
        name: "tradingView",
        url: "https://www.tradingview.com/chart/?symbol=OTC:INTV&interval=1D",
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
        name: "yahooFinance",
        url: "https://finance.yahoo.com/quote/INVU",
      },
      {
        name: "tradingView",
        url: "https://www.tradingview.com/chart/?symbol=OTC:INVU&interval=1D",
      },
    ],
  },
  {
    symbol: "MIGI",
    name: "Mawson Infrastructure Group Inc",
    exchange: "NASDAQ",
    lists: ["rjs", "ia"],
    tradableAt: ["boom"],
    type: "Prop Mining",
    etfs: [],
    region: "US",
    notes: ["Bearish post halving: https://twitter.com/CK_Cryptoklepto/status/1743060713264816194?t=BFGRAb4FSLu4n1X25amy8A"],
    holders: ["BlackRock"],
    links: [
      {
        name: "yahooFinance",
        url: "https://finance.yahoo.com/quote/MIGI",
      },
      {
        name: "vizualStocks",
        url: "https://vizualstocks.com/premium/companies?ticker=MIGI",
      },
      {
        name: "tradingView",
        url: "https://www.tradingview.com/chart/?symbol=NASDAQ:MIGI&interval=1D",
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
        name: "yahooFinance",
        url: "https://finance.yahoo.com/quote/CCTL",
      },
      {
        name: "tradingView",
        url: "https://www.tradingview.com/chart/?symbol=OTC:CCTL&interval=1D",
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
        name: "yahooFinance",
        url: "https://finance.yahoo.com/quote/EBON",
      },
      {
        name: "vizualStocks",
        url: "https://vizualstocks.com/premium/companies?ticker=EBON",
      },
      {
        name: "tradingView",
        url: "https://www.tradingview.com/chart/?symbol=NASDAQ:EBON&interval=1D",
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
        name: "yahooFinance",
        url: "https://finance.yahoo.com/quote/CBTC",
      },
      {
        name: "tradingView",
        url: "https://www.tradingview.com/chart/?symbol=OTC:CBTC&interval=1D",
      },
    ],
  },
  {
    symbol: "RIOT",
    name: "Riot Blockchain, Inc.",
    exchange: "NASDAQ",
    lists: ["rjs", "ia", "ap"],
    type: "Hosted Mining",
    etfs: ["BITQ", "BKCH", "WGMI", "DAPP"],
    region: "US",
    holders: ["ia", "BlackRock"],
    links: [
      {
        name: "yahooFinance",
        url: "https://finance.yahoo.com/quote/RIOT",
      },
      {
        name: "vizualStocks",
        url: "https://vizualstocks.com/premium/companies?ticker=RIOT",
      },
      {
        name: "tradingView",
        url: "https://www.tradingview.com/chart/?symbol=NASDAQ:RIOT&interval=1D",
      },
    ],
  },
  {
    symbol: "DMGI",
    yahooFinanceSymbol: "DMGI.V",
    name: "DMG Blockchain Solutions",
    exchange: "TSXV",
    type: "Prop Mining and Hosting",
    lists: ["rjs", "ap"],
    etfs: [],
    region: "CA",
    links: [
      {
        name: "yahooFinance",
        url: "https://finance.yahoo.com/quote/DMGI",
      },
      {
        name: "tradingView",
        url: "https://www.tradingview.com/chart/?symbol=TSXV:DMGI&interval=1D",
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
    lists: ["rjs"],
    region: "DE",
    links: [
      {
        name: "yahooFinance",
        url: "https://finance.yahoo.com/quote/NB2",
      },
      {
        name: "tradingView",
        url: "https://www.tradingview.com/chart/?symbol=XETR:NB2&interval=1D",
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
        name: "yahooFinance",
        url: "https://finance.yahoo.com/quote/BFCH",
      },
      {
        name: "tradingView",
        url: "https://www.tradingview.com/chart/?symbol=OTC:BFCH&interval=1D",
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
        name: "yahooFinance",
        url: "https://finance.yahoo.com/quote/SOS",
      },
      {
        name: "vizualStocks",
        url: "https://vizualstocks.com/premium/companies?ticker=SOS",
      },
      {
        name: "tradingView",
        url: "https://www.tradingview.com/chart/?symbol=NYSE:SOS&interval=1D",
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
        name: "yahooFinance",
        url: "https://finance.yahoo.com/quote/SASR",
      },
      {
        name: "vizualStocks",
        url: "https://vizualstocks.com/premium/companies?ticker=SASR",
      },
      {
        name: "tradingView",
        url: "https://www.tradingview.com/chart/?symbol=NASDAQ:SASR&interval=1D",
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
        name: "yahooFinance",
        url: "https://finance.yahoo.com/quote/CAN",
      },
      {
        name: "vizualStocks",
        url: "https://vizualstocks.com/premium/companies?ticker=CAN",
      },
      {
        name: "tradingView",
        url: "https://www.tradingview.com/chart/?symbol=NASDAQ:CAN&interval=1D",
      },
    ],
  },
  {
    symbol: "BTBT",
    name: "Bit Digital Inc.",
    exchange: "NASDAQ",
    lists: ["rjs", "ia", "ap"],
    type: "Hosted Mining and AI",
    etfs: ["BKCH", "WGMI"],
    region: "US",
    holders: ["BlackRock"],
    links: [
      {
        name: "yahooFinance",
        url: "https://finance.yahoo.com/quote/BTBT",
      },
      {
        name: "vizualStocks",
        url: "https://vizualstocks.com/premium/companies?ticker=BTBT",
      },
      {
        name: "tradingView",
        url: "https://www.tradingview.com/chart/?symbol=NASDAQ:BTBT&interval=1D",
      },
    ],
  },
  {
    symbol: "WGMI",
    name: "Valkyrie Bitcoin Miners ETF",
    exchange: "NASDAQ",
    type: "ETF",
    etfs: [],
    lists: ["rjs"],
    region: "US",
    links: [
      {
        name: "yahooFinance",
        url: "https://finance.yahoo.com/quote/WGMI",
      },
      {
        name: "tradingView",
        url: "https://www.tradingview.com/chart/?symbol=NASDAQ:WGMI&interval=1D",
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
        name: "yahooFinance",
        url: "https://finance.yahoo.com/quote/BITQ",
      },
      {
        name: "tradingView",
        url: "https://www.tradingview.com/chart/?symbol=AMEX:BITQ&interval=1D",
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
        name: "yahooFinance",
        url: "https://finance.yahoo.com/quote/DAPP",
      },
      {
        name: "tradingView",
        url: "https://www.tradingview.com/chart/?symbol=NASDAQ:DAPP&interval=1D",
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
        name: "yahooFinance",
        url: "https://finance.yahoo.com/quote/BKCH",
      },
      {
        name: "tradingView",
        url: "https://www.tradingview.com/chart/?symbol=NASDAQ:BKCH&interval=1D",
      },
    ],
  },
  {
    symbol: "BTDR",
    name: "Bitdeer Technologies Group",
    exchange: "NASDAQ",
    tradableAt: ["boom"],
    lists: ["rjs", "ap"],
    etfs: [],
    region: "US",
    holders: ["BlackRock"],
    links: [
      {
        name: "yahooFinance",
        url: "https://finance.yahoo.com/quote/BTDR",
      },
      {
        name: "tradingView",
        url: "https://www.tradingview.com/chart/?symbol=NASDAQ:BTDR&interval=1D",
      },
    ],
  },
  {
    symbol: "SLNH",
    name: "Soluna Holdings, Inc.",
    exchange: "NASDAQ",
    tradableAt: ["boom"],
    lists: ["rjs", "ap"],
    etfs: [],
    region: "US",
    holders: ["BlackRock"],
    links: [
      {
        name: "yahooFinance",
        url: "https://finance.yahoo.com/quote/SLNH",
      },
      {
        name: "vizualStocks",
        url: "https://vizualstocks.com/premium/companies?ticker=SLNH",
      },
      {
        name: "tradingView",
        url: "https://www.tradingview.com/chart/?symbol=NASDAQ:SLNH&interval=1D",
      },
    ],
  },

  {
    symbol: "GRDI",
    yahooFinanceSymbol: "GRDI.NE",
    name: "GRIID infrastructure inc.",
    exchange: "NEO",
    tradableAt: [],
    lists: [],
    etfs: [],
    region: "US",
    holders: [],
    links: [
      {
        name: "yahooFinance",
        url: "https://finance.yahoo.com/quote/GRDI.NE",
      },
      {
        name: "tradingView",
        url: "https://www.tradingview.com/chart/?symbol=NEO:GRDI&interval=1D",
      },
    ],
  },
]
