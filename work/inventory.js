/*
* Inventory management system using OOP
* Robin Reyes
* */

//create item class with properties name, desc, quan, price
class Item {
    constructor(name, desc, quantity, price) {
        this.name = name;
        this.desc = desc;
        this.quantity = quantity;
        this.price = price;
    }
}

class Inventory  {
    storage = [];

    addItem(newItem) {
        this.storage.push(newItem);
        return this;
    }
    #updateItem(nameOfItem, quantity) {
        let item = this.storage.find(item => item.name === nameOfItem);
        item.quantity += quantity;
        return item;
    }
    purchased(nameOfItem, quantity) {
        this.#updateItem(nameOfItem, -(quantity));
        console.log('thanks for your purchase!');
    }
}

const inventory = new Inventory();
inventory.addItem(new Item("water jug", "jug of water", 10, 3.99));
inventory.addItem(new Item("Tazo Tea", "20 pack of tea", 20, 10.99));
inventory.addItem(new Item("PS5", "playstation", 5, 500));

console.log(inventory);
console.log(inventory.updateItem("water jug", 20));
inventory.purchased("PS5", 2);
console.log(inventory);