// obj1 and obj2 have the same properties and values, but they are not the same object in memory. Therefore, 
// the first console.log statement returns false

const obj1 = {a: 1, b:2}
const obj2 = {a: 1, b:2}
const obj3 = obj1

console.log(obj1 === obj2) // false
console.log(obj1 === obj3) // true