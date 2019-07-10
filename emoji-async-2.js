const emoji = require('./emoji');
const { wait } = require('./helpers')

async function getEmoji(request) {
  await wait(1000);
  return emoji[request];
}

// for await of