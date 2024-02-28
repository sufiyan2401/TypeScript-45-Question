let string1 = 'hello';
let string2 = 'world';
let number1 = 10;
let number2 = 20;
let array = ['apple', 'banana', 'orange'];
let item = 'banana';


console.log("Test for equality with strings: 'hello' === 'hello'. I predict True.");
console.log(string1 === 'hello');

console.log("Test for inequality with strings: 'hello' !== 'world'. I predict True.");
console.log(string1 !== string2);


console.log("Test for lower case: 'HELLO' converted to lower case is 'hello'. I predict True.");
console.log('HELLO'.toLowerCase() === 'hello');


console.log("Test for numerical equality: 10 === 10. I predict True.");
console.log(number1 === 10);

console.log("Test for numerical inequality: 10 !== 20. I predict True.");
console.log(number1 !== number2);

console.log("Test for greater than: 20 > 10. I predict True.");
console.log(number2 > number1);

console.log("Test for less than: 10 < 20. I predict True.");
console.log(number1 < number2);

console.log("Test for greater than or equal to: 20 >= 10. I predict True.");
console.log(number2 >= number1);

console.log("Test for less than or equal to: 10 <= 20. I predict True.");
console.log(number1 <= number2);


console.log("Test using 'and' operator: (10 > 5) && (20 < 30). I predict True.");
console.log((number1 > 5) && (number2 < 30));

console.log("Test using 'or' operator: (10 === 5) || (20 === 20). I predict True.");
console.log((number1 === 5) || (number2 === 20));


console.log("Test whether 'banana' is in the array: ['apple', 'banana', 'orange']. I predict True.");
console.log(array.indexOf(item) !== -1);


console.log("Test whether 'grape' is not in the array: ['apple', 'banana', 'orange']. I predict True.");
console.log(array.indexOf('grape') === -1); 
