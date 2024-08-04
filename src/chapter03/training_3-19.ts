export function firstTwo(list: unknown[]): unknown[] {
  return list.slice(0, 2);
}

export function lastTwo(list: unknown[]): unknown[] {
  return list.slice(-2);
}

export function movedFirstTwoToTheEnd(list: unknown[]): unknown[] {
  return [...list.slice(2), ...list.slice(0, 2)];
}

export function insertedBeforeLast(list: unknown[], value: unknown): unknown[] {
  return [...list.slice(0, -1), value, list.at(-1)];
}
