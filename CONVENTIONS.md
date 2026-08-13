# Conventions

This repo keeps discount math in one place so pricing, shipping, and future modules stay consistent.

## Discount math

Do not inline percentage discount calculations (`(base * percent) / 100`) in feature modules.

Import and use `applyDiscount` from `src/lib/applyDiscount.js`:

```js
import { applyDiscount } from "./lib/applyDiscount.js";

export function finalPrice(basePrice, discountPercent) {
  // validate inputs, then:
  return applyDiscount(basePrice, discountPercent);
}
```

`applyDiscount(basePrice, discountPercent)` returns the price after subtracting the percentage off. Validation of inputs stays in the caller when the exported API needs it.

## Layout

- Shared math helpers live under `src/lib/`.
- Domain modules (`pricing.js`, `shipping.js`, etc.) validate their public API and delegate discount math to `applyDiscount`.

## Tests

Run `pnpm test` before opening a PR. All tests must pass.
