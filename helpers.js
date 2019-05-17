function wait(ms) {
  return new Promise(resolve => {
    setTimeout(() => resolve(), ms);
  });
}

function random(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

module.exports = {
  wait,
  random,
};