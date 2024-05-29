# Beginning_JavaScript

My JavaScript beginnings

## Begin Here

[Course on Codecademy](https://www.codecademy.com/enrolled/courses/introduction-to-javascript)

[JavaScript Keywords](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#keywords) (Don't use as variable names)

## Vocabulary

> **Operator**  
> A character that performs a task in our code. Arithmetic operators include:  
>
> - Add `+`  
> - Subtract `-`  
> - Multiply `*`  
> - Divide `/`  
> - Remainder `%`  
> - Dot `.`  

___

### Data Types

Classifications we gie to the different kinds of data that we use in programming. In JavaScript, ther are eight fundamental data types:L

> **Number**  
> Any number, including number with decimals:  
> `4`, `8`, `1516`, `23.42`
___
> **BigInt**  
> Any number, greater than 2^(53)-1 or less than -(2^(53)-1), with n appended to the number:  
> `1234567890123456n`
___
> **String**  
> Any grouping of characters on your keyboard (letters, numbers, spaces, symobols, etc...) surrounded by single quotes: `' ... '` or double quotes `" ... "`, though we prefer single quotes. Some people like to think of string as a fancy word for text.  
> [String Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/prototype)
___
> **Boolean**  
> This data type only has two possible values-- either `true` or `false` (without quotes). It's helpful to think of booleans as on or off switches or as the answers to a "yes" or "no" question.
___
> **Null**  
> This data type represents the intentional absense of a value and is represented by the keyword `null` (without quotes).
___
> **Undefined**  
> This datatype is denoted by the keyword `undefined` (without quotes). It also represents the absense of a value, though it has a different use than `null`. `undefined` means that a given value does not exist.
___
> **Symbol**  
> A newer feature to the language, symbols are unique identifiers, useful in more complex coding. No need to worry about these for now.
___
> **Objects**
> Collection of related data.
___
> **Truthy** and **Falsy** Values  
> A value that evaluates as either `true` or `false` not becase the value itself is true/false, but rather because it's _nature_ is defined as either "truthy" or "falsy".  
> IE if `let someString = 'some value';` makes `someString` "truthy". When using `if (someString) {...}`, this evaluates as `true` because `someString` has a value.  
> Keep in mind that some values are "falsy," like `0` - so, `let someNumber = 0;` ... `if (someNumber) {...}` will evaluate as `false`.  
> Examples of values considered "falsy":  
>
> - `0`  
> - Empty strings like `""` or `''`  
> - `null` which represents when there is no value at all  
> - 'undefined` which represents when a declared variable lacks a value  
> - `NaN`, or Not a Number
>
___
> **Functions**  
> A function is a reusable block of code that groups together a sequence of statements to perform a specific task.  
> [More on JavaScript functions](https://www.codecademy.com/resources/docs/javascript/functions)
___

### Scope Stuff

> **Scope**  
> defines where [variables](https://www.codecademy.com/resources/docs/javascript/variables) can be accessed or referenced. While some variables can be accessed from anywhere within a program, other variables may only be available in a specific context.  
___
> **Blocks**  
> are [statements](https://www.codecademy.com/resources/docs/javascript/statements) that exist within curly braces `{}`.  
___
> **Global Scope**  
> Global scope refers to the context within which variables are accessible to every part of the program.  
___
> **Global Variables**  
> Global variables are variables that exist within global scope.
___
> **Block Scope**  
> Block scope refers to the context within which variables are accessible only within the block they are defined.  
___
> **Local variables**  
> Local variables are variables that exist within block scope.  
___
> **Global Namespace**  
> Global namespace is the space in our code that contains globally scoped information.  
___
> **Scope Pollution**
> Scope pollution is when too many variables exist in a namespace or variable names are reused.  
___

### Arrays ([see more](https://www.codecademy.com/resources/docs/javascript/arrays))

> **Arrays**  
> An `array` is a list of ordered, stored data. It can hold items that are of any data type (e.g. string, boolean, number, etc.) and it can hold different data types together in a single array.  
___
> **Methods**  
> In JavaScript methods are object properties containing a function definition. Within the function definition, `this` can be used to refer to the containing object as long as the function is defined within the object.  
> More on JavaScript Methods Check out [here (codecademy)](https://www.codecademy.com/resources/docs/javascript/methods) and [here (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)  
>
> - [`.push()`](https://www.codecademy.com/resources/docs/javascript/arrays/push) - method that adds one or more elements to the end of an array and returns the new length.  
> - [`.pop()`](.pop()) - method that removes the last element of an array, decrements the array length, and returns the value that it removed.  
> - [`.join()`](https://www.codecademy.com/resources/docs/javascript/arrays/join) - method that returns a string representation of array elements concatenated together.  
> - [`.slice()`](https://www.codecademy.com/resources/docs/javascript/arrays/slice) - method that returns a partial copy of an array, otherwise known as a shallow copy, without altering the original array.  
> - [`.splice()`](https://www.codecademy.com/resources/docs/javascript/arrays/splice) - method that modifies an array in place by inserting, removing, and/or replacing array elements then returning an array of removed elements.  
> - [`.shift()`](https://www.codecademy.com/resources/docs/javascript/arrays/shift) - method that emoves and returns the first element of the array. All subsequent elements will shift down one place.  
> - [`.unshift()`](https://www.codecademy.com/resources/docs/javascript/arrays/unshift) - method that adds one or more elements to beginning of array and returns new length.  
> - [`.concat()`](https://www.codecademy.com/resources/docs/javascript/arrays/concat) - method that merges, or concatenates, two or more arrays.  
> - [`.indexOf()`](https://www.codecademy.com/resources/docs/javascript/arrays/indexOf) - method that returns the first index at which an element can be found. Returns -1 if the element is not found.  
>  
___

### Loops ([see more](https://www.codecademy.com/resources/docs/javascript/loops))

> **Loops**  
> A programming tool that is used to repeat a set of instructions.  
___
> **Iterate**  
> A generic term that means “to repeat” in the context of loops.  
___
> **Stopping Condition**  
> A loop will continue to iterate until a specified condition, commonly known as a `stopping condition`, is met.  
___
> **Nested Loops**  
> A loop running inside another loop.
___
> **Break**  
> Within a loop, the `break` keyword may be used to exit the loop immediately, continuing execution after the loop body.  
___

### Iterators ([see more](https://www.codecademy.com/resources/docs/javascript/iterators))

> **Iterators**
> `Iterators` are used to loop over a group of data members or a collection.  
> An iterator is an object that implements the iteration protocols. Many built-in data types (`strings`, `arrays`, `maps`, `sets`, etc.) have an iterator property that make them iterable.
___

### Objects ([see more](https://www.codecademy.com/resources/docs/javascript/objects))

> **Objects**  
> A JavaScript `object` is a non-primitive data type that can assume the properties and behaviors required for a given programming need. An object can be created or defined with an object literal:  
>
> ```javascript
> const person = {firstName: 'Elizabeth', lastName: 'Harmon', age: 22, eyeColor: 'Hazel'};
> ```
>
> Spaces and line breaks are not important. An object definition can span multiple lines:  
>
> ```javascript
> const person = {
>   firstName: 'Elizabeth',
>   lastName: 'Harmon',
>   age: 22,
>   eyeColor: 'Hazel',
> };
> ```
>
___
> **Object Property**  
> What an object has/is
___
> **Object Methods** (See `Method` definition above for more details)  
> What an object can do  
___
