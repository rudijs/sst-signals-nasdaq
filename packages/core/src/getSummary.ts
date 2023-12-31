export const getSummary = (data: any) => {
  const symbol = data.symbol
  const marketCap = data.summaryDetail.marketCap?.raw || null
  const fullTimeEmployees = data.summaryProfile?.fullTimeEmployees || null

  return { symbol, marketCap, marketCapFmt: marketCap.toLocaleString(), fullTimeEmployees }
}
