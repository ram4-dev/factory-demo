# factory-demo

Repo de demostración para **Foreman** (eve Software Factory). Tiene un bug intencional en el cálculo de descuentos; los tests lo detectan.

## El bug

`finalPrice` en `src/pricing.js` **suma** el descuento al precio en lugar de restarlo. Un cupón del 20% sobre $100 devuelve $120 en vez de $80.

## Verificación local

```bash
pnpm test   # falla hasta que se corrija el bug
```

Fix esperado: cambiar `basePrice + discountAmount` por `basePrice - discountAmount`.

## Demo con Foreman

1. Publicá este repo en GitHub (por ejemplo `tu-usuario/factory-demo`).
2. Apuntá el factory a ese repo: `FACTORY_REPO=tu-usuario/factory-demo` y `FACTORY_SETUP_COMMAND=pnpm install` (opcional; no hay deps, pero el comando es válido).
3. Creá el issue desde [`DEMO_ISSUE.md`](./DEMO_ISSUE.md) o usá:

   ```bash
   gh issue create --repo tu-usuario/factory-demo \
     --title "Coupon increases checkout total instead of lowering it" \
     --body-file DEMO_ISSUE.md
   ```

4. Etiquetá el issue con `factory` (o mencioná a @Foreman) y dejá que el pipeline abra un draft PR.

## Estructura

```text
src/
  pricing.js       # lógica con el bug
  pricing.test.js  # tests que fallan hasta el fix
DEMO_ISSUE.md      # cuerpo del issue listo para GitHub
```
