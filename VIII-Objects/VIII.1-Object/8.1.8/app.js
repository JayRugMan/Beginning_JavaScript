let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth'
};

// Write your code below
const greenEnergy = object => {
  object['Fuel Type'] = 'avocado oil';
};

const remotelyDisable = object => object.disabled = true;

greenEnergy(spaceship);
console.log(spaceship);
remotelyDisable(spaceship);
console.log(spaceship);