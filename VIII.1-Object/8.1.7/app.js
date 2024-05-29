let spaceship = {
  passengers: null,
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032 
  },
  crew: {
    captain: { 
      name: 'Sandra', 
      degree: 'Computer Engineering', 
      encourageTeam() { console.log('We got this!') },
     'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
  },
  engine: {
    model: "Nimbus2000"
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: "HD"
    },
    'back-up': {
      battery: "Lithium",
      terabytes: 50
    }
  }
}; 

const capFave = spaceship.crew.captain['favorite foods'][0];
spaceship.passengers = [
  {
    Benjamin: {
      age: 3,
      'favorite foods': ['cucumbers', 'strawberries', 'salad', 'treats', 'apples']
    },
  },
  {
    Jason: {
      age: 39,
      'favorite foods': ['pizza', 'biscuits and gravy', 'cake', 'country fried steak', 'chicken tenders']
    }
  }
]

let firstPassenger = spaceship.passengers[0];

console.log(Object.keys(firstPassenger)[0]);