export function isNice(arr: number[]): boolean {
  /*
    A Nice array is defined to be an array where for 
    every value n in the array, there is also an element 
    n - 1 or n + 1 in the array.
  */
  if (arr.length === 0) {
    return false;
  }

  for (let i = 0; i < arr.length; i++) {
    const n = arr[i];

    if (!arr.includes(n - 1) && !arr.includes(n + 1)) {
      return false;
    }
  }

  return true;
}

console.log(isNice([2, 10, 9, 3])); // true
console.log(isNice([3, 4, 5, 7])); // false
