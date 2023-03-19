// Code your solution in this file!

const distanceFromHqInBlocks = blockNumber => blockNumber > 42 ? blockNumber - 42 : 42 - blockNumber;

const distanceFromHqInFeet = blockNumber => distanceFromHqInBlocks(blockNumber) * 264;

const distanceTravelledInFeet = (start, end) => start < end ? (end - start) * 264 : (start - end) * 264;

const calculatesFarePrice = (start, end) => {
  const distance = distanceTravelledInFeet(start, end);

  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return .02 * (distance - 400);
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
