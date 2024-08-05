type Fn = (n: number, i: number) => any;

function filter(arr: number[], fn: Fn): number[] {
  const arrayFilter = arr.filter((number) => {
    return fn(number, arr.indexOf(number));
  });
  return arrayFilter;
}
