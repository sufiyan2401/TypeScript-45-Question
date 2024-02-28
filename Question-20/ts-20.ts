const countries = [
  {
    name: "United States",
    capital: "Washington, D.C.",
    population: 331002651,
    language: "English",
  },
  {
    name: "France",
    capital: "Paris",
    population: 65273511,
    language: "French",
  },
  {
    name: "Japan",
    capital: "Tokyo",
    population: 126476461,
    language: "Japanese",
  },
  {
    name: "India",
    capital: "New Delhi",
    population: 1380004385,
    language: "Hindi, English",
  },
  {
    name: "Brazil",
    capital: "Brasília",
    population: 212559417,
    language: "Portuguese",
  },
];

// Print information about each country
console.log("Information about Countries:");
countries.forEach((country) => {
  console.log(`\nName: ${country.name}`);
  console.log(`Capital: ${country.capital}`);
  console.log(`Population: ${country.population}`);
  console.log(`Language: ${country.language}`);
});
