## Summary

Shipping promos behave like the pricing bug we fixed in #1: applying a promo **increases** the shipping fee instead of lowering it.

## Steps to reproduce

1. Call `shippingWithPromo(30, 20)` in `src/shipping.js` (base shipping $30, promo 20% off).
2. Observe the returned value.

## Expected

`24` — twenty percent off thirty dollars.

## Actual

`36` — the promo amount is added to the fee instead of subtracted.

## Notes

- Logic lives in `src/shipping.js`, function `shippingWithPromo`.
- Run `pnpm test` — `src/shipping.test.js` has the failing cases.
- Follow **CONVENTIONS.md**: do not inline discount math; use `applyDiscount` from `src/lib/applyDiscount.js`.
- Read the factory brain if this repo was worked on before; it should repeat the same convention.

## Acceptance criteria

- [ ] `shippingWithPromo(30, 20)` returns `24`
- [ ] `shippingWithPromo(40, 50)` returns `20`
- [ ] `shippingWithPromo(15, 0)` still returns `15`
- [ ] Discount math goes through `applyDiscount` per CONVENTIONS.md (no inlined `(base * percent) / 100` in `shipping.js`)
- [ ] `pnpm test` passes
