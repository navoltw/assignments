// preliminaries
//1
// for(let i = 0; i < 10; i++){
//     console.log(i)
// }
//2
// for (let i = 9; i >= 0 ; i--){
//     console.log(i)
// }
//3
let fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
    let len = fruit.length;
    for(let i = 0; i < len; i++){
        console.log("orange")
    }

// Bronze Medal
//1
// var myArrays = [];

// for (var i = 0; i <= 9; i++) {
//     myArrays[i] = i * 1;
// }
// console.log(myArrays)

//2
// var myArrays = [];

// for (var i = 0; i <= 101; i++) {
//     myArrays[i] = i * 2;
// }
// console.log(myArrays)

//3
// var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]

// for (var i = 0; i  < fruit.length; i += 2 ){

//     console.log(fruit[i])
// }

// Silver

//1

// var name  = []

// var peopleArray = [
//     {
//       name: "Harrison Ford",
//       occupation: "Actor"
//     },
//     {
//       name: "Justin Bieber",
//       occupation: "Singer"
//     },
//       {
//       name: "Vladimir Putin",
//       occupation: "Politician"
//     },
//     {
//       name: "Oprah",
//       occupation: "Entertainer"
//     },
//     {
//     name: "James Bond",
//     occupation: "Spy"
//     },
//     {   
//     name: "Rick Sanchez",
//     occupation: "Super Scientist"
//     }

//   ]
//   for(var i = 0; i < peopleArray.length; i++){
//       name.push(peopleArray[i].name);
//   }
//   console.log(name)


//2
// var name  = []
// var job = []
// var peopleArray = [
//     {
//       name: "Harrison Ford",
//       occupation: "Actor"
//     },
//     {
//       name: "Justin Bieber",
//       occupation: "Singer"
//     },
//       {
//       name: "Vladimir Putin",
//       occupation: "Politician"
//     },
//     {
//       name: "Oprah",
//       occupation: "Entertainer"
//     },
//     {
//     name: "James Bond",
//     occupation: "Spy"
//     },
//     {   
//     name: "Rick Sanchez",
//     occupation: "Super Scientist"
//     }

//   ]
//   for(var i = 0; i < peopleArray.length; i++){
//       name.push(peopleArray[i].name);
//       job.push(peopleArray[i].occupation);
//   }
//   console.log(name)
//   console.log(job)






//   3
//   var name = []
//   var job = []

// var peopleArray = [
//     {
//       name: "Harrison Ford",
//       occupation: "Actor"
//     },
//     {
//       name: "Justin Bieber",
//       occupation: "Singer"
//     },
//       {
//       name: "Vladimir Putin",
//       occupation: "Politician"
//     },
//     {
//       name: "Oprah",
//       occupation: "Entertainer"
//     },
//     {
//     name: "James Bond",
//     occupation: "Spy"
//     },
//     {   
//     name: "Rick Sanchez",
//     occupation: "Super Scientist"
//     }

//   ]
//   for(var i = 0; i < peopleArray.length; i += 2){
//       name.push(peopleArray[i].name);
//       job.push(peopleArray[i].occupation);
//   }
//   console.log(name)
//   console.log(job)


//    Gold

// 1

// var myArrays = []

// var grid = [[0, 0, 0], 
// [0, 0, 0], 
// [0, 0, 0]]

// for(let i = 0; i < grid.length; i++){
//     myArrays.push([])
// for(let j = 0; j < grid.length; j++ )
//     myArrays[i].push(0)
// }
// console.log(myArrays)

// for(let i = 0; i < grid.length; i++){
//     myArrays.push([]);
//     for(let j = 0; j < grid.length; j++){
//         myArrays[i].push(0);
//     }
// }
// console.log(myArrays)
 
//                  2

// let myArrays = []

// let grid = [[0, 0, 0], 
// [1, 1, 1], 
// [2, 2, 2]]


// for(let i = 0; i < grid.length; i++){
//   myArrays.push([]);
//   for(let n = 0; n < grid.length; n++)
//   myArrays[i].push(i)
// }
// console.log(myArrays)

//                      3

// let myArrays = []

// let grid = [[0, 1, 2], 
// [0, 1, 2], 
// [0, 1, 2]]

// for(let i = 0; i < grid.length; i++){
//     myArrays.push([])
//     for(n = 0; n < grid.length; n++)
//     myArrays[i].push(n)
// }
// console.log(myArrays)

//                          4

// let myArrays = []

// let grid = [[0, 1, 2], 
// [0, 1, 2], 
// [0, 1, 2]]

// for(let i = 0; i < grid.length; i++){
//     myArrays.push([])
//     for(n = 0; n < grid.length; n++)
//     myArrays[i].push("x")
// }
// console.log(myArrays)