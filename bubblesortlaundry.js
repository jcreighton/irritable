function clean() { /* clean the clothes */ }
function dry() { /* dry the clothes */ }
function fold() { /* fold the clothes */ }

[clean, dry, fold].reduce((all, func) => return [...all, ...func(clothes)], []);




const loads = {
  darks: ['shirt-1', 'jeans'],
  lights: ['shirt-2', 'dress', 'socks'],
  brights: ['skirt']
}

Object.key(loads).reduce((all, load) => {
  return [...loads[load]];
}, []);


Salad

const order = {
  base: 'rice',
  protein: 'chicken',
  toppings: ['tomatos', 'avocado', 'feta']
}

Object.key(order).reduce((total, item) => {

}, []);