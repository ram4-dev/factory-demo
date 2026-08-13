import assert from "node:assert/strict";
import { test } from "node:test";
import { shippingWithPromo } from "./shipping.js";

test("no promo leaves shipping unchanged", () => {
  assert.equal(shippingWithPromo(15, 0), 15);
});

test("twenty percent off thirty equals twenty four", () => {
  assert.equal(shippingWithPromo(30, 20), 24);
});

test("half off forty equals twenty", () => {
  assert.equal(shippingWithPromo(40, 50), 20);
});
