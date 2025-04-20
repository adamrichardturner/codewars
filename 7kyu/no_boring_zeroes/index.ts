export function noBoringZeros(n: number): number {
  /*
    Numbers ending with zeros are boring.
    They might be fun in your world, but not here.
    Get rid of them. Only the ending ones.
  */
  while (n !== 0 && n % 10 === 0) {
    n /= 10;
  }
  return n;
}

console.log(noBoringZeros(1450));
console.log(noBoringZeros(960000));
console.log(noBoringZeros(1050));
console.log(noBoringZeros(-1050));
console.log(noBoringZeros(0));
