var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var placesToVisit = [
    "Tokyo",
    "Paris",
    "Bora Bora",
    "Santorini",
    "New York City",
];
console.log("Original Order:");
console.log(placesToVisit);
console.log("\nAlphabetical Order:");
console.log(__spreadArray([], placesToVisit, true).sort());
console.log("\nOriginal Order After Sorting:");
console.log(placesToVisit);
console.log("\nReverse Alphabetical Order:");
console.log(__spreadArray([], placesToVisit, true).sort().reverse());
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
placesToVisit.sort(function (a, b) { return b.localeCompare(a); });
console.log("\nSorted in Reverse Alphabetical Order:");
console.log(placesToVisit);
