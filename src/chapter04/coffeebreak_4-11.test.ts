import { expect, test } from "vitest";
import {
  largerThan,
  divisibleBy,
  shorterThan,
  numberOfS,
} from "./coffeebreak_4-11";

test("largerThan function", () => {
  const isLargerThan5 = largerThan(5);
  expect(isLargerThan5(6)).toBe(true);
  expect(isLargerThan5(5)).toBe(false);
  expect(isLargerThan5(4)).toBe(false);
});

test("divisibleBy function", () => {
  const isDivisibleBy3 = divisibleBy(3);
  expect(isDivisibleBy3(9)).toBe(true);
  expect(isDivisibleBy3(8)).toBe(false);
  expect(isDivisibleBy3(6)).toBe(true);
});

test("shorterThan function", () => {
  const isShorterThan5 = shorterThan(5);
  expect(isShorterThan5("hello")).toBe(false);
  expect(isShorterThan5("hey")).toBe(true);
  expect(isShorterThan5("world")).toBe(false);
});

test("numberOfS function", () => {
  expect(numberOfS("sassafras")).toBe(5); // "sassafras" -> "aafra" (length 5)
  expect(numberOfS("success")).toBe(4); // "success" -> "ucces" (length 4)
  expect(numberOfS("mississippi")).toBe(7); // "mississippi" -> "miiippi" (length 7)
});
