let groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
let itemsPurchased = 0

for (let i = 0; i < groceryList.length; i++) {
  console.log(`got ${groceryList[i]}`);
  itemsPurchased++
  if (itemsPurchased === 5) {
    break;
  }
}

console.log(`got my 5 items`);