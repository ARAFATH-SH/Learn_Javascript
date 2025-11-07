const car = {
    name: 'Toyota',
    model: 'Corolla',
    year: 2020,
    start: function() {
        console.log('Car started');
    },
    stop: function() {
        console.log('Car stopped');
    },
    get modelofcar() {
        return this.model;
    },
    set modelofcar(newModel) {
        this.model = newModel;
    }
};

console.log("Car Name: " + car.name);
car.start();
car.stop(); 
delete car.year;
console.log(car);
console.log(car['model']);
car.modelofcar = 'Camry';
console.log(car.modelofcar);