function makeSandwich(...toppings: string[]): void {
    console.log("Making a sandwich with the following toppings:");
    for (let topping of toppings) {
        console.log("- " + topping);
    }
    console.log("Enjoy your sandwich!");
}

makeSandwich('Ham', 'Cheese', 'Lettuce');
makeSandwich('Turkey', 'Tomato');
makeSandwich('Tuna Salad');
