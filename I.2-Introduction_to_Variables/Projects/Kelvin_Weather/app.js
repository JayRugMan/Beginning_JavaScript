// Today's forecasted temperature in kelvin
const kelvin = 0;

// Today's forecasted temperature in celcius
const celcius = kelvin - 273;

// Today's forecasted temperature in fahrenheit
let fahrenheit = celcius * (9/5) + 32;

// Drops the decimal value
fahrenheit = Math.floor(fahrenheit);

// Today's forecasted temperature in Newtons
let newton = celcius * (33/100);

// Drops the decimal value
newton = Math.floor(newton);

// Logs output to console log
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);
console.log(`The temperature is ${newton} degrees Newton`);