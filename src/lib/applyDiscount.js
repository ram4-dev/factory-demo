// Shared percentage-off helper. See CONVENTIONS.md — feature modules must use this.

export function applyDiscount(basePrice, discountPercent) {
  const discountAmount = (basePrice * discountPercent) / 100;
  return basePrice - discountAmount;
}
