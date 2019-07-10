const emoji = require('./emoji');
const { wait } = require('./helpers')

async function getEmoji(request) {
  await wait(1000);
  return emoji[request];
}

// Async Generator
async function* asyncGen() {
  yield getEmoji('dancer');
  yield getEmoji('koala');
  yield getEmoji('joy');
}

(async function() {
  for await (const emoji of asyncGen()) {
    console.log(emoji);
  }
})();