let placesToVisit: string[] = [
  "Tokyo",
  "Paris",
  "Bora Bora",
  "Santorini",
  "New York City",
];

console.log("Original Order:");
console.log(placesToVisit);

console.log("\nAlphabetical Order:");
console.log([...placesToVisit].sort());

console.log("\nOriginal Order After Sorting:");
console.log(placesToVisit);

console.log("\nReverse Alphabetical Order:");
console.log([...placesToVisit].sort().reverse());

console.log("\nOriginal Order After Sorting in Reverse:");
console.log(placesToVisit);

placesToVisit = placesToVisit.reverse();
console.log("\nReversed Order:");
console.log(placesToVisit);

placesToVisit = placesToVisit.reverse();
console.log("\nOriginal Order After Reversing Again:");
console.log(placesToVisit);

placesToVisit.sort();
console.log("\nSorted in Alphabetical Order:");
console.log(placesToVisit);

placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("\nSorted in Reverse Alphabetical Order:");
console.log(placesToVisit);
