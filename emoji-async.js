function wait(ms) {
  return new Promise(resolve => {
    setTimeout(() => resolve(), ms);
  });
}

const emoji = {
  'crystal-ball': '🔮',
  dancing: '💃',
  gemstone: '💎',
  joy: '😂',
  lemon: '🍋',
  lollipop: '🍭',
  sparkles: '✨',
  watermelon: '🍉',
};

async function get(request) {
  await wait(500);
  return emoji[request];
}

async function* asyncGenerator() {
  const request = await emoji();
  yield 1;
}
