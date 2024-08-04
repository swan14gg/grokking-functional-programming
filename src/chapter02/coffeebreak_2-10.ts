export class TipCalculator {
  public addPerson(names: string[], name: string): string[] {
    return [...names, name];
  }

  public getTipPercentage(names: string[]): number {
    const size = names.length;
    if (size > 5) {
      return 20;
    } else if (size > 0) {
      return 10;
    } else {
      return 0;
    }
  }
}
