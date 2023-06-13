export const rounded = (num, decimal) => {
  return Math.round(num * 100) / (10 ** decimal)
}