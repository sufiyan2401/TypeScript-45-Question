const originalGuestList: string[] = [
  "Albert Einstein",
  "Maya Angelou",
  "Leonardo da Vinci",
];

console.log("Original Guest List:");
originalGuestList.forEach((person) => {
  console.log(person);
});

const guestWhoCantMakeIt: string = "Maya Angelou";

const replacementGuest: string = "Marie Curie";
const indexOfGuestToReplace: number =
  originalGuestList.indexOf(guestWhoCantMakeIt);
if (indexOfGuestToReplace !== -1) {
  originalGuestList[indexOfGuestToReplace] = replacementGuest;
}

console.log("\nUpdated Guest List:");
originalGuestList.forEach((person) => {
  console.log(person);
});

console.log(`\nUnfortunately, ${guestWhoCantMakeIt} can't make it to dinner.`);
