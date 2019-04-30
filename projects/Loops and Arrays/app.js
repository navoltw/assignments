// let officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]

// for (let i = 0; i < computers.length; i++)
//     console.log(officeItems)
    

    let myArrays = []

let grid = [[0, 1, 2], 
[0, 1, 2], 
[0, 1, 2]]

for(let i = 0; i < grid.length; i++){
    myArrays.push([])
    for(n = 0; n < grid.length; n++)
    myArrays[i].push("x")
}
console.log(myArrays)