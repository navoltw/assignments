// -----------------------
//      Initial Setup
// -----------------------

//Create directory for your app
// DON'T USE THE NAME OF YOUR PACKAGE
//cd into the new app's directory
//add an app.js file

//Create a package.json file
//    npm init -y

//create file: .gitignore
// touch .gitignore
// add: node_modules/

// npm install readline-sync
// npm i readline-sync

// -----------------------
//      your app
// -----------------------

const readlineSync = require('readline-sync')

// console.log(readlineSync)
//Note readlineSync is an object of methods

// let answer = readlineSync.keyInYN('Do you like tacos with nuetella')
// //y: returns true ---- n: returns false

// let crazy;

// if(answer){
//     crazy = readlineSync.keyInYN('Are you cray cray?')
// } else {
//     console.log('bye')
// }

// if(crazy){
//     console.log('Me too')
// }

const states = ['California', 'Oregon', 'Hawaii', 'Florida']

let gameOver = false

while(!gameOver){
    let index = readlineSync.keyInSelect(states, 'Which state should we sell to Canada?')
    if(states[index] !== 'Florida'){
        console.log('Wrong answer, guess again.')
        console.log(`Sorry yo, I don't think it would be a good idea to sell ${states[index]}`)
    } else {
        gameOver = true
        console.log('Good Idea! Good Bye')
    }
}
