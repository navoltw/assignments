const ask = require('readline-sync')

console.log(`Would you like to play a game, 
JK. Welcome to the Thunderdome. 
In the words of Fred Rodger stay strapped or get clapped  `)


let username = ask.question (`So who might you be, do not be shy, you are here to make a difference:  `)


function Player (name){
    this.name = name;
    this.hp = 600;
    this.inventory = ['Jabberwocks Bane, the vorpal sword of legend', ];
    this.isAlive = true;
    this.hasWon = false;
    this.attack = function(){
        return Math.floor(Math.random() * 40) + 5
    }
}

let player = new Player(username)

function Enemy (name, hp, num){
    this.name = name;
    this.hp = hp;
    this.attack = function(){
        return Math.floor(Math.random() * num) + 1
    }
}

const desi = new Enemy("Desi the Destroyer", 600, 34)
const kurt = new Enemy("Kurt Russell", 300, 64)
const fe = new Enemy( "Fe", 400, 37)

const enemies = [desi, kurt, fe]


//game
while(!player.hasWon && player.isAlive){
    let action = ask.keyIn('To use your legs press [w], to see your inventory press [p], to give up press [g]', {limit: 'wpg'} )
    if (action === 'w'){
        walk()
    }else if(action === 'p'){
        printInventory()
    }else if (action === 'g'){
        player.isAlive = false
    }
}
// while (!player.hasLost && player.isDead){
//     let action =
// }

function walk (){
    let random = Math.floor(Math.random()*4)+1
    if(random < 4){
        console.log('you have taken steps towards greatness')
    }else {
        enemyEncounter()
    }
}


function printInventory(){
    console.log(`Your chosen name is ${player.name}:  These are the things you have ${player.inventory}:, Your current health is ${player.hp}`)
}

function enemyEncounter(){
    let enemy = enemies[Math.floor(Math.random() * enemies.length)]
    let action = ask.keyIn(`Oh snap, you tots encountered ${enemy.name}, there is no shame in running true-lie [r], or do you want to be remembered and fight[f]`, {limit:'rf'})
    if (action === 'r'){
        run()
    }else{
        while(enemy.hp >0 && player.hp > 0){
            fight(enemy)
        }
    }
}
function run(enemy){
    let random = Math.floor(Math.random() < .5)
    if(random === 1){
        console.log('you did it you got away')
    }else if(random === 0){
        console.log('running failed, dying tired would suck')
        fight(enemy)
    }
}

function fight(enemy){
    let random = Math.floor(Math.random() * 5) + 1
    if(random === 1){
        console.log('you tots missed, #get better')
    }else {
        enemy.hp -= player.attack()
        player.hp -= enemy.attack()
        console.log(`${enemy.name} hit ${player.name}. \n${player.name}'s hp is now ${player.hp} \n ${enemy.name}'s hp is now ${enemy.hp}`)
    }
}
// function fight(player){
//     if 
// }