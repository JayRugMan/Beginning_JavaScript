/*
Create a variable named `input` that is equal to any phrase you’d 
like. This variable will contain the text you want to translate into
“whale talk”.
*/
let input = 'turpentine and turtles';

/*
Whales only speak with the vowels, “a”, “e”, “i”, “o”, and “u”. Using
these lowercase letters, create an array named `vowels`. This array
will not be updated so be sure to choose the appropriate declaration
keyword.
*/
const singleVowels = ['a', 'e', 'i', 'o', 'u'];
const doubledVowels = ['e', 'u'];

/*
Create a variable named `resultArray` and set it equal to an empty
array: `[]`. This will serve as a place to store the vowels from the
input string.
*/
const resultArray = [];

/*
Create a loop to iterate through each letter of the `input` variable text.
In a later step, we will compare each letter with our `vowels` array.
*/
for (let i = 0; i < input.length; i++) {
  /*
  To check your work, log the iterator numbered position inside the
  `for` loop and run your code. This should count the number of
  characters in your `input` string.
  */
  //JH console.log(input[i]);

  /*
  Whales double their e‘s and the u‘s in their language. Write an `if`
  statement that checks if each letter in the `input` string is equal to
   'e'. If so, use the `.push()` method to add `input[i]` to the
   `resultArray`.
  */
  if (doubledVowels.includes(input[i].toLowerCase())) {
    resultArray.push(input[i].toLowerCase());
  }
  // if any vowel ('e' and 'u' will be doubled here)
  if (singleVowels.includes(input[i].toLowerCase())) {
    resultArray.push(input[i].toLowerCase());
  }

//JH  /*
//JH  Create a nested `for` loop inside of the `for` loop you just wrote.
//JH  Make the inner loop iterate through the vowels array each time the
//JH  outer loop runs.
//JH  */
//JH  for (let j = 0; j < vowels.length; j++) {
//JH    /*
//JH    This will enable you to check each letter of `input` against all the
//JH    `vowels` elements during each iteration.
//JH    ----
//JH    To check your work, log the iterator number positions inside the
//JH    inner for loop and run your code. You should see 0 through 4
//JH    repeatedly because vowels is 5 elements long.
//JH    */
//JH    //jh console.log(j);
//JH
//JH    /*
//JH    Inside the second for loop, write a code block that compares the
//JH    `input` letter to every letter in the `vowels` array.
//JH    */
//JH    if ( input[i].toLowerCase() === vowels[j] ) {
//JH      /*
//JH      Note: To check that everything is working properly, log letter
//JH      matches to the console.
//JH      */
//JH      //JH console.log(`input: ${input[i].toLowerCase()}\tvowel: ${vowels[j]}`);
//JH
//JH      /*
//JH      Now instead of just logging the letters, add them to the results
//JH      array.
//JH      */
//JH      resultArray.push(input[i].toLowerCase());
//JH    }
//JH  }
}


// At the bottom of the program, log the `resultArray` to the console.
//JH console.log(resultArray);

/*
Currently, `resultArray` outputs an array of characters. To produce
proper whale language, we want to capitalize the array elements and put
them together as one string.

Declare a variable `resultString` that joins our `resultArray` into a
single string and capitalizes all of its letters.
*/
let resultString = resultArray.join('');
console.log(resultString.toUpperCase());