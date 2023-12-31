import { RSI, EMA } from "technicalindicators"
import Decimal from "decimal.js"
import * as math from "mathjs"

export const rsi = (close: number[], symbol: string, rsiLength = 14, emaLength = 55) => {
  const signal = {
    name: `RSI ${rsiLength}`,
    type: "Momentum",
    symbol,
    side: "neutral",
  }

  const rsiInput = {
    values: close,
    period: rsiLength,
  }

  // RSI
  const rsi = RSI.calculate(rsiInput)
  // console.log(JSON.stringify(rsi, null, 2))

  if (rsi.length && rsi.length >= 2) {
    const prevRsi = rsi[rsi.length - 2]
    const currRsi = rsi[rsi.length - 1]
    // console.log("currRsi :>> ", currRsi)
    // console.log(prevRsi, currRsi)

    // EMA
    const ema55 = EMA.calculate({ period: emaLength, values: rsi })
    const prevEma = ema55[ema55.length - 2]
    const currEma = ema55[ema55.length - 1]
    // console.log(prevEma, currEma)

    if (currRsi >= 70) signal.side = "overbought"
    if (currRsi <= 30) signal.side = "oversold"
  }

  return signal
}

// export const volumeFlowIndicator = (ohlcv: Iohlcv[], symbol: string) => {
type CandleSticks = {
  s: "ok"
  t: string
  o: number[]
  h: number[]
  l: number[]
  c: number[]
  v: number[]
}

type CandleSticks2 = {
  date: number
  open: number
  high: number
  low: number
  close: number
  volume: number
  adjclose: number
}

export const fisherTransform = (data: CandleSticks2[], symbol: string): any => {
  // https://gist.githubusercontent.com/marketcalls/e7889dd1d4dbc1d7b1af/raw/864544ad7db297ca3607bf0d337bc7c664489f61/Fisher%2520Transform%2520Indicator%2520by%2520Ehlers

  ////////////////////////////////////////////////////////////
  //
  // 	Market prices do not have a Gaussian probability density function
  // 	as many traders think. Their probability curve is not bell-shaped.
  // 	But trader can create a nearly Gaussian PDF for prices by normalizing
  // 	them or creating a normalized indicator such as the relative strength
  // 	index and applying the Fisher transform. Such a transformed output
  // 	creates the peak swings as relatively rare events.
  // 	Fisher transform formula is: y = 0.5 * ln ((1+x)/(1-x))
  // 	The sharp turning points of these peak swings clearly and unambiguously
  // 	identify price reversals in a timely manner.
  ////////////////////////////////////////////////////////////
  /*
study(title="Fisher Transform Indicator by Ehlers Strategy", shorttitle="Fisher Transform Indicator by Ehlers")
Length = input(10, minval=1)
xHL2 = hl2
xMaxH = highest(xHL2, Length)
xMinL = lowest(xHL2,Length)
nValue1 = 0.33 * 2 * ((xHL2 - xMinL) / (xMaxH - xMinL) - 0.5) + 0.67 * nz(nValue1[1])
nValue2 = iff(nValue1 > .99,  .999,
	        iff(nValue1 < -.99, -.999, nValue1))
nFish = 0.5 * log((1 + nValue2) / (1 - nValue2)) + 0.5 * nz(nFish[1])
pos =	iff(nFish > nz(nFish[1]), 1,
	    iff(nFish < nz(nFish[1]), -1, nz(pos[1], 0))) 
barcolor(pos == -1 ? red: pos == 1 ? green : blue )
plot(nFish, color=green, title="Fisher")
plot(nz(nFish[1]), color=red, title="Trigger")
*/

  // const d: { date: string; high: number; low: number }[] = []

  // const length = data.h.length

  // for (let i = 0; i < length; i++) {
  //   d.push({ date: data.t[i], high: data.h[i], low: data.l[i] })
  // }

  // filter out the data we need
  // the yahoo data can have weird object like these instead of candlestick data
  // {
  //   "amount": 0.055,
  //   "date": 1703082600,
  //   "type": "DIVIDEND",
  //   "data": 0.055
  // },
  // //
  // {
  //   "date": 1701700200,
  //   "numerator": 1,
  //   "denominator": 5,
  //   "splitRatio": "1:5",
  //   "type": "SPLIT",
  //   "data": "1:5"
  // },
  const d = data.filter((item) => {
    if (item.high && item.low) {
      return { high: item.high, low: item.low }
    }
  })

  // const dataReversed = d.reverse()
  // console.log("dataReversed[0] :>> ", dataReversed[0])

  // current period
  const { fisher, trigger } = fisherTransformCalc(d)

  // if you need the previous period, for example to look for a crossover
  // you must remove the first element and recalculate
  // example:
  // dataReversed.shift()
  // fisherTransformCalc(dataReversed)
  // d.shift()
  // fisherTransformCalc(d)
  // d.shift()
  // fisherTransformCalc(d)
  // d.shift()
  // fisherTransformCalc(d)
  // d.shift()
  // fisherTransformCalc(d)
  // d.shift()
  // fisherTransformCalc(d)
  // d.shift()
  // fisherTransformCalc(d)

  // const signal: ISignal = {
  const signal = {
    name: "Fisher Transform",
    type: "Momentum",
    symbol,
    side: "neutral",
  }

  // if the momentum signal is bullish
  if (fisher > trigger) {
    signal.side = "bullish"
  } else {
    signal.side = "bearish"
  }

  return signal
}

