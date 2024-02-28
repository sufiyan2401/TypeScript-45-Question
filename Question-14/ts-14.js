// Store the original guest list
var originalGuestList = [
    "Albert Einstein",
    "Maya Angelou",
    "Leonardo da Vinci",
];
// Print the original guest list
console.log("Original Guest List:");
originalGuestList.forEach(function (person) {
    console.log(person);
});
// Identify the guest who can't make it
var guestWhoCantMakeIt = "Maya Angelou";
// Replace the guest who can't make it with a new guest
var replacementGuest = "Marie Curie";
var indexOfGuestToReplace = originalGuestList.indexOf(guestWhoCantMakeIt);
if (indexOfGuestToReplace !== -1) {
    originalGuestList[indexOfGuestToReplace] = replacementGuest;
}
// Print the updated guest list
console.log("\nUpdated Guest List:");
originalGuestList.forEach(function (person) {
    console.log(person);
});
// Print the name of the guest who can't make it
console.log("\nUnfortunately, ".concat(guestWhoCantMakeIt, " can't make it to dinner."));
