let fruit = ["banana", "apple", "orange", "watermelon"];
let vegetables = ["carrot", "tomato", "pepper", "lettuce"];

1 & 2
let newFruit = fruit.shift()
let newVegetables= vegetables.pop()
console.log(fruit)
console.log(vegetables)

// 3


const arr1 = fruit.indexOf("orange",0)
console.log(arr1)


4


fruit.push(1)
const arr2 = fruit.join(',')
console.log(arr2)


5

var arr3 = vegetables.length;
console.log(arr3)

6

vegetables.push(4)
const arr4 = vegetables.join(',')
console.log(arr4)

7

let food = fruit.concat(vegetables)
console.log(food)


//8

let arr5 = food.splice(4, 2)
console.log(arr5)
