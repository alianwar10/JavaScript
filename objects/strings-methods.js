let name = '  Andrew Made  '

// Length property
console.log(name.length)

// Convert to upper case
console.log(name.toUpperCase())

// Convert to lower case
console.log(name.toLowerCase())

// Includes method
let password = 'abcdefpassword123'
console.log(password.includes('password'))

// Trim method
console.log(name.trim())

// create function isValidPassword
// True - length is more than 8 characters and it doesn't contain the word password


let isValidPassword = function (password) {

    return password.length > 8 && !password.includes('password')
}

console.log(isValidPassword('asdfp'))
console.log(isValidPassword('asbcdh732632&^'))
console.log(isValidPassword('asjdfhejpassword'))