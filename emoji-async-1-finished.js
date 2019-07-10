const emoji = require('./emoji');
const { wait, random } = require('./helpers')

async function getEmoji(request) {
  await wait(1000);
  return emoji[request];
}

// Async Generator
async function* asyncGen() {
  yield getEmoji(yield);
}

const generator = asyncGen();
generator.next();
generator.next('dancer').then(({ value }) => console.log(value));