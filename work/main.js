//working with objects and OOP

//what is a constructor function?
class Car {
    set setSpeed(speed) {
        this.speed = speed;
    }

    constructor(name, doors) {

        this.name = name;
        this.doors = doors;
    }

    get getSpeed() {
        return this.speed;
    }

    accelerate(){
        this.speed += 10;
    }
}

class EV extends Car {
    #charge = 100;
    //technically do not need this constructor because i'm not adding new things through this
    constructor(name, doors) {
        super(name, doors)
    }

    get getCharge() {
        return this.#charge;
    }
    accelerate() {
        this.speed += 5;
        this.#charge -= 5;
        return this;
    }

    chargeBattery() {
        this.#charge += 20;
        return this;
    }

}

const m3 = new Car("BMW M3", 4);

const model3 = new EV("tesla model 3", 4);


model3.setSpeed = 100;


/*
* Polymorphism and inheritance is in effect here.
* The parent class 'Car' has setSpeed, getSpeed and accelerate. Since the EV class 'extends'
* the Car class, EV objects can now use the functions that are already in the Car class.
* Inheritance! Now, this is where Polymorphism comes in: the EV class can also have the same
* name functions, but now updated for itself.
* */
console.log(model3.getSpeed);

m3.accelerate();
model3.accelerate();

console.log(`m3 speed: ${m3.getSpeed}`)
console.log(`model 3 speed: ${model3.getSpeed}, charge: ${model3.getCharge}`)

model3.accelerate().accelerate().chargeBattery();
console.log(model3.getCharge);



console.log("");
// new example with protected properties

/*
class Account {
    constructor(name, currency, pin) {
        this.name = name;
        this.currency = currency;
        //protected
        this._pin = pin;
        this._movements = [];


        console.log(`welcome ${this.name}, thank you for opening an account`)
    }

    deposit(val){
        this._movements.push(val);
    }
    withdraw(val){
        this.deposit(-val);
    }

    getMovements() {
        return this._movements;
    }
}
const me = new Account("robin reyes", "USD", 3695);
me.deposit(1000);
me.withdraw(100);
me.withdraw(4);
console.log(me.getMovements());

console.log(me.locale);
*/




