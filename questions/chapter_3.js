// 1. Array Filtering: Write a function that filters out all the even numbers from an array of integers.
let array = [1, 2, 3, 4, 6, 7, 8]

function evenOddFilter(array) {
    let evens = []
    let odds = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            evens.push(array[i])
        } else {
            odds.push(array[i])
        }
    }
    return [odds, evens]
}

console.log(evenOddFilter(array))
//  2. Object Manipulation: Given an array of objects representing people with names and ages, write a function to find the person with the highest age.
const person = {
    name: "Bob",
    age: 101
}
const person1 = {
    name: "kell",
    age: 12
}
const person2 = {
    name: "Nell",
    age: 14
}
let people = [person, person1, person2]

function highestAge(array) {
    let highest = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i].age > highest) {
            highest = array[i].age
        }
    }
    return highest
}

console.log(highestAge(people))

// 3. Data Transformation: Convert an array of strings containing numbers into an array of actual number values.
let strArray = ["1.5", "3", "3.43", "5", "6"]
console.log(strArray)

for (let i = 0; i < strArray.length; i++) {
    strArray[i] = parseFloat(strArray[i])
}

console.log(strArray)

// 4. Array Sorting: Write a function that sorts an array of objects based on a specific property (e.g., 'price') in ascending order.
function sortByProperty(array, property) {
    array.sort(array.property)
    return array
}

console.log(sortByProperty(people, "age"))
// 5. Array Manipulation: Write a function that removes the first and last elements from an array and returns the modified array.


// 6. Object Iteration: Given an object representing a shopping cart with items and their quantities, write a function that calculates the total cost of the items.


// 7. Object Manipulation: Write a function that deep clones an object (i.e., copies all nested objects and arrays) to prevent unintended mutations.


// 8. Object Iteration: Given an object representing a student's grades in various subjects, calculate their average grade.


// 9. Scope and Closure: Create a function that returns a new function. The returned function should remember and log the number of times it's been called.


// 10. Array Sorting: Write a function that sorts an array of objects based on a specific property (e.g., 'date') in descending order.


// 11. Array Methods: Given an array of strings, filter out all the strings with a length less than 5 characters.


// 13. Object Iteration: Write a function that counts the number of occurrences of each word in a given string and stores the results in an object.

