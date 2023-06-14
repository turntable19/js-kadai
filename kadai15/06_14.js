class Item {
    constructor(name, price, year) {
        this.name = name;
        this.price = price;
        this.year = year;
    }

    getName() {
    return this.name;
    }

    getPrice() {
    return this.price;
    }

    getYear() {
    return this.year;
    }
}

class Chair extends Item {
    constructor(name, price,year, isUsed) {
        super(name, price, year);
        this.isUsed = isUsed;
    }

    isSecondHand() {
        return this.isUsed;
    }
}
let newChair = new Chair("Designer Chair", 5000, 2023, false);
let usedChair = new Chair("Old Wooden Chair", 1000, 1999,  true);

let itemList = [newChair, usedChair]

itemList.forEach((e) => {
    console.log(e);
})
