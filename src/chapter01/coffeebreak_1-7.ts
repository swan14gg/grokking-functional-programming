{
  function wordScore(word: string): number {
    return word.replaceAll("a", "").length;
  }
}
