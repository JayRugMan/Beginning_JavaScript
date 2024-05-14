let raceNumber = Math.floor(Math.random() * 1000);
let isEarly = true;
let racersAge = 18;

if (racersAge > 18 && isEarly) {
  raceNumber += 1000;
}

if (racersAge > 18 && isEarly) {
  console.log(`Because you registered early, you will be running at 9:30 AM. Your number is "${raceNumber}"`);
} else if (racersAge > 18 && ! isEarly) {
  console.log(`Because you registered late, you will be running at 11:00 AM. Your number is "${raceNumber}"`);
} else if (racersAge < 18) {
  console.log(`All youth will be running at 12:30 AM. Your number is "${raceNumber}"`);
} else {
  console.log('Please see the registration desk.');
}