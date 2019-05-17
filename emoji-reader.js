const emoji = require('./emoji');
const { wait, random } = require('./helpers')
const getEmoji = require('./emoji-async');

// Emoji feed that sends a random emoji every 1 seconds
async function* randomEmojiStream() {
  const keys = Object.keys(emoji);
  while (true) {
    const key = Object.keys(emoji)[random(keys.length)];
    yield getEmoji(key);
  }
}

async function emojiReader() {
  for await(let emoji of randomEmojiStream()) {
    console.log(emoji);
  }
}

emojiReader();


