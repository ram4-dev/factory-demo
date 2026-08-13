// Applies a percentage discount to a base price (e.g. 100 with 20 -> 80).
// Import the shared discount helper from the lib module.
import { applyDiscount } from './lib/applyDiscount.js';

// Calculate the final price after applying a percentage discount.
// basePrice — the original price (must be >= 0).
// discountPercent — the discount rate between 0 and 100 inclusive.
export function finalPrice(basePrice, discountPercent) {
  // Validate inputs: reject negative prices, negative discounts, and discounts over 100%.
  if (basePrice < 0 || discountPercent < 0 || discountPercent > 100) {
    throw new RangeError("basePrice and discountPercent must be valid");
  }

  // Delegate the actual calculation to the shared helper and return the result.
  return applyDiscount(basePrice, discountPercent);
}