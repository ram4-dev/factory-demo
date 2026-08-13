// Applies a percentage discount to a base price (e.g. 100 with 20 -> 80).
import { applyDiscount } from './lib/applyDiscount.js';

export function finalPrice(basePrice, discountPercent) {
  if (basePrice < 0 || discountPercent < 0 || discountPercent > 100) {
    throw new RangeError("basePrice and discountPercent must be valid");
  }

  return applyDiscount(basePrice, discountPercent);
}