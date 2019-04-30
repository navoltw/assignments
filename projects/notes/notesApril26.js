// const, let, and var
//keywords to declare a variables

//var: is not bound by scope

//const and let: are governed by scope
//In reference to its parent's curly-braces

//const: is immutable
// examples:
// const str = 'some string'
// const arr = ['this', 'is', 'an', 'array']

//TypeError: Assignment to constant variable.
// str = 'some string'
// arr = ['this', 'new', 'array']

// arr.push('hello')
//contents may be changed
// console.log(arr)

// let str = 'some string'
// let arr = ['this', 'is', 'an', 'array']

// //No errors upon pointing to a new value
// str = 'some string'
// arr = ['this', 'new', 'array']

// console.log(str, arr)


// console.log(disString)

// disString = 'hello'
// myFunc(disString)

// console.log(disString)

// disString = 'Wazzup'

// console.log(disString)

// function myFunc(str){
//     console.log(str)
// }
///////////////////////////

//Rest Operator
// Include an unknown amount of arguments in a function
// function addNumbers(...numbers){
//     //numbers is now an array that we can use
//     return numbers
// }

// console.log(addNumbers(3,4,5,6,7))
// //output: [numbers]

//Spread Operator

// const defaultColors = ['red', 'blue', 'green']
// const userFavoriteColors = ['pink', 'turquoise', 'passion fruit']

// // const disNewArr = defaultColors.concat(userFavoriteColors)
// // console.log(disNewArr)

// const newArr = [...defaultColors, ...userFavoriteColors]
// console.log(newArr)

// defaultColors.push(...userFavoriteColors)


//Default Parameters

function calculateVolume(length, width, height = 1){
    // if(height === undefined){
    //     height = 1
    // }
    return length * width * height
}

// console.log(calculateVolume(2, 3, 5))

//Template Literals
// const str = 'Hello'
// const strTwo = 'World'

// const newStr = `Using Back ticks (Left of '1' on the keyboard) ${str} ${strTwo} 
// ${calculateVolume(1,2,3)}`
// console.log(newStr)

//Object Literals

// const name = 'Bill'
// let age = 44
// let gender = 'undefined'

// const oldObj = {name: 'Bill'}

// const person = {
//     ...oldObj,
//     age,
//     gender
// }

// console.log(person)

// const person = {
//     name: 'Julio',
//     catchPhrase: 'Booyeah',
//     sayCatchPhrase: function(catchPhrase){
//         return catchPhrase
//     }
// }

// // console.log(person.sayCatchPhrase())

// const {sayCatchPhrase, catchPhrase} = person

// console.log(sayCatchPhrase(catchPhrase))

// Destructuring Arrays
// const arr = [3, 4, ['hello world', 'Try', 'this']]

// let thirdItem = arr[2][1][1] + 'ead'
// console.log(thirdItem)

//String
// const str = 'Hello World'
// console.log(str[8])


//Import and export
// const readlineSync = require('readline-sync')
// import readline from 'readline-sync'

// module.exports = myFunc
// export default myFunc
// export myFunc

//Arrow Functions
// const add = function(a, b){
//     return a + b
// }

// const sub = (a, b) => {
//     return a - b
// }
// // console.log(sub(1,2))

// const multiByZero = num => {
//     return num * 0
// }
// // console.log(multiByZero(9))

// const divideNums = (numOne, numTwo) => numOne / numTwo

// const multiLineCalc = (numOne, numTwo) => (numOne / numTwo
//     + numTwo
//     + 100
// )

// console.log(mult(4,2))

// let x = 1
// if(x === 1){
//     console.log('x is zero')
// }

// && replaces if statements

//Does not run
// null && console.log('x is not zero')
// 0 && console.log('x is not zero')
// false && console.log('x is not zero')
// undefined && console.log('x is not zero')

//Will run
// true && console.log('x is not zero')
// 'Anything' && console.log('x is not zero')
// 88 && console.log('x is not zero')

//Ternary operators

// if(x === 1){
//     console.log('x is one')
// } else {
//     console.log('x is not one')
// }

// let x = 0
// x === 1 ? console.log('x is one') : console.log('x is not one')
