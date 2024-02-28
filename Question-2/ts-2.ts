let personName_2 = "John Doe";

// Convert name to lowercase
const nameLowercase_2 = personName_2.toLowerCase();

// Convert name to uppercase
const nameUppercase_2 = personName_2.toUpperCase();

// Convert name to title case
const nameTitlecase_2 = personName_2.replace(/\b\w/g, (char) =>
  char.toUpperCase()
);

// Print the results
console.log("Original Name:", personName_2);
console.log("Lowercase:", nameLowercase_2);
console.log("Uppercase:", nameUppercase_2);
console.log("Titlecase:", nameTitlecase_2);
