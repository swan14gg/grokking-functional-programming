export function score(word: string): number {
  return word.replaceAll("a", "").length;
}

export function bonus(word: string): number {
  return word.includes("c") ? 5 : 0;
}

export function penalty(word: string): number {
  return word.includes("s") ? 7 : 0;
}

export function rankedWords(
  wordScore: (word: string) => number,
  words: string[]
): string[] {
  return [...words].sort((a, b) => wordScore(b) - wordScore(a));
}

export function wordScores(
  wordScore: (word: string) => number,
  words: string[]
): number[] {
  return words.map(wordScore);
}

export function highScoringWords(
  wordScore: (word: string) => number,
  words: string[]
): string[] {
  return words.filter((word) => wordScore(word) > 1);
}
