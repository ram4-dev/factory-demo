// Applies a percentage discount to a base price (e.g. 100 with 20 -> 80).

export function finalPrice(basePrice, discountPercent) {
  if (basePrice < 0 || discountPercent < 0 || discountPercent > 100) {
    throw new RangeError("basePrice and discountPercent must be valid");
  }

  const discountAmount = (basePrice * discountPercent) / 100;
  return basePrice + discountAmount;
}
