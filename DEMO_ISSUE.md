## Summary

Checkout applies percentage coupons backwards: the total **goes up** after a discount code is applied.

## Steps to reproduce

1. Call `finalPrice(100, 20)` in `src/pricing.js` (base price $100, coupon 20% off).
2. Observe the returned value.

## Expected

`80` — twenty percent off one hundred dollars.

## Actual

`120` — the discount amount is added to the price instead of subtracted.

## Notes

- Logic lives in `src/pricing.js`, function `finalPrice`.
- Run `pnpm test` to see failing cases (`src/pricing.test.js`).
- Fix should be a one-line change; keep the validation guards as they are.

## Acceptance criteria

- [ ] `finalPrice(100, 20)` returns `80`
- [ ] `finalPrice(200, 50)` returns `100`
- [ ] `finalPrice(50, 0)` still returns `50`
- [ ] `pnpm test` passes
