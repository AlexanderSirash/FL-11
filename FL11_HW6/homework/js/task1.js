const aX = +prompt('Please insert A, Ax = ', '0');
const aY = +prompt('Please insert A, Ay = ', '0');
const bX = +prompt('Please insert B, Bx = ', '0');
const bY = +prompt('Please insert B, By = ', '0');
const cX = +prompt('Please insert C, Cx = ', '0');
const cY = +prompt('Please insert C, Cy = ', '0');

const divider = 2;

const halfLengthX = (aX + bX) / divider;
const halfLengthY = (aY + bY) / divider;

const isDividesLineByHalf = halfLengthX === cX && halfLengthY === cY;

console.log(isDividesLineByHalf);
