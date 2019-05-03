// array methods

// const arr = [5, 56, 34, 65, 2, 15]
// const stringArr = ['cat', 'dog', 'bull']
// for (let i = 10; i < arr.length; i++){
//     return arr[i]++
// }

// console.log(arr)

//example 1
// const newArr = arr.map((el) => {
//     return el += 1
// })
// create a new array, newArray, form another array arr. 
// Lets iterate through each element and increment by 1 for each element

// console.log(newArr)

//example 2
// const newArr = arr.map(el, i) = {
//     return i + ': ' + el
// }

// const newArr = stringArr.map((el, i) => {
//     return el[0].toUpperCase()
// } )

// const retArr = stringArr.forEach((el, i) => console.log(el))
// stringArr.forEach((el, i) => {console.log('big ', el)} )


// find
// return the first instance of item in array
//example 1
// const foundItem = stringArr.find((el) => el === 'cat')
//example 2
// const foundItem = arr.find((el) => el < 20)
// console.log(foundItem)


//higher order functions

// function greaterThan(number){
//     return function(m){
//         return (m > number) ? true : false
//     }
//  }
 
//  let greaterThan10 = greaterThan(10)
//  let greaterThan50 = greaterThan(50)
 
 //console.log(greaterThan50(60))
 //example
 
 
//  const stringArr = ['cat', 'dog', 'bull']
 //array methods
 //map
 
 //a map returns an array after iterating thourgh each element
//  console.log(arr)
 // for (let i = 0; i < arr.length; i++){
 //     arr[i]++
 // }
 //console.log(arr)
 
//  const newArr = stringArr.map((el, i, whatsThis) => {
//     console.log(whatsThis)
//     return el[0].toUpperCase()
//  } )
 //create a new array, newArr, from another array arr.
 //Lets iterate through each element and increment by 1 for each element
 //forEach
 // stringArr.forEach((el, i) => {console.log('big ' + el)} )
//  const arr = [5, 56, 34, 65, 2, 15]
 //find
 //return the first instance of item in array & returns if available
//  const foundItem = arr.find((el) => el < 20)
//  console.log(foundItem)


 //.map

//  const arr = [1, 2, 3, 4, 5, 6]

//  arr.map(function(el){

//  })


 // fizzbuzz

//  for(let i = 0; i <=n; i++){
//     if (i === 0){
//         console.log(i)
//     }else if (i % 15 === 0){
//         console.log("'FizzBuzz'")
//     }else if (i % 3 === 0){
//         console.log("'fizz'")
//     }else if (i % 5 === 0){
//         console.log("'buzz'")
//     }else {
//         console.log(i)
//     }
// }




//disFunc


// argument is a value or a function, passed 
//  passed into the functions parenthesis
//  parameter is the place holder for the 
//  arguments, as you're declaring the function  

// const argumentOne = 4
// const argumentTwo = 5

// const disFunc = (parameterOne, parameterTwo) => {
//     return parameterOne + parameterTwo
// }
// disFunc(argumentOne, argumentTwo)


// const argumentOne = 6
// const argumentTwo = 12

// const disFunc = (parameterOne, parameterTwo) =>{
//     return parameterOne + parameterTwo;
// }

// console.log(disFunc(argumentOne, argumentTwo))

//   end disFunc


// reduce 
// first argument: accumulator
// second argument: current value
// third argument: index
// forth argument: source array

//example 1
// [0, 1, 2, 3, 4].reduce((accumulator, currentValue, currentIndex, array) => {
//     if(currentIndex === 1){
//         console.log(accumulator, 'acc', currentValue, 'cv', currentIndex, 'ci', array, 'arr')
//     }
//     return accumulator + currentValue
// })

// example 2
// ['a', 'b', 'c', 'd'].reduce((accumulator, currentValue, currentIndex, array) => {
//     if(currentIndex === 1){
//         console.log(accumulator, 'acc', currentValue, 'cv', currentIndex, 'ci', array, 'arr')
//     }
//     return accumulator + currentValue
// })

//example 3
// [100, 220, 300, 400,].reduce((accumulator, currentValue, currentIndex, array) => {
//     if(currentIndex === 3){
//         console.log(accumulator, 'acc', currentValue, 'cv', currentIndex, 'ci', array, 'arr')
//     }
//     return accumulator + currentValue
// }, 0)

//accumulator adds all those before it to its index IDBCursorWithValue.

//example 4
// [400, 200, 100, 50,].reduce((accumulator, currentValue, currentIndex, array) => {
//     if(currentIndex === 4){
//         console.log(accumulator, 'acc', currentValue, 'cv', currentIndex, 'ci', array, 'arr')
//     }
//     return accumulator - currentValue
// })

// sort

// const argumentOne = 4
// const argumentTwo = 5

// const disFunc = (parameterOne, parameterTwo) => {
//     return parameterOne + parameterTwo
// }


// disFunc(argumentOne, argumentTwo)

//reduce
//first argument: accumulator
//second argument: current value
//third argument: index
//fourth argument: source array

//argument is value or a function, passed into the functions parenthesis
//parameter is the place holder for the arguments, as you're declaring the function

// [400, 200, 100, 50].reduce((accumulator, currentValue, currentIndex, array) => {
//     if(currentIndex === 4){
//         console.log(accumulator, 'acc', currentValue, 'cv', currentIndex, 'ci', array, 'arr')
//     }
//     return accumulator - currentValue
// })

// const people = [
//     {
//         firstName: 'Bobby',
//         hairStyle: 'bald',
//         favoriteColor: 'Baby Blue'
//     },
//     {
//         firstName: 'Hank',
//         hairStyle: 'crew cut',
//         favoriteColor: 'red'
//     },
//     {
//         firstName: 'Frank',
//         hairStyle: 'Skullet',
//         favoriteColor: 'Potato'
//     },
//     {
//         firstName: 'Bobie',
//         hairStyle: 'Afro',
//         favoriteColor: 'Tomato'
//     }
// ]

// people.sort((firstItem, secondItem) => {
//     console.log(firstItem)
//     console.log(secondItem)
//     console.log(93747474747)
//     return firstItem.firstName > secondItem.firstName
// })

// console.log(people)
// peopleArray = []

// people.map(person => {
//     peopleArray.push(person.firstName)
// })

// console.log(peopleArray)

// const sayHello = () => 'Hello'
// console.log(sayHello())

// const sayGoodBye = () => {
//     return 'Good Bye'
// }
// console.log(sayGoodBye())