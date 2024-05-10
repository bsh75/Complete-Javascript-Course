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
// const person = {
//     name: "Bob",
//     age: 101
// }
// const person1 = {
//     name: "kell",
//     age: 12
// }
// const person2 = {
//     name: "Nell",
//     age: 14
// }
// let people = [person, person1, person2]

const people = [
    { name: 'ben', age: 30 },
    { name: 'Eeor', age: 20 },
    { name: 'Greg', age: 40  }
]

function findOldestPerson(array) {
    let oldest = array[0]

    for (let i = 1; i < array.length; i++) {
        let newPerson = array[i]
        if (newPerson['age'] > oldest.age) {
            oldest = newPerson
        }
    }
    return oldest
}

console.log(findOldestPerson(people))

// 3. Data Transformation: Convert an array of strings containing numbers into an array of actual number values.
let strArray = ["1.5", "3", "3.43", "5", "6"]
console.log(strArray)

for (let i = 0; i < strArray.length; i++) {
    strArray[i] = parseFloat(strArray[i])
}

console.log(strArray)

// 4. Array Sorting: Write a function that sorts an array of objects based on a specific property (e.g., 'price') in ascending order.
function sortByNumberProperty(array, property, ascending = true) {
    // Function sorts an array of objects by a specified property in either ascending (+ve) or descending (-ve) order
    array.sort(function(a,b) {
        if (ascending) {    
            return a[property] - b[property]
        } else {
            return b[property] - a[property]
        }
    })
    return array
}

console.log(sortByNumberProperty(people, "age", 1))

// 5. Array Manipulation: Write a function that removes the first and last elements from an array and returns the modified array.
let test_array = ["first", 5, 6, 8, 4, 3, 6 , "last"]

function removeFirstLast(array) {
    return array.slice(1, -1)
}

console.log(removeFirstLast(test_array))

// 6. Object Iteration: Given an object representing a shopping cart with items and their quantities, write a function that calculates the total cost of the items.
let shoppingCart = {
    bread: {"price": 3, "quantity": 4 },
    cheese: {"price": 13, "quantity": 1 },
    eggs: {"price": 1, "quantity": 10 }
}

function costCalculator(obj) {
    let sum = null
    let obj_keys = Object.keys(obj)
    for (let i = 0; i < obj_keys.length; i++) {
        sum += obj[obj_keys[i]].price * obj[obj_keys[i]].quantity 
    }
    return sum
}

console.log(costCalculator(shoppingCart))

// 7. Object Manipulation: Write a function that deep clones an object (i.e., copies all nested objects and arrays) to prevent unintended mutations.
let friend = {
    "rupert": {
        hobbies: ['gym', 'reading', 'maths']
    }
}

function deepClone(obj) {
    let new_obj = {}
    let obj_keys = Object.keys(obj)
    for (let i = 0; i < obj_keys.length; i++) {
        let current_key = obj_keys[i]
        new_obj[current_key] = obj[current_key]
    }
    return new_obj
}

function fakeClone(obj) {
    let new_obj = obj
    return obj
}

copy = deepClone(friend)
fake = fakeClone(friend)

friend.james = {
    hobbies: ["Reading", "Nothing"],
    employment: null

}

console.log(copy)
console.log(fake)

// 8. Object Iteration: Given an object representing a student's grades in various subjects, calculate their average grade.
let student_grades = {
    maths: 95,
    physics: 75,
    economics: 43
}
sg_keys = Object.keys(student_grades)
let grade_sum  = null
let i = 0
for (i; i < sg_keys.length; i++) {
    grade_sum += student_grades[sg_keys[i]]
    console.log(i)
}

let avg_grade = grade_sum/(i) // Note: not (i + 1) because the i increments after the loop is finished?
console.log(avg_grade)


// 9. Scope and Closure: Create a function that returns a new function. The returned function should remember and log the number of times it's been called.
function counter() {
    let n = null
    return function() {
        n++
        console.log(n)
    }
}
let count = counter()
count()

// 10. Array Sorting: Write a function that sorts an array of objects based on a specific property (e.g., 'date') in descending order.
let entries = [
    { date: "03/02/24", entry: "Hello1" },
    { date: "01/05/24", entry: "Hello2" },
    { date: "03/02/23", entry: "Hello3" }
]

function sortByDate(array, dateProperty, ascending = true) {
    // Function sorts an array of objects by a specified date property in either ascending or descending order
    array.sort(function(a, b) {
        const dateA = new Date(a[dateProperty]);
        const dateB = new Date(b[dateProperty]);
        
        if (ascending) {
            return dateA - dateB;
        } else {
            return dateB - dateA;
        }
    });
    return array;
}

const sorted_entries = sortByDate(entries, 'date', false)
console.log(sorted_entries)


// 11. Array Methods: Given an array of strings, filter out all the strings with a length less than 5 characters.
let string_array = ['a', 'wera', 'asdgah','as', 'sghj5jjdv', 'wera', 'a', 'as']
for (let i = 0; i < string_array.length; i++ ) {
    let string = string_array[i]
    if (string.length < 5) {
        console.log("Should be removing: ", string_array[i])
        string_array = string_array.filter(item => item !== string_array[i])
        i--
    }
}

console.log(string_array)


// 13. Object Iteration: Write a function that counts the number of occurrences of each word in a given string and stores the results in an object.
function wordCounter(str, words) {
    let wordFrequencies = {}; // Initialize the object to store word frequencies
    for (let i = 0; i < words.length; i++) {
        let wordCount = 0; // Initialize the word count
        let word = words[i]
        for (let i = 0; i < str.length; i++) {
            let tempStr = str.substring(i, i+word.length); // Extract the substring
            console.log(tempStr)
            if (tempStr.includes(word)) {
                wordCount++; // Increment the word count
            }
        }
        wordFrequencies[word] = wordCount; // Add the word frequency to the object
    }
    return wordFrequencies; // Return the object
}

console.log(wordCounter("I am counting the am words and amcurancy of am", ["am", "i"]))