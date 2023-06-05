let apple = {
    name: 'apple',
    price: 100,
    weight: 250,
    origin: 'Aomori'
};

let lemon = {
    name: 'lemon',
    price: 200,
    weight: 200,
    origin: 'Shizuoka'
};

let grape = {
    name: 'grape',
    price: 300,
    weight: 400,
    origin: 'Yamanashi'
};

let fruits = [apple, lemon, grape];

let totalWeight = fruits.reduce((total, fruit) => total + fruit.weight, 0);
console.log("総重量は " + totalWeight + " グラムです。");