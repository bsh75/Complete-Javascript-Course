// 1. How do you create a string that includes both static text and the value of the variable name, using template literals?
let myName = 'brett'
let myStr = `my name is ${myName}`
console.log(myStr)

// 2. Convert the following function into an arrow function syntax:
function add(a, b) {
    return a + b;
}
console.log(add(8, 4))

let sum = (a, b) => { return a + b }

console.log(sum(9, 9))

// 3. Given an object person with properties name and age, use object destructuring to create two variables name and age, extracting the values from the object.
const person = {
    name: "sim",
    age: 2
}
let {name, age} = person
console.log(name, age)

// 4. Given an array colors with the values ['red', 'green', 'blue'], use array destructuring to create three variables named first, second, and third, assigning the first, second, and third elements of the array to them, respectively.
const colors = ['red', 'green', 'blue']
let [first, second, third] = colors
console.log(first, second, third)

// 5. How do you create a new array combined that contains all elements of arrays arr1 and arr2 using the spread operator?
const arr1 = ['1', 3, 6] 
const arr2 = [2, 4, 'aj']

const bothArr = [...arr1, ...arr2]
console.log(bothArr)

// 6. How do you create a new object combinedObject that merges the properties of two objects obj1 and obj2, with properties from obj2 overwriting those in obj1 if they exist in both objects?
const obj1 = {
    type: "animal",
    species: "dog"
}
const obj2 = {
    type: "person",
    name: "fred"
}

let combinedObject = {
    ...obj1,
    ...obj2
}

console.log(combinedObject)

// 7. How do you safely access the street property of address inside an object user that may not exist, using optional chaining?
const users = {
    user1: {
        address: "home"
    }
}
console.log(users?.["user1"]?.address)

// 8. Define a function greet(name, greeting = "Hello") that takes a name and an optional greeting. If the greeting is not provided, it should default to "Hello".
function greet(name, greeting = "Hallo") {
    console.log(`${greeting} to ${name}`)
}
greet("Brett")
greet("Brett", "Wassup")

// 9. Explain the difference between let and const keywords, and give an example of when you would use each.
/* 
let is used to assign something that can be subject to change eg. let currentValue = 0
const is used to assign something that will remain unchanging eg. const Class animals {}
*/

// 10. Write a for...of loop that iterates over an array numbers and logs each number to the console.
const arrayIter = [1, 2, 3, 4,5 ,6 ]
arrayIter.forEach((currentValue) => {
    console.log(currentValue)
})


// 11. Given an array of numbers, use the map method to create a new array with each number squared.
let new_array = arrayIter.map((currentValue, currentIndex) => {
    return `${currentValue} is at the ${currentIndex} index`
})

console.log(new_array)

// 12. How would you use the ternary operator to assign "adult" to a variable ageStatus if age is 18 or over, and "minor" if under 18?
let myAge = 18
let ageStatus = (myAge >= 18)  ? "adult" : "minor"
console.log(ageStatus)


// 13. How do you use the logical AND operator to execute a function logMessage() only if the variable isLoggedIn is true?
let logMessage = (isLoggedIn) => { 
    let message = "MESSAGE" && isLoggedIn 
    console.log(message)
}

logMessage(true)


// 14. How can you use the logical OR operator to assign a default value of "guest" to a variable username if the current user.name is undefined or null?


