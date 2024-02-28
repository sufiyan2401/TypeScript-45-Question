var originalGuests = [
    "Albert Einstein",
    "Maya Angelou",
    "Leonardo da Vinci",
    "Marie Curie",
    "Isaac Newton",
    "Jane Austen",
    "Nikola Tesla",
];
console.log("Original Guest List:");
originalGuests.forEach(function (person) {
    console.log(person);
});
var guestWhonotMakeIt = "Maya Angelou";
var newGuest = "Galileo Galilei";
var indOfGuestToReplace = originalGuests.indexOf(guestWhonotMakeIt);
if (indOfGuestToReplace !== -1) {
    originalGuests[indOfGuestToReplace] = newGuest;
}
console.log("\nUpdated Guest List:");
originalGuests.forEach(function (person) {
    console.log(person);
});
console.log("\nUnfortunately, ".concat(guestWhonotMakeIt, " can't make it to dinner."));
console.log("\nGood news! We found a bigger dinner table.");
var additionalGuests = ["Stephen Hawking", "Marie Curie"];
originalGuests.unshift(additionalGuests[0]);
originalGuests.splice(Math.floor(originalGuests.length / 2), 0, additionalGuests[1]);
originalGuests.push("Charles Darwin");
console.log("\nNew Invitation Messages:");
originalGuests.forEach(function (person) {
    console.log("Dear ".concat(person, ",\n\nYou are cordially invited to dinner. It would be an honor to have your presence.\n\nSincerely,\nSufiyan"));
});
console.log("\nUnfortunately, the new dinner table won't arrive in time, and we can invite only two people for dinner.");
while (originalGuests.length > 2) {
    var removedGuest = originalGuests.pop();
    console.log("\nSorry, ".concat(removedGuest, ", we can't invite you to dinner."));
}
console.log("\nDear ".concat(originalGuests[0], " and ").concat(originalGuests[1], ",\n\nYou're still invited to dinner. See you there!\n\nSincerely,\nSufiyan"));
originalGuests.pop();
originalGuests.pop();
console.log("\nUpdated Guest List:");
console.log(originalGuests);
