// Applies a promo percentage off a base shipping fee.

export function shippingWithPromo(baseShipping, promoPercent) {
  if (baseShipping < 0 || promoPercent < 0 || promoPercent > 100) {
    throw new RangeError("baseShipping and promoPercent must be valid");
  }

  const promoAmount = (baseShipping * promoPercent) / 100;
  return baseShipping + promoAmount;
}
