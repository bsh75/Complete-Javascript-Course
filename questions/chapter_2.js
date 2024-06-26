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
let array = [3, 2, 15, 1, 32, 3, 46, 75, 1]
let sum = 0
let j = 0

while (sum <= 100) {
    sum += array[j]
    j += 1
}
console.log(sum)

// 6. Define a function named calculateArea that takes two parameters, width and height, and returns the area of a rectangle. // width * height
function calculateArea(width, height) {
    return width * height
}

console.log(calculateArea(3, 4))
