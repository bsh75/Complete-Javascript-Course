// 1. Define a variable called name and set it equal to a string that contains your name. Then, demonstrate how you would change its value to your full name.

let name = "Brett"

name = "Brett Stuart Hockey"

// 2. How would you compare two variables, a and b, to check equality?

let a = '6'
let b = 6

console.log((a === b))

// 3. Write an if...else statement in JavaScript that checks if a number stored in a variable age is greater than 18. If true, it should log "Adult" to the console; otherwise, it should log "Minor".

let age = 18

if (age >= 18) {
    console.log("Adult")
} else {
    console.log("Minor")
}

// 4. Create a for loop that iterates from 0 to 10, but only prints even numbers to the console.
let ten = 10

for (let i = 0; i < ten; i++) {
    if (i % 2 === 0) {
        console.log("Even: ", i)
    } else {
        console.log("Odd: ", i)
    }
}

// 5. Given an array numbers, write a while loop that continues to sum the numbers until the sum is greater than 100, then exits the loop.
let array = [1, 2, 3, 4, 5]
while ()












'hello world'
console.log()
















481212398123 // this is number

let sentence = 'hello world' // this is a string of characters

true && false // these are booleans

let friends = {
    james: 'is super cool',
    lucy: 'isn\'t so cool',
    number_of_eggs: sentence
}

let is_true = true // could be false


function myFirstFunction(value, secondValue) {
    // output the value of is_true
    console.log(value != secondValue)
}


let multiplyTwoNumbers = myFirstFunction

// multiplyTwoNumbers(3, 5)
// multiplyTwoNumbers('6', 6)
// multiplyTwoNumbers(7, 5)


// && AND || OR !

let condition1 = true
let condition2 = false

// console.log(typeof example_array)

if (condition2 && condition1) {
    console.log('hi mum')
} else if (condition1 || condition2) {
    console.log('one condition of the two was true')
} else {
    console.log('the value was false so here we are')
}

let example_array = [1, 5, 7, 9, 4, 5, 6, 7, 3, 4, 5, 2342]


let i = 0
let length = example_array.length
// while (i < length) {
//     console.log('value was true: ', i, example_array[i])
//     i++
// }

// for (let j = 0; j < length; j++) {
//     if (j === 6) {
//         break
//     }
//     console.log('value was true: ', j, example_array[j])


// }



function addStrings(string1 = 'default1', string2 = 'default2') {
    let concatString = string1 + ' ' + string2
    console.log(concatString)
    return concatString
}

let newString = addStrings('hello')
console.log('The new string is: ', newString)

module.exports = {
    addStrings,
    example_array
}