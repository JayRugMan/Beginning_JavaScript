// Find the value of `this` in a function inside of a method.
const me = {
  firstName: 'Jason',
  lastName: 'Hardman',
  greeting() {
    console.log(`Hi, my name is ${this.firstName} ${this.lastName}`)
  }
}

me.greeting();

// Learn the outcome of using a property that has the exact same name as a setter/getter method.
const city = {
  _name: 'Zion',  // could be "name"...
  state: 'Missouri',
  get name() {  // ... but then this woule not work
    return `The city is called ${this._name}.`
  }
}

console.log(city.name);

// Create a new factory function that can create object instances of your choice.
const familyMember = (name, age) => {
  return {
    name,
    age,
    greeting() {
      console.log(`Hi. I'm ${this.name}. I'm ${this.age}.`)
    }
  }
}

const dad = familyMember("Jason", 39);
dad.greeting();
const mom = familyMember("Suze", 41);
mom.greeting();