var personName = "John Doe";
// Convert name to lowercase
var nameLowercase = personName.toLowerCase();
// Convert name to uppercase
var nameUppercase = personName.toUpperCase();
// Convert name to title case
var nameTitlecase = personName.replace(/\b\w/g, function (char) {
    return char.toUpperCase();
});
// Print the results
console.log("Original Name:", personName);
console.log("Lowercase:", nameLowercase);
console.log("Uppercase:", nameUppercase);
console.log("Titlecase:", nameTitlecase);
