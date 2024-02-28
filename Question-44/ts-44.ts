interface Car {
    manufacturer: string;
    model: string;
    [key: string]: any;
}

function createCar(manufacturer: string, model: string, ...options: [string, any][]): Car {
    let car: Car = {
        manufacturer: manufacturer,
        model: model
    };

    for (let [key, value] of options) {
        car[key] = value;
    }

    return car;
}


let myCar = createCar('Toyota', 'Camry', ['color', 'blue'], ['year', 2023])


console.log(myCar);
