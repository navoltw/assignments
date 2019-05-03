

const arr = [3, 6, 8, 2]

//1
// const fiveG = arr.filter((a, b) => { 
//     return a > 5
// })
// console.log(fiveG)

//2
const evenNum = arr.filter((a, b) => {
    return a % 2 === 0
} )
console.log(evenNum)

//3

const wolfOne = ["dog", "wolf", "by", "family", "eaten", "camping"]

const fiveLess = wolfOne.filter((a, b) => {
    return a.length < 6
})
console.log (fiveLess)

//4

const badGuys = [
    {
        name: "Angelina Jolie",
        member: true
    },
    {
        name: "Eric Jones",
        member: false
    },
    {
        name: "Paris Hilton",
        member: true
    },
    {
        name: "Kayne West",
        member: false
    },
    {
        name: "Bob Ziroll",
        member: true
    }
]

// const goodGuys = badGuys.filter(function (el){
//     return (el.member === true)
// })

const goodGuys = badGuys.filter((a,b) => {
    return a.member === true
})
console.log(goodGuys)

const age = [
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]
const matrix = age.filter((a, b) => {
    return a.age < 18
})
console.log(matrix)