// Applies a promo percentage off a base shipping fee.

import { applyDiscount } from "./lib/applyDiscount.js";

export function shippingWithPromo(baseShipping, promoPercent) {
  if (baseShipping < 0 || promoPercent < 0 || promoPercent > 100) {
    throw new RangeError("baseShipping and promoPercent must be valid");
  }

  return applyDiscount(baseShipping, promoPercent);
}
