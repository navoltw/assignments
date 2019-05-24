//1

// const arr = [2, 5, 100]

// const newArr = arr.map ((el) => {
//     return el * 2 
// } )
//   console.log(newArr); // [4, 10, 200]
  
//2

// const arr = [2, 5, 100]

// const newArr = arr.map(arguments);

// var str = "Hello my name is Albert"

// const newArr = str.split(' ')
// newArr.splice(4, 1, 'Wayne')
// return newArr.join(' ')


//3
// const name = ["john", "JACOB", "jinGleHeimer", "schmidt"]

// const nameUp = name.map(function toUpper(a){
//     return a.substring(0, 1).toUpperCase() + a.substring(1);
// })
// console.log(nameUp)


// const onlyOne = [
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]
//4
// const mainChar = onlyOne.map(function alpha(a, b){
//     if (a.age > 18){
        // return `${a.name} can go to the matrix`
//         return a.name + ' can go to the matrix';
//     }else if (a.age < 18){
//         return a.name +' is under age !!'
//     }
  
// })
// console.log(mainChar)

//5
// const newChar = onlyOne.map(function alpha(a, b){
    // if (`a.name != null && a.name.length > 0 ) {
    //     return `<h1>${a.name}</h1>`
    // }else if (a.age != null && a.age.length > 0 ){
    //     return `<h2>${a.age}</h2>``
    // }

    // return ("<h1>"+a.name+"</h1>" + "<h2>"+a.age+"</h2>" )

    
// })

// const newChar = onlyOne.map((el) => {
//     return ("<h1>"+el.name+"</h1>" + "<h2>"+el.age+"</h2>")
// })

// console.log(newChar)
const arr = [ 2, 5, 3, 3, 35, 38 ];
const addSub10 = arr.map((num) => {
    if(num <= 10){
        return num + 10
     } else {
        return num - 10
     }

})

console.log( addSub10 )


function myFunc(...items){
    let myArr = items;
    return myArr;
}
console.log(myFunc(1, 2, 3, 4, 5))