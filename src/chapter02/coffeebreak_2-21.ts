export function increment(x: number): number {
  return x + 1;
}

export function add(a: number, b: number): number {
  return a + b;
}

export function wordScore(word: string): number {
  return word.replaceAll("a", "").length;
}

export function getTipPercentage(names: string[]): number {
  const size = names.length;
  if (size > 5) {
    return 20;
  } else if (size > 0) {
    return 10;
  } else {
    return 0;
  }
}

export function getFirstCharacter(s: string): string {
  return s[0] ?? "";
}
