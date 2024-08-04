import { expect, test } from "vitest";
import {
  increment,
  add,
  wordScore,
  getTipPercentage,
  getFirstCharacter,
} from "./coffeebreak_2-21";

test("increment", () => {
  expect(increment(0)).toBe(1);
  expect(increment(-1)).toBe(0);
  expect(increment(1)).toBe(2);
});

test("add", () => {
  expect(add(0, 1)).toBe(1);
  expect(add(-1, -3)).toBe(-4);
  expect(add(1, 100)).toBe(101);
});

test("wordScore", () => {
  expect(wordScore("hello world")).toBe(11);
  expect(wordScore("")).toBe(0);
  expect(wordScore("sky walker")).toBe(9);
});

test("getTipPercentage", () => {
  expect(getTipPercentage(["a", "b", "c", "d", "e", "f"])).toBe(20);
  expect(getTipPercentage(["a", "b", "c", "d", "e"])).toBe(10);
  expect(getTipPercentage(["a"])).toBe(10);
  expect(getTipPercentage([])).toBe(0);
});

test("getFirstCharacter", () => {
  expect(getFirstCharacter("hello")).toBe("h");
  expect(getFirstCharacter("")).toBe("");
  expect(getFirstCharacter("world")).toBe("w");
});
