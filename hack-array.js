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

Array.prototype[Symbol.iterator] = iterator;

let a = [1, 2, 3];
console.log(...a);