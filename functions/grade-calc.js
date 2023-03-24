// Challenge
// student score, total possible score 
// 15/20 -> You got a C (75%)!

// let gradeCalculate = function (studentScore, totalScore = 20 ) {
//     let result = (studentScore / totalScore) * 100

//     if (result >= 90 ) {
//         return `You got a A {${result}%}`
//     }
//     else if (result >= 80) {
//         return `You got a A {${result}%}`
//     }
//     else if (result >= 70)  {
//         return `You got a A {${result}%}`
//     }
//     else if (result >= 60)  {
//         return `You got a A {${result}%}`
//     }
//     else {
//         return `You got a A {${result}%}`
//     }
// }



// let grade = gradeCalculate(15)
// console.log(grade)

// Another way of resolving this challenge 

let calculateGrade = function (studentScore, totalScore = 20 ) {
    let percent = (studentScore / totalScore) * 100
    let letterGrade = ''

    if (percent >= 90 ) {
        letterGrade = 'A'
    }
    else if (percent >= 80) {
        letterGrade = 'B'
    }
    else if (percent >= 70)  {
        letterGrade = 'C'
    }
    else if (percent >= 60)  {
        letterGrade = 'D'
    }
    else {
        letterGrade = 'F'
    }

    return `You got a ${letterGrade} {${percent}%}`
}



let result = calculateGrade(3)
console.log(result)

