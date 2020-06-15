export const getPercentageAmount = (totalAmount: number, percentage: number) =>
  (totalAmount * percentage) / 100;

export const getPercentage = (amount: number, totalAmount: number) =>
  (amount / totalAmount) * 100;
