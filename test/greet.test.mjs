import assert from "node:assert/strict";
import test from "node:test";

import { greet } from "../src/greet.mjs";

test("greet returns a greeting", () => {
  assert.equal(greet("bimo"), "hello bimo");
});
