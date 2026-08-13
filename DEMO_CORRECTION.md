# Texto sugerido — corrección después del acto 1

Copiá y pegá en un comentario del PR o en el TUI con @Foreman:

---

The tests pass and the math is correct now, but this doesn't follow our repo convention.

Please refactor `src/pricing.js` to use `applyDiscount` from `src/lib/applyDiscount.js` instead of inlining the discount calculation. See CONVENTIONS.md.

After updating the PR, record in the factory brain that this repository always routes percentage discount math through `applyDiscount` in `src/lib/applyDiscount.js`.

---

Versión en español:

---

Los tests pasan y el cálculo está bien, pero no respeta la convención del repo.

Refactorizá `src/pricing.js` para usar `applyDiscount` de `src/lib/applyDiscount.js` en lugar de inlinear el descuento. Ver CONVENTIONS.md.

Después de actualizar el PR, guardá en el factory brain que en este repo todo descuento porcentual pasa por `applyDiscount` en `src/lib/applyDiscount.js`.

---
