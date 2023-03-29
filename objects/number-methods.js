let num = 103.952

// toFixed method
console.log(num.toFixed(2))

console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))

let min = 10
let max = 20
let random = Math.floor(Math.random() * (max - min + 1)) + min
console.log(random)

let makeGuess = function (num) {
    // if (num >= 1 && num <= 5) {
    //     return true
    // }
    // else {
    //     return false
    // }

    return num >= 1 && num <= 5
}

console.log(makeGuess(1))