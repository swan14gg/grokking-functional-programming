export function largerThan(n: number): (i: number) => boolean {
  return (i) => i > n;
}

export function divisibleBy(n: number): (i: number) => boolean {
  return (i) => i % n === 0;
}

export function shorterThan(n: number): (s: string) => boolean {
  return (s) => s.length < n;
}

export function numberOfS(s: string): number {
  return s.replaceAll("s", "").length;
}
