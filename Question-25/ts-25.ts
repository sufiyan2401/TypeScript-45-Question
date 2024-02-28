// Generate a random number between 0 and 2 (inclusive) to represent the color of the alien
let randomNumber: number = Math.floor(Math.random() * 3); // 0 represents 'green', 1 represents 'yellow', 2 represents 'red'

// Define variables to store points earned and alien's color
let pointsEarned: number = 0;
let alienColor: string;

// Assign color and points based on the random number
if (randomNumber === 0) {
    alienColor = 'green';
    pointsEarned = 5;
} else if (randomNumber === 1) {
    alienColor = 'yellow';
    pointsEarned = 10;
} else {
    alienColor = 'red';
}

// Check if the alien's color is green or yellow and print a message accordingly
if (alienColor === 'green' || alienColor === 'yellow') {
    console.log(`The player just earned ${pointsEarned} points.`);
}
