// Function - input , code , output

let greetUser = function() {
    console.log('Welcome user!')
}

greetUser()

let square = function(num) {
    console.log(num)  
}

square(3)

let squareII = function(num) {
    let result = num * num
    return result
}

// console.log(squareII(3))

let value = squareII(3)
console.log(value)

// let fahrenheit = 32
// let convertFtoC = (fahrenheit - 32) * 5/9 
// console.log(convertFtoC)

let convertFahrenheitToCelcius = function(fahrenheit) {
    let celcius = (fahrenheit - 32) * 5/9
    return celcius
}

let tempOne = convertFahrenheitToCelcius(32)
let tempTwo = convertFahrenheitToCelcius(68)

console.log(tempOne)
console.log(tempTwo)