function fisherTransformCalc(data: { high: number; low: number }[]) {
  // console.log("data :>> ", data[0])
  // console.log("data :>> ", data[1])
  const LENGTH = 13

  let nValue1s: number[] = []

  // create a series of 'nValue1's
  for (let i = LENGTH; i >= 0; i--) {
    // console.log("i :>> ", i, i + LENGTH)
    // console.log("nValue1s :>> ", nValue1s)
    const dataPeriods = data.slice(i, i + LENGTH)
    // console.log("dataPeriods :>> ", dataPeriods)

    const currPeriod = dataPeriods[0]

    // (high + low)/2
    //  xHL2 = hl2
    const xHL2Periods = dataPeriods.map((item) => {
      // console.log(item.high, item.low)
      return new Decimal(item.high).plus(item.low).div(2).toNumber()
    })
    // console.log("xHL2Periods :>> ", xHL2Periods)

    const xHL2 = new Decimal(currPeriod.high).plus(currPeriod.low).div(2).toNumber()

    // Highest value for a given number of bars back.
    // Highest value in the series.
    // xMaxH = highest(xHL2, Length)
    const xMaxH = Math.max(...xHL2Periods)

    // xMinL = lowest(xHL2,Length)
    const xMinL = Math.min(...xHL2Periods)

    const p1 = new Decimal(xHL2).minus(xMinL).toNumber()
    // console.log("p1 :>> ", p1)

    const p2 = new Decimal(xMaxH).minus(xMinL).toNumber()
    // console.log("p2 :>> ", p2)

    const prevNValue1 = nValue1s[i + 1] ? nValue1s[i + 1] : 1

    // console.log(`0.33 * 2 * (${p1} / ${p2} - 0.5) + 0.67 * ${prevNValue1}`)

    const nValue1 = 0.33 * 2 * (p1 / p2 - 0.5) + 0.67 * prevNValue1

    // console.log(xHL2) //, xMaxH, xMinL, nValue1)

    nValue1s[i] = nValue1
    // console.log("nValue1s :>> ", nValue1s)
  }

  // create a series of 'nFish's
  const nFishs: number[] = []

  nValue1s = nValue1s.reverse()
  // console.log("nValue1s :>> ", nValue1s)

  for (let i = 0; i < nValue1s.length; i++) {
    // console.log("nVal :>> ", nVal)

    const nValue1 = nValue1s[i]
    // console.log("nValue1 :>> ", nValue1)

    const nValue2 = nValue1 > 0.99 ? 0.999 : nValue1 < -0.99 ? -0.999 : nValue1
    // console.log("nValue2 :>> ", nValue2)

    const prevNfish = nFishs[i - 1] ? nFishs[i - 1] : 1

    const nFish = 0.5 * math.log((1 + nValue2) / (1 - nValue2)) + 0.5 * prevNfish
    // console.log("nFish :>> ", nFish)

    nFishs.push(nFish)
  }

  // console.log(nFishs)

  const fisher = nFishs[nFishs.length - 1]
  const trigger = nFishs[nFishs.length - 2]
  // console.log("fisher :>> ", fisher)
  // console.log("trigger :>> ", trigger)
  // console.log(fisher > trigger ? "Fisher" : "Trigger")

  return { fisher, trigger }
}
