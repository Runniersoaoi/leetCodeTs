type Fn2 = (accum: number, curr: number) => number;

function reduce(nums: number[], fn: Fn2, init: number): number {
  nums.forEach((number) => {
    init = fn(init, number);
  });

  return init;
}
