var guestList = [
    "Albert Einstein",
    "Maya Angelou",
    "Leonardo da Vinci",
];
console.log("Original Guest List:");
guestList.forEach(function (person) {
    console.log(person);
});
var guestWhoCantMakeIt = "Maya Angelou";
var replacementGuest = "Marie Curie";
var indexOfGuestToReplace = guestList.indexOf(guestWhoCantMakeIt);
if (indexOfGuestToReplace !== -1) {
    guestList[indexOfGuestToReplace] = replacementGuest;
}
console.log("\nUpdated Guest List:");
guestList.forEach(function (person) {
    console.log(person);
});
console.log("\nUnfortunately, ".concat(guestWhoCantMakeIt, " can't make it to dinner."));
console.log("\nGood news! We found a bigger dinner table.");
var newGuests = ["Isaac Newton", "Jane Austen", "Nikola Tesla"];
guestList.unshift(newGuests[0]);
guestList.splice(Math.floor(guestList.length / 2), 0, newGuests[1]);
guestList.push(newGuests[2]);
console.log("\nNew Invitation Messages:");
guestList.forEach(function (person) {
    console.log("Dear ".concat(person, ",\n\nYou are cordially invited to dinner. It would be an honor to have your presence.\n\nSincerely,\nSufiyan"));
});
