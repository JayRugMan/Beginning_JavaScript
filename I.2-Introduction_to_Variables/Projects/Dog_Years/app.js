// My age
const myAge = 39;

// Dogs mature at a different rate for the first two years
let earlyYears = 2;
earlyYears *= 10.5;

// Later years are every year after the first two
let laterYears = myAge - 2;

// Multiplying my later years by 4, to account for my later years in Dog years
laterYears *= 4;

// Value check
console.log(`Value Check\n\nearlier years: ${earlyYears}\nlater years: ${laterYears}\n\n`);

// Add everything up for my age in dog years
let myAgeItDogYears = earlyYears + laterYears;

// My name in lower case
let myName = 'Jason Hardman'.toLowerCase();

// Final output
console.log(`My name is ${myName}. I am ${myAge} in human years, which is ${myAgeItDogYears} years old in dog years.`)