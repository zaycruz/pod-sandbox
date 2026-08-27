import assert from "node:assert/strict";
import test from "node:test";

import { farewell } from "../src/farewell.mjs";

test("farewell returns a goodbye message", () => {
  assert.equal(farewell("bimo"), "goodbye bimo");
});