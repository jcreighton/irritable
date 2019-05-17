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

const irritable = {};
irritable[Symbol.iterator] = iterator;
// console.log(...irritable);

// for (let x of irritable) {
//   console.log(x)
// }

const [first, ...othervalue] =


