// Using JSON.stringify and JSON.parse Another way to compare two objects in JavaScript

const obj1 = {a: 1, b:2}
const obj2 = {a: 1, b:2}
const obj3 = {a: 1, b:2}

console.log(JSON.stringify(obj1) ===  JSON.stringify(obj2)) // true
console.log(JSON.stringify(obj1) === JSON.stringify(obj3)); // true