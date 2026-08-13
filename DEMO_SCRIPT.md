# Guion de demo (dos actos)

Demo de Foreman: primero arregla el bug pero viola una convención del repo; vos corregís; un segundo issue sale con la convención correcta.

## Setup (una vez)

- Factory apuntando a este repo: `FACTORY_REPO=ram4-dev/factory-demo`
- Label `factory` en GitHub (dispara pipeline unattended)
- Issue #1 ya creado: https://github.com/ram4-dev/factory-demo/issues/1

Convención del repo (en `CONVENTIONS.md`, fácil de ignorar en el primer issue):

- No inlinear `(base * percent) / 100` en módulos de dominio.
- Usar `applyDiscount` de `src/lib/applyDiscount.js`.

El issue #1 **no** menciona eso y sugiere un fix de una línea → Foreman probablemente cambia `+` por `-` inline en `pricing.js`.

---

## Acto 1 — Issue con convención equivocada

1. Etiquetá el issue #1 con `factory` (o mencioná a @Foreman en modo attended).
2. Dejá correr el pipeline hasta el draft PR.
3. **Resultado esperado:** tests verdes, pero el fix inlinea la resta en `finalPrice` sin usar `applyDiscount`.

Verificación rápida en el PR:

```bash
git fetch && git checkout factory/issue-1-...
pnpm test   # pasa
grep applyDiscount src/pricing.js   # no debería importar el helper
```

---

## Corrección tuya (entre actos)

En el PR o en un hilo attended, decile a Foreman algo como:

> El fix funciona pero no sigue CONVENTIONS.md. Refactorizá para usar `applyDiscount` de `src/lib/applyDiscount.js` en lugar de calcular el descuento inline en `pricing.js`. Guardá esa convención en el factory brain para runs futuros.

Opciones:

- **A)** Foreman actualiza el mismo PR y escribe en factory brain (attended / trusted).
- **B)** Mergeás el PR inline y anotás la convención en factory brain a mano en el TUI con @Foreman.

Objetivo: el brain quede con “discount math → applyDiscount, ver CONVENTIONS.md”.

---

## Acto 2 — Segundo issue, convención correcta

1. Creá el issue #2:

   ```bash
   gh issue create --repo ram4-dev/factory-demo \
     --title "Shipping promo increases fee instead of lowering it" \
     --body-file DEMO_ISSUE_2.md
   ```

2. Etiquetá con `factory`.
3. **Resultado esperado:** fix en `shipping.js` usando `applyDiscount`, tests verdes, alineado con `CONVENTIONS.md` y factory brain.

Verificación:

```bash
pnpm test
grep applyDiscount src/shipping.js   # debe importar el helper
```

---

## Fallback si el acto 1 ya usa applyDiscount

Si el modelo leyó `CONVENTIONS.md` igual, el guion sigue siendo válido: compará acto 1 vs acto 2 (issue sin convención vs issue que la exige y brain cargado).
