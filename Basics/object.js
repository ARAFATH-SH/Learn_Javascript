const car = {
    name: 'Toyota',
    model: 'Corolla',
    year: 2020,
    start: function() {
        console.log('Car started');
    },
    stop: function() {
        console.log('Car stopped');
    }
};

console.log("Car Name: " + car.name);
car.start();
car.stop(); 