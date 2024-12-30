export function formatAmount(amount: number) {
  const formatAmountToString = String(amount)
  const formatAmount = formatAmountToString.replace(".", ",")
  return formatAmount
}
