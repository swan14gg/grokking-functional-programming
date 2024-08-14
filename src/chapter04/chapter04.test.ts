import { expect, test, describe } from "vitest";
import {
  score,
  bonus,
  penalty,
  rankedWords,
  wordScores,
  highScoringWords,
} from "./chapter04";

describe("rankedWords", () => {
  test("score", () => {
    const words = ["ada", "haskell", "scala", "java", "rust"];
    expect(rankedWords(score, words)).toStrictEqual([
      "haskell",
      "rust",
      "scala",
      "java",
      "ada",
    ]);
    expect(words).toStrictEqual(["ada", "haskell", "scala", "java", "rust"]);
  });

  test("score + bonus", () => {
    const words = ["ada", "haskell", "scala", "java", "rust"];
    expect(
      rankedWords((word: string) => score(word) + bonus(word), words)
    ).toStrictEqual(["scala", "haskell", "rust", "java", "ada"]);
    expect(words).toStrictEqual(["ada", "haskell", "scala", "java", "rust"]);
  });

  test("score + bonus - penalty", () => {
    const words = ["ada", "haskell", "scala", "java", "rust"];
    expect(
      rankedWords(
        (word: string) => score(word) + bonus(word) - penalty(word),
        words
      )
    ).toStrictEqual(["java", "ada", "scala", "haskell", "rust"]);
    expect(words).toStrictEqual(["ada", "haskell", "scala", "java", "rust"]);
  });
});

test("wordScores", () => {
  const words = ["ada", "haskell", "scala", "java", "rust"];
  expect(wordScores(score, words)).toStrictEqual([1, 6, 3, 2, 4]);
});

test("highScoringWords", () => {
  const words = ["ada", "haskell", "scala", "java", "rust"];
  expect(highScoringWords(score, words)).toStrictEqual([
    "haskell",
    "scala",
    "java",
    "rust",
  ]);
});
