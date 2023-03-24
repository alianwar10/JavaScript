// // Multiple arguments
let add = function (a, b, c) {
    return a + b * c
}

let result = add(10, 11, 2)
console.log(result)

// // Default arguments
let getScoreText = function (name = 'Anonymous', score = 0) {
    return 'Name: ' + name + ' - Score: ' + score
}

let scoreText = getScoreText('undefined', 99)
console.log(scoreText)

// // Challenge area
// // total, tipPercent .2

let tipCalculator = function (total, tipPercent = .2) {
    return total * tipPercent
}

let tip = tipCalculator(100)
console.log(tip)

// // Challenge Area - Template String
// // A 25% tip on $40 would be $10

let getTip = function (total, tipPercent = .25) {
    let percent = tipPercent * 100
    let tip = total * tipPercent 
    return `A ${percent}% tip on $${total} would be $${tip}`
}

let calcTip = getTip(40, .25)
console.log(calcTip)

