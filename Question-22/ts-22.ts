let age = 25;
let nam = "John";
let isStudent = true;
let fruits = ["apple", "banana", "orange"];
let city = "New York";

console.log("Is age greater than 18? I predict True.");
console.log(age > 18);

console.log("Is nam equal to 'John'? I predict True.");
console.log(nam === "John");

console.log("Is isStudent equal to false? I predict False.");
console.log(!isStudent);

console.log("Does fruits array include 'banana'? I predict True.");
console.log(fruits.indexOf("banana") !== -1);

console.log("Is city equal to 'Los Angeles'? I predict False.");
console.log(city.indexOf("Los Angeles") !== -1);

console.log("Is age less than or equal to 30? I predict True.");
console.log(age <= 30);

console.log("Does nam start with 'J'? I predict True.");
console.log(nam.indexOf("J") === 0);

console.log("Is isStudent equal to true? I predict True.");
console.log(isStudent === true);

console.log("Does fruits array include 'grape'? I predict False.");
console.log(fruits.indexOf("grape") !== -1);

console.log("Is city not equal to 'Chicago'? I predict True.");
console.log(city !== "Chicago");
