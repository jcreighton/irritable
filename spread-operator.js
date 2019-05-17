const arr = [1, 2, 3];
console.log(...arr);
console.log([...arr]);

function fun(...args) {
  console.log(args);
}

fun(1, 2, 3);