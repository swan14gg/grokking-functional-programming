import { expect, test } from "vitest";
import { abbreviate } from "./coffeebreak_3-15";

test("abbreviate", () => {
  expect(abbreviate("Alonzo Church")).toBe("A. Church");
  expect(abbreviate("A. Church")).toBe("A. Church");
  expect(abbreviate("A Church")).toBe("A. Church");
});
