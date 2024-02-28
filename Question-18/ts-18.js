// Store the original guest list
var originalGuestList = [
    "Albert Einstein",
    "Maya Angelou",
    "Leonardo da Vinci",
    "Marie Curie",
    "Isaac Newton",
    "Jane Austen",
    "Nikola Tesla",
];
// Print the number of people being invited to dinner
console.log("Number of people invited to dinner: ".concat(originalGuestList.length));
// Print the original guest list
console.log("\nOriginal Guest List:");
originalGuestList.forEach(function (person) {
    console.log(person);
});
// Identify the guest who can't make it
var guestWhontMakeIt = "Maya Angelou";
// Replace the guest who can't make it with a new guest
var newbieGuest = "Galileo Galilei";
var indxOfGuestToReplace = originalGuestList.indexOf(guestWhontMakeIt);
if (indxOfGuestToReplace !== -1) {
    originalGuestList[indxOfGuestToReplace] = newbieGuest;
}
// Print the updated guest list
console.log("\nUpdated Guest List:");
originalGuestList.forEach(function (person) {
    console.log(person);
});
// Print the name of the guest who can't make it
console.log("\nUnfortunately, ".concat(guestWhontMakeIt, " can't make it to dinner."));
// Inform about the bigger dinner table
console.log("\nGood news! We found a bigger dinner table.");
// Add new guests
var moreGuests = ["Stephen Hawking", "Marie Curie"];
// Add one new guest to the beginning of the array
originalGuestList.unshift(moreGuests[0]);
// Add one new guest to the middle of the array
originalGuestList.splice(Math.floor(originalGuestList.length / 2), 0, moreGuests[1]);
// Use push() to add one new guest to the end of the list
originalGuestList.push("Charles Darwin");
// Print a new set of invitation messages
console.log("\nNew Invitation Messages:");
originalGuestList.forEach(function (person) {
    console.log("Dear ".concat(person, ",\n\nYou are cordially invited to dinner. It would be an honor to have your presence.\n\nSincerely,\nSufiyan"));
});
// Inform that only two people can be invited for dinner
console.log("\nUnfortunately, the new dinner table won't arrive in time, and we can invite only two people for dinner.");
// Remove guests until only two names remain in the list
while (originalGuestList.length > 2) {
    var removedGuest = originalGuestList.pop();
    console.log("\nSorry, ".concat(removedGuest, ", we can't invite you to dinner."));
}
// Print a message to the remaining two people on the list, letting them know they're still invited
console.log("\nDear ".concat(originalGuestList[0], " and ").concat(originalGuestList[1], ",\n\nYou're still invited to dinner. See you there!\n\nSincerely,\nSufiyan"));
// Remove the last two names from the list to have an empty list
originalGuestList.pop();
originalGuestList.pop();
// Print the updated guest list to ensure it's empty
console.log("\nUpdated Guest List:");
console.log(originalGuestList);
