// 1. Unique Characters in a String
// Question: Write a function to determine if a string has all unique characters. Return true if all characters are unique, and false otherwise. Assume the string only contains lowercase letters.

let string_1 = 'helloworldmynameisjamesandilikeicecream'
let string_2 = 'thequickbrownfoxjumpsoverthelazydog'
let string_3 = 'abcdefghijk'

function uniqueCharacters(string) {
    let char_lookup = {  }
    for (let char of string) {
        if (char in char_lookup) {
            return false
        }
        else {
            char_lookup[char] = 1
        }
    }
    return true
}

console.log(uniqueCharacters(string_1))
console.log(uniqueCharacters(string_2))
console.log(uniqueCharacters(string_3))

// 2. Merge Sorted Arrays
// Question: Given two sorted arrays nums1 and nums2, write a function to merge them into a single, sorted array.

let arr_1 = [1, 2, 3, 4, 5, 6] 
let arr_2 = [3, 4, 5, 6, 7, 8]

function combineSortArrays(arr1, arr2) {
    // Step 1 - Merge arrays
    return [...arr1, ...arr2].sort((a, b) => b - a)
}

console.log(combineSortArrays(arr_1, arr_2))


// 3. Find All Duplicates in an Array
// Question: Given an array of integers where 1 ≤ a[i] ≤ n (n = size of the array), some elements appear twice and others appear once. Write a function that returns an array of all the elements that appear twice in the given array. You must achieve this with O(n) time complexity.
let int_array = [1, 2, 3, 4, 3, 6, 7, 45, 3, 578 ,5, 3, 5, 8, 3, 45]

function findDuplicates(array) {
    let duplicates = []
    let count_dict = {}
    for ( num of array ) {
        if (num in count_dict) {
            duplicates.push(num)
        } else {
            count_dict[num] = 1
        }
    }
    return duplicates
}

console.log(findDuplicates(int_array))

// 4. Rotate Array
// Question: Rotate an array to the right by k steps, where k is non-negative. 
let current_array = [1, 2, 3, 4, 5, 6]
let k = 1

function rotateArray(array, k) {
    while (k > array.length) {
        k -= array.length
    }
    let new_end = array.splice(0, array.length-k)
    let new_array = [...array, ...new_end]
    return(new_array)
}

console.log(rotateArray(current_array, 7))


// 5. Valid Parentheses
// Question: Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
let str = "[]{}()"
let str2 = "([]({)})({[]})"
let str3 = "[{]){([}(})"

function validString(string) {
    let combos = {
        '{': '}',
        '(': ')',
        '[': ']'
    }
    let stack = []
    for (bracket of string) {
        if (stack.length === 0) {
            stack.push(bracket)
        } else if ( bracket in combos ) {
            stack.push(bracket)
        } else {
            let last_value_on_stack = stack[-1]
            if (combos[last_value_on_stack] === bracket) {
                stack.pop(bracket)
            }
        }
    }
    return stack.length === 0
}

// console.log(validString(str))
// console.log(validString(str2))
console.log(validString(str3))

