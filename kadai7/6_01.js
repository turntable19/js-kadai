let fruits = {apple:'りんご', strawberry:'いちご', grape:'ブドウ', lemon:'レモン'};

console.log(fruits.grape);

for (key in fruits) {
    console.log(key);
}

let values = Object.values(fruits);
console.log(values);