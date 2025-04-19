export function capitals(word: string): number[] {
  /*
    Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word)
    as its argument, and returns an ordered list containing the indices of all capital (uppercase) letters
    in the string.
  */
  const capitals: number[] = [];

  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) {
      capitals.push(i);
    }
  }

  return capitals;
}
