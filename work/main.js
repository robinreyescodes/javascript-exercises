//working with objects and OOP

//what is a constructor function?
class Car {
    constructor(name, doors) {

    this.name = name;
    this.doors = doors;
    }

    set setSpeed(speed) {
        this.speed = speed;
    }

    get getSpeed() {
        return this.speed;
    }

    accelerate(){
        this.speed += 10;
    }
}

const beemer = new Car("BMW", 2);
beemer.setSpeed = 100;
console.log(beemer.getSpeed);
beemer.accelerate();
beemer.accelerate();
beemer.accelerate();

console.log(beemer.getSpeed);