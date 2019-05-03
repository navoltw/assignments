
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
const carrots = ["bright orange", "ripe", "rotten"]

// const mapVegetables = carrots.map((a, b) => {
//     return { type: "carrot", name: carrot }
// })
// console.log(mapVegetables)

function mapVegetables(arr) {
    return arr.map(function(carrot) {
        return { type: "carrot", name: carrot }
    })
}
console.log(mapVegetables)






//3



//4