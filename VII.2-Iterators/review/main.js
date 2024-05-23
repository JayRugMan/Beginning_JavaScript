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

const numSequence = listSequence(50);
const squares = numSequence.filter(findSquare);

console.log(squares);


// Chain two iteration methods on the same array.
const isEven = num => num % 2 === 0;

const evenSquares = numSequence.filter(findSquare).filter(isEven);

console.log(evenSquares);


// Use the optional arguments in an iterator to include the index or the
// entire array. (Check out MDN’s Array iteration methods page for more
// information) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Iteration_methods


// Use .reduce() to take a multi-layered array and return a single layer
// array from scratch.