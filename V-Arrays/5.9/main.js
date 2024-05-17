const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

let removedItem = groceryList.shift();

//console.log(groceryList);
//console.log(`Removed item: ${removedItem}`);

groceryList.unshift('popcorn');

//console.log(groceryList);
//console.log(groceryList.slice(1,4));
//console.log(groceryList);

const pastaIndex = groceryList.indexOf('pasta');
console.log(pastaIndex);