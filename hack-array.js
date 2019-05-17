function iterator() {
  let step = 0;
  return {
    next: () => {
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