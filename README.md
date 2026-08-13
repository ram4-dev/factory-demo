# factory-demo

Repo de demostración para **Foreman** (eve Software Factory). Incluye bugs intencionales en descuentos y un guion en dos actos: primero fix correcto pero convención equivocada, después fix con convención correcta.

## Bugs

| Módulo | Función | Síntoma |
|--------|---------|---------|
| `src/pricing.js` | `finalPrice` | Suma el descuento → issue **#1** (acto 1) |
| `src/shipping.js` | `shippingWithPromo` | Mismo patrón → issue **#2** (acto 2) |

La convención del repo está en [`CONVENTIONS.md`](./CONVENTIONS.md): usar `applyDiscount` de `src/lib/applyDiscount.js`. El issue #1 no la menciona a propósito.

## Verificación local

```bash
pnpm test   # falla hasta corregir los bugs
```

## Demo con Foreman

Guion completo: [`DEMO_SCRIPT.md`](./DEMO_SCRIPT.md)

1. `FACTORY_REPO=ram4-dev/factory-demo` en el factory.
2. **Acto 1:** label `factory` en [issue #1](https://github.com/ram4-dev/factory-demo/issues/1) → draft PR (fix inline, convención ignorada).
3. **Corrección:** texto en [`DEMO_CORRECTION.md`](./DEMO_CORRECTION.md) → refactor + factory brain.
4. **Acto 2:** crear issue #2 desde [`DEMO_ISSUE_2.md`](./DEMO_ISSUE_2.md) → label `factory` → PR con `applyDiscount`.

## Estructura

```text
CONVENTIONS.md          # convención (applyDiscount)
DEMO_SCRIPT.md          # guion dos actos
DEMO_ISSUE.md           # cuerpo issue #1
DEMO_ISSUE_2.md         # cuerpo issue #2
DEMO_CORRECTION.md      # qué decirle a Foreman entre actos
src/
  lib/applyDiscount.js  # helper correcto (ya existe en main)
  pricing.js            # bug acto 1
  pricing.test.js
  shipping.js           # bug acto 2
  shipping.test.js
```
