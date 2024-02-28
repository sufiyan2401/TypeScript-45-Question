let animals: string[] = ['Dog', 'Cat', 'Rabbit'];


console.log("Printing animal names:");
for (let animal of animals) {
    console.log(animal);
}


console.log("\nPrinting statements about animals:");
for (let animal of animals) {
    console.log(`A ${animal.toLowerCase()} would make a great pet.`);
}


console.log("\nAny of these animals would make a great pet!");
