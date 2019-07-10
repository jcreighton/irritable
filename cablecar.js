const forward = ['start', 'stop-1', 'stop-2', 'end'];
const reverse = [...stops].reverse();

const track = [...forward, ...reverse];

const cablecar = {
  stop: () => {},
  openDoors: () => {},
  closeDoors: () => {},
  move: track.values()
};

async function ride() {
  cablecar.move.next();
  await cablecar.stop();
  await cablecar.openDoors();
  await cablecar.closeDoors();
}
