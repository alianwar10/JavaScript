// Using a third-party library that provide functions for comparing two objects in JavaScript. 
import _ from 'lodash'

const obj1 = {a: 1, b:2}
const obj2 = {a: 1, b:2}
const obj3 = {a: 1, b:2}

console.log(_.isEqual(obj1, obj2))
console.log(_.isEqual(obj1, obj3))

