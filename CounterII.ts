type Counter = {
  increment: () => number;
  decrement: () => number;
  reset: () => number;
};

function createCounter(init: number): Counter {
  const numberInitial = init;
  const increment = () => {
    init += 1;
    return init;
  };
  const decrement = () => {
    init -= 1;
    return init;
  };
  const reset = () => {
    init = numberInitial;
    return init;
  };
  return { increment, decrement, reset };
}
