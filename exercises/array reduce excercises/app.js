const num = [1,2,3]

//a = accumulator
//b = currentValue
//c = index
//d = array


//1
// const num1 = num.reduce((a, b, c, d) => {
//     return a + b
// })
// console.log(num1)

const numOne = num.reduce((a, b, c, d) => a + b)
console.log(numOne)


//2
const num2 = num.reduce((accumulator, currentValue, index, array) => accumulator.concat(currentValue), [])
console.log(num2)

//3

// const voters = [
//     {name:'Bob' , age: 30, voted: true},
//     {name:'Jake' , age: 32, voted: true},
//     {name:'Kate' , age: 25, voted: false},
//     {name:'Sam' , age: 20, voted: false},
//     {name:'Phil' , age: 21, voted: true},
//     {name:'Ed' , age:55, voted:true},
//     {name:'Tami' , age: 54, voted:true},
//     {name: 'Mary', age: 31, voted: false},
//     {name: 'Becky', age: 43, voted: false},
//     {name: 'Joey', age: 41, voted: true},
//     {name: 'Jeff', age: 30, voted: true},
//     {name: 'Zack', age: 19, voted: false}
// ]

// const totsVotes = voters.filter ((a, b) => a.voted === true).length

// console.log(totsVotes)

//4

const wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
]

const dreamsTrue = wishlist.reduce((a, b, c, d) =>  a + b.price,0)

console.log(dreamsTrue)

//5
const arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
]

const arr = arrays.reduce((a, b, c, d) => a.concat(b))
console.log(arr)

//6

const voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
]

const youngVotes = voters.reduce((a, b, c, d) => {
    if (b.age < 20 ){
        return 'young votes:' sum + b.value,
    }
})

console.log(youngVotes)