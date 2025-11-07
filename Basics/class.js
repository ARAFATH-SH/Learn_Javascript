class car{
    
    constructor(brand, model){
        this.brand = brand;
        this.model = model;
    }
    run(){
        console.log(this.brand + " " + this.model + " is running.");
    }
}

class bike extends car{
    constructor(brand, model, type){
        super(brand, model);
        this.type = type;
    }
    show(){
        console.log(this.brand + " " + this.model + " is a " + this.type + " bike and is running.");
    }
}

let myCar = new car("Toyota", "Corolla");
myCar.run(); // Toyota Corolla is running.
let myBike = new bike("Yamaha", "FZ", "Sport");
myBike.show(); // Yamaha FZ is a Sport bike and is running.