import canIterate from './canIterate';

const listObjects = [new Map(), new Set(), null, 10, 'Netology'];

listObjects.forEach((item) => {
  console.log(canIterate(item));
});
