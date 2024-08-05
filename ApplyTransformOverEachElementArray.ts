function map(arr: number[], fn: (n: number, i: number) => number): number[] {
  const newArr = arr.map((number) => {
    return fn(number, arr.indexOf(number));
  });

  return newArr;
}
