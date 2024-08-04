function round(num: number, base: number) {
  return Math.round(num * Math.pow(10, base)) / Math.pow(10, base);
}

export function totalTime(lapTimes: number[]): number {
  if (lapTimes.length < 2) return NaN;
  return round(
    lapTimes.slice(1).reduce((acc, cur) => acc + cur, 0),
    1
  );
}

export function avgTime(lapTimes: number[]): number {
  if (lapTimes.length < 2) return NaN;
  return round(totalTime(lapTimes) / (lapTimes.length - 1), 1);
}
