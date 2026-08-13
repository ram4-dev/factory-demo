import assert from "node:assert/strict";
import { test } from "node:test";
import { finalPrice } from "./pricing.js";

test("no discount leaves price unchanged", () => {
  assert.equal(finalPrice(50, 0), 50);
});

test("20 percent off one hundred equals eighty", () => {
  assert.equal(finalPrice(100, 20), 80);
});

test("half off two hundred equals one hundred", () => {
  assert.equal(finalPrice(200, 50), 100);
});
