import { expect, test } from "vitest";
import {
  firstTwo,
  lastTwo,
  movedFirstTwoToTheEnd,
  insertedBeforeLast,
} from "./training_3-19";

test("firstTwo", () => {
  expect(firstTwo([1, 2, 3])).toStrictEqual([1, 2]);
});

test("lastTwo", () => {
  expect(lastTwo([1, 2, 3])).toStrictEqual([2, 3]);
});

test("movedFirstTwoToTheEnd", () => {
  expect(movedFirstTwoToTheEnd([1, 2, 3])).toStrictEqual([3, 1, 2]);
});

test("insertedBeforeLast", () => {
  expect(insertedBeforeLast([1, 2, 3], 4)).toStrictEqual([1, 2, 4, 3]);
});
