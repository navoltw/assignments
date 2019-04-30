let name = "John"
let age = 101
let pets = ["cat", "dog"]
let petObjects = []

function runForLoop() {
    for (var i = 0; i < pets.length; i++) {
        let pet = { type: pets[i] }
        if (pets[i] === "cat") {
            return name = "fluffy"
        } else {
            return name = "spot"
        }
        pet.name = name
        petObjects.push(pet)
    }
    return name
}

runForLoop()