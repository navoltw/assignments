// arr = []
// console.log(arr)
// arr.push('chicken brains', 'tacos', 'shwarma')
// console.log(arr)

// splice (startingIndex, endingIndex) --- grabs item(s) from an array

// does not modify the original array
// returns the items that you sliced

// const str = "there is a snake in my boot"

// let tie = str.slice(1,3)
// console.log(tie)

//.index of  =====  .indexOf(string to find, )


// const str = "there is a snake in my boot"

// let ind = str.indexOf('my')

// let newStr = str.slice( ind, ind +2)
// console.log(ind)


//.split ======     .split( )

// const str = "this passage was designed, to change the mind and build upon the soul"

// const newArr = str.split(',')
// const newArr2 = str.split(' ')
// const newArr3 = str.split('a')

// console.log(newArr3)


//.push(item(s) you want to add) add items to the END of your array /// in .push('you can push anything', ['cat', 'tiger']

// const arr = [1,2,3,4]

// arr.push(5)

// console.log(arr)

// const arr1 = [1,2,3,4]

// let myPush = arr1.push(5)

// console.log(myPush)


//pop   ----- removes last item in an array
// modifies original array
// returns item that got removed

//pop() --- removes last item in an array

// modifies original array
// returns item that got removed

// const arr = [1,2,3,'cat']

// const returnedArr = arr.pop()

// console.log(arr)
// console.log(returnedArr)


//shift()---- removes first item from an array
// modifies original array
// returns item that got removed

// const arr = [1,2,3,4,5,6,5]

// const returnedArr = arr.shift()
// console.log(arr)
// console.log(returnedArr)

//unshift  ----- adding new items to the beginning of the array
// modifies the original array
// length of the new array

// const arr = ['end', 'middle', 'what']

// const returnedArr = arr.unshift('beginning')
// console.log(arr)
// console.log(returnedArr)

// splice(startingIndex, numberOfItemsRemove, Items) ======= allows to add or remove item(s) form a specified location in an array

// modifies original array

// const arr = ['dog', 'cat', 'mouse', 'rat']

// const returnedArr = arr.splice(2, 1, 'lion')
// console.log(arr)
// console.log(returnedArr)

// example 2

// const arr = ['dog', 'cat', 'mouse', 'rat']

// const returnedArr = arr.splice(2, 1)
// console.log(arr)
// console.log(returnedArr)

//example 3  

// let str = 'i am a string'
// const arr = ['dog', 'cat', 'mouse', 'rat']

// const returnedArr = arr.splice(1, 3)

// const newArr = str.split(' ')
// newArr.splice(3, 1, 'array')
// console.log(newArr)
// console.log(arr)
// console.log(returnedArr)

//.slice (startingIndex, endingIndex) ---- grabs items to an  array
// does not modify the original arry
// returns the original items that you sliced

// const arr = [1,2,3,4,4,5,6,5]

// const returnedArr = arr.slice(3, 5)
// console.log(arr)
// console.log(returnedArr)

// indexOf(item you want to find the index of, startingIndex) ---- finds the index of a specified item

//does not modify the original array
// returns the index of the specified item

// const arr = [1,2,5,3,4,4,6,5]

// const returnedArr = arr.indexOf(5, 3)

// console.log(arr)
// console.log(returnedArr)

// if(arr.indexOf(9) !== -1){
//     console.log("there is a nine in that array")
// }else{
//     console.log("there are no nines")
// }

// .lastIndexOf----- finds the last occurring index of an item in an array

// does not modify the original array
// returns the index

// const arr = [1,2,3,4,4,5,6,5]

// const returnedArr = arr.lastIndexOf(5)

// console.log(arr)
// console.log(returnedArr)

// example 2

// const arr = [1,5,2,3,4,4,5,6,5]

// const returnedArr = arr.lastIndexOf(5, -2)

// console.log(arr)
// console.log(returnedArr)

//.join (separator) ---- turns an array into a string

//does not modify the original array
// return the string that you just turned the array into

// let str = "I am a real boy"
// const arr = ["I", "am", "a", "real", "boy"]

// const returnedArr = str.split(' ')

// console.log(arr)
// console.log(returnedArr)

// example 2

// let str = "I am a real boy"
// const arr = ["I", "am", "a", "real", "boy"]

// const returnedArr = arr.join(' ')

// console.log(arr)
// console.log(returnedArr)

// reverse() ----  reverses the 

// const arr = [1,2,3,4,4,5,6,5]

// const returnedArr = arr.reverse()

// console.log(arr)
// console.log(returnedArr)

//example 2

// let str = 'I am a reversed string'
// let myStr = str.split('').reverse().join('')

// console.log(str)
// console.log(myStr)





///               Fizzbuzz
//two ways to start a function

//1
// const fizzBuzz = () => {
//     const fizzBuzzArr = []
//     for(let i = 0; i < 100; i++){
//         if (i % 5 === 0 && i % 3 === 0){
//             console.log(i,'fizzbuzz')
//             fizzBuzzArr.push(i)
//         } else if (i % 3 === 0){
//             console.log(i, 'fizz')
//         }else if (i % 5 === 0) {
//             console.log(i, 'buzz')
//         }else {
//             console.log(i)
//         }
//     }
//     return
// }
// console.log(fizzBuzz())

//  example 2
// function fizzBuzz (){






//            h1.myClass*6 // ul.li.mylist*6    very useful


