
//1
// const name = "John"
// let age = 101
// let pets = ["cat", "dog"]
// let petObjects = []

// function runForLoop() {
//     for (let i = 0; i < pets.length; i++) {
//         let pet = { type: pets[i] }
//         if (pets[i] === "cat") {
//             return 'fluffy'
//         } else {
//             return  'spot'
//         }
//         pet.name = []
//         petObjects.push(pet)
//     }
//     return name
// }
// console.log(pet)
// runForLoop()


//2

//part 1
// const carrots = ["bright orange", "ripe", "rotten"]

// const mapVegetables = carrots.map((el) => {
//     return "type: carrots " + "name: " + el
// })
// console.log(mapVegetables)

// function mapVegetables(arr) {
//     return arr.map(function(carrot) {
//         return { type: "carrot", name: carrot }
//     })
// }


// part 2

// const people = [
//     {
//         name: "Princess Peach",
//         friendly: false
//     },
//     {
//         name: "Luigi",
//         friendly: true
//     },
//     {
//         name: "Mario",
//         friendly: true
//     },
//     {
//         name: "Bowser",
//         friendly: false
//     }
// ]
// const filterForFriendly = people.filter((a, b) => {
//     return a.friendly === true
// } )
// console.log(filterForFriendly)

// function filterForFriendly(arr) {
//     return arr.filter(function(person) {
//         return person.friendly
//     })
// }

// task 3

//part one

// const add = (numOne, numTwo) => {return numOne + numTwo};

// console.log(3 + 4)

// const multiply = (numOne, numTwo) => {return numOne * numTwo};
// console.log(6 * 6)

//4
// function Player(){
//     this.firstName = Jane;
//     this.lastName = Doe;
//     this.age = 100
// }

// let firstName = `Jane`
// let lastName = `Doe`
// let age = `100`

// function name (){
//     // return (`Hi ${firstName} ${lastName}, how does it feel to be ${age}`)
// }

// console.log(`Hi ${firstName} ${lastName}, how does it feel to be ${age}`)



//5

const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
 ];
 
 function filterForDogs(arr) {
     return arr.filter(animal => {
         if (animal.type === "dog") {
             return true
         } else {
             return false
         }
     })
 }
 
 const goodDogs = animals.filter((a, b) => {return a.type === 'dog'})

 console.log(goodDogs)