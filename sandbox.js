/* ----------------------------------------------------- 
    VOCABULARY TERMS
----------------------------------------------------- */

// as a note: semicolons are optional in JS

/*

    - function: reusable blocks of code
        - function definition: stores the code to be reused
        - function call: uses the code
    - parameter: takes inputted code into a function definition
    - argument: passes inputted code from a function call
    - return statement: passes code from inside a function scope to the function call's scope
    - callback function: function passed as an argument

    - scope: which portion of a file can access a piece of code
        - global scope: seen by entire file
        - local scope: seen only within a block of code (often in between curly brackets)

*/

/* ----------------------------------------------------- 
    NAMED FUNCTIONS
----------------------------------------------------- */

function sayHello() {
    console.log("Hello there!");
}

// sayHello();

function sayHelloToYou(name) {
    // parameter name available within local scope
    console.log("Hello there, " + name + "!") // string concatenation
    console.log(`Hello there, ${name}!`) // string interpolation
}

// sayHelloToYou("Beck")
// sayHelloToYou("Kairi")

function addTwoNumbers(num1, num2) {
    const sum = num1 + num2

    return sum
}

// console.log(addTwoNumbers(1, 2))

// const sum = addTwoNumbers(4, 6)

// console.log("The sum doubled is " + (sum * 2))

/* ----------------------------------------------------- 
    ANONYMOUS FUNCTIONS
----------------------------------------------------- */

const squaredNumber = function (num) {
    return num * num // num ** 2
}

// const square = squaredNumber(6)

// console.log(square)

/* ----------------------------------------------------- 
    ARROW FUNCTIONS
----------------------------------------------------- */

const cubedNumber1 = (num) => {
    return num * num * num // num ** 3
}

const numGlobal = 10

const cubedNumber2 = num => num * num * num // num ** 3

// const cube = cubedNumber2(numGlobal)

// console.log(cube)

// console.log(cubedNumber2(4))

/* ----------------------------------------------------- 
    SCOPE
----------------------------------------------------- */

let num1 = 3

function incrementer() {
    let num2 = 8

    num1 = num1 + 1 // num1++
    num2 = num2 + 1 // num2++

    return num2
}

// const num2 = incrementer()

// console.log(`num1: ${num1}`)
// console.log(`num2: ${num2}`)

/* ----------------------------------------------------- 
    ARRAY METHODS WITH CALLBACK FUNCTIONS
----------------------------------------------------- */

const nums = [1, 2, 3, 4, 5]

nums[0] // array indexing

// iterates over nums array and returns new, transformed array
const squaredNums = nums.map((num) => num ** 2)

// console.log(squaredNums)