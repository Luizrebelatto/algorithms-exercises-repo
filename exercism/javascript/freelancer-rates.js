export function dayRate(ratePerHour) {
    return ratePerHour * 8;
}
  
export function daysInBudget(budget, ratePerHour) {
    return Math.floor(budget / dayRate(ratePerHour))
}
  
export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
    const monthsWorked = Math.floor(numDays / 22);
    const daysLeft = numDays % 22;
    const priceWithoutDiscount = monthsWorked * 22 * dayRate(ratePerHour)
    const priceWithDiscount = priceWithoutDiscount - discount * priceWithoutDiscount
    
    return Math.ceil(priceWithDiscount + (daysLeft * dayRate(ratePerHour)))
}