// Generate a random number between 0 and 2 (inclusive) to represent the color of the alien
var randomNumber = Math.floor(Math.random() * 3); // 0 represents 'green', 1 represents 'yellow', 2 represents 'red'
// Define variables to store points earned and alien's color
var pointsEarned = 0;
var alienColor;
// Assign color and points based on the random number
if (randomNumber === 0) {
    alienColor = 'green';
    pointsEarned = 5;
}
else if (randomNumber === 1) {
    alienColor = 'yellow';
    pointsEarned = 10;
}
else {
    alienColor = 'red';
    pointsEarned = 15;
}
// Print a message indicating the points earned based on the color of the alien
if (alienColor === 'green' || alienColor === 'yellow') {
    console.log("The player just earned ".concat(pointsEarned, " points."));
}
else if (alienColor === 'red') {
    console.log("The player just earned ".concat(pointsEarned, " points."));
}
