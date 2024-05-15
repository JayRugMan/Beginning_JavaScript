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
