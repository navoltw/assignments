
//1
const matrix = [
    [1,2,3],
    [5,6,7,],
    [9,8,4]
]

//how would you select the number 7

answer === matrix [1][2]


//2
// using the matrix above write a nested loop that would print off each number individually

for(let i = 0; i < matrix.length; i++){
    for(let j = 0; j < matrix[i].length; j++){
        console.log(matrix[i][j])
    }
    
}


//3
//write a nested for loop that would change the matrix to look like this?

const matrix = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
]

for(let i = 0; i < matrix.length; i++){
    for(let j = 0; j < matrix[i].length; j++){
        matrix[i][j] = 0
        console.log(matrix[i][j])
    }
    
}
------------------------------------------------------------------------------------------------------
//4
// use the code below to answer the remaining questions

function person(name, isAlive, hairColor){
    this.name = name;
    this.isAlive = isAlive;
    this.hairColor = hairColor;
}
 //5
what type of function is this?

answer === constructor

//6
instantiate this function as if it were you

const me = newPerson('Wayne', true, 'blonde')


//7
// add a method to this function called speak that console logs the name of the created person

this.speak = function () {
    console.log(person.name)
    
}