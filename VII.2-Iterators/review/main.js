// Lesson 7.2 review Iterators

const listSequence = limit => {
  const numbs = [1];
  while (numbs.length < limit) {
    let addMe = numbs.slice(-1)[0] + 1;
    numbs.push(addMe);
  }
  return numbs;
}


// Define a callback function before you use it in a iterator.
const findSquare = num => {
  (num <= 0 || typeof num !== "number") && false;
  const sqrt = Math.sqrt(num);
  return Number.isInteger(sqrt);
}

const numSequence = listSequence(1000);
const squares = numSequence.filter(findSquare);

console.log(squares);


// Chain two iteration methods on the same array.
const isEven = num => num % 2 === 0;

const evenSquares = numSequence.filter(findSquare).filter(isEven);

console.log(evenSquares);


// Use the optional arguments in an iterator to include the index or the
// entire array. (Check out MDN’s Array iteration methods page for more
// information) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Iteration_methods
const moreNumbers = listSequence(49);
const isEvenIndex = moreNumbers.forEach(
  (num, index)  => {
    let ev_od;
    let i_ev_od
    num % 2 === 0 ? ev_od = 'even' : ev_od = 'odd';
    index % 2 === 0 ? i_ev_od = 'even' : i_ev_od = 'odd';
    console.log(`index:value  ---  ${index}:${num}  ---  index is ${i_ev_od} while value is ${ev_od}`);
  }
);

// Use .reduce() to take a multi-layered array and return a single layer
// array from scratch.
const multiLayerArray = [[1,2,3,4,5,6,7,8,9], [10,11,12,13,14,15,16,17,18,19], [20,21,22,23,24,25,26,27,28,29], [30,31,32,33,34,35,36,37,38,39]];

const flatArray = multiLayerArray.reduce((acc, curr) => acc.concat(curr));

console.log(flatArray);