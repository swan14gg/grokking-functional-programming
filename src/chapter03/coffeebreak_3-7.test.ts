import { expect, test } from "vitest";
import { totalTime, avgTime } from "./coffeebreak_3-7";

test("totalTime", () => {
  expect(totalTime([])).toBeNaN();
  expect(totalTime([31])).toBeNaN();
  expect(totalTime([31, 20.9, 21.1, 21.3])).toBe(63.3);
});

test("avgTime", () => {
  expect(avgTime([])).toBeNaN();
  expect(avgTime([31])).toBeNaN();
  expect(avgTime([31, 20.9, 21.1, 21.3])).toBe(21.1);
});
