/*
Looking for more ways to practice? Consider trying these:

- Use the .length property to find the last element of an array.
- Use the other methods in MDN documentation not mentioned in the lesson.
- Take all the elements in an array and make a string.
- Find the return value of calling .push() on an array.
- Nest an array within an array.
- Access an element in the nested array.
*/


// Use the .length property to find the last element of an array.
const myArray = ['one', 'two', 'three', 4, 'five'];
console.log(myArray[myArray.length - 1]);


// Use the other methods in MDN documentation not mentioned in the lesson.
// using .forEach() https://www.codecademy.com/resources/docs/javascript/arrays/forEach
const ipAddressLast = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
ipAddressLast.forEach((lastOctet) => {console.log(`pinging: 192.168.0.${lastOctet}`)})
let sum = 0;
ipAddressLast.forEach(lastOctet => sum += lastOctet);
console.log(`sum of last octets, just... because: ${sum}`);


// Take all the elements in an array and make a string.
// Using forEach (4 lines)
const fNameLetters = ['J', 'a', 's', 'o', 'n'];
let myName = '';
fNameLetters.forEach(letter => myName += letter);
console.log(myName);
// Using join (2 lines)
const lNameLetters = ['H', 'a', 'r', 'd', 'm', 'a', 'n'];
console.log(lNameLetters.join(''));


// Find the return value of calling .push() on an array.
const nums = [1, 2, 3, 4, 5, 6, 'seven'];
let returnValue = nums.push('eight', 9, 'ten');
console.log(`Return Value: ${returnValue}\nFinal Array: ${nums}`);


// Nest an array within an array.
const hobbies = [['coding', 'web design', '3D printing', 'Linux tutorials'], ['cooking', 'baking'], ['woodworking', 'gardening']]
// Access an element in the nested array.
hobbies.forEach(category => {console.log('  list:'); category.forEach(item => console.log(item))});
console.log(`\nWhat I'm doing now: ${hobbies[0][0]}`)
