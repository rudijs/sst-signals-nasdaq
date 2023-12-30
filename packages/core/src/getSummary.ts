export const getSummary = async (data: any) => {
  const symbol = data.symbol
  const marketCap = data.summaryDetail.marketCap.raw
  const fullTimeEmployees = data.summaryProfile.fullTimeEmployees

  return { symbol, marketCap, fullTimeEmployees }
}
