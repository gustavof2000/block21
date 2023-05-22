// Creating a function for our car
function Car (make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
};

// this will be our protoype method for our car
Car.prototype.getDescription =  function () {
    return `Make: ${this.make}, Model:${this.model}, Year:${this.year}`;
};

// Define our car function creating a ElectricCar subclass that will also give us our range
function ElectricCar(make, model, year, range) {
    Car.call(this, make, model, year);
    this.range = range;
};

// The ElectricCar function will inherit from our car prototype
ElectricCar.prototype = Object.create(Car.prototype);

// Create a method that our ElectricCar prototype will overide our Car protoype that will also return our description of our car and give us the range
ElectricCar.prototype.getDescription = function () {
    const carDescription = Car.prototype.getDescription.call(this);
    return `${carDescription}, Range: ${this.range} miles`;    
};

// Now we create our instance using the Make: Tesla, Model: Model S, Year: 2019, and Range 300
const Tesla = new ElectricCar("Tesla", "Model S", 2019, 300);

// We then continue with console.log our getDescription method on our new instance Tesla
console.log(Tesla.getDescription());

// This will give us "Make: Tesla, Model: Model S, Year: 2019, Range: 300 miles" in our console.

