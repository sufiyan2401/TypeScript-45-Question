// Generate a random number between 0 and 2 (inclusive) to represent the color of the alien
var randomNumber = Math.floor(Math.random() * 3); // 0 represents 'green', 1 represents 'yellow', 2 represents 'red'
// Define variable to store alien's color
var alienColor;
// Assign color based on the random number
if (randomNumber === 0) {
    alienColor = 'green';
}
// Check if the alien's color is green and print a message if true
if (alienColor === 'green') {
    console.log("The player just earned 5 points.");
}
