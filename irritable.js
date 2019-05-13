function iterator() {
  let step = 0;

  return {
    next: function() {
      step++;

      if (step === 1) {
        return { value: '😠', done: false };
      }

      if (step === 2) {
        return { value: '😡', done: false };
      }

      if (step === 3) {
        return { value: '🤬', done: false };
      }

      return { value: undefined, done: true };
    }
  };
}

const iterable = {};
iterable[Symbol.iterator] = iterator;

// for (let x of iterable) {
//   console.log(x);
// }

// let result = Array.from(iterable);
// console.log(result);

// console.log(...iterable);


// Destructuring
// const [first, undefined, third] = iterable;
// console.log(first, third);

// yield*
// function* gen() {
//   yield* iterable;
// }

// const generator = gen();
// const first = generator.next().value;
// console.log(first);
// console.log([...generator]);

// The previous function can be simplified if the iterable and the iterator are the same object: