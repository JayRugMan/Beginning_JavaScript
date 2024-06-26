// Starting message
let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

// Use an array method to remove the last string of the array `secretMessage`.
//JH console.log(secretMessage.length);
secretMessage.pop();
// Great! You can check your work by logging the .length of the array.
//JH console.log(secretMessage.length);

// Use an array method to add the words `to` and `Program` as separate 
// strings to the end of the secretMessage array.
secretMessage.push('to', 'Program');

// Change the word `easily` to the word `right` by accessing the index 
// and replacing it.
secretMessage.splice(secretMessage.indexOf('easily'), 1, 'right');

// Use an array method to remove the first string of the array.
secretMessage.shift();

// Use an array method to add the string `Programming` to the beginning 
// of the array.
secretMessage.unshift('Programming');

// Use an array method to remove the strings `get`, `right`, `the`, 
// `first`, `time,`,, and replace them with the single string `know,`.
const toBeReplaced = ['get', 'right', 'the', 'first', 'time,'];
const toReplace = 'know,';
secretMessage.splice(secretMessage.indexOf(toBeReplaced[0]), toBeReplaced.length, toReplace);

// On one line, use `console.log()` and `.join()` to print the secret message as a sentence.
console.log(secretMessage.join(' '));