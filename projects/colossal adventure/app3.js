const ask = require('readline-sync')
const rand = function(){
    return Math.floor(Math.random() < .5)
}

console.log(`\nWould you like to play a game, 
JK. Welcome to the Thunderdome. 
In the wise words of Fred Rodger's stay strapped or get clapped!\n`)


let username = ask.question(`\nWhats your name fam:\n`)


function Player(name) {
    this.name = name;
    this.hp = 700;
    this.inventory = ['Jabberwocks Bane, the vorpal sword of legend',];
    this.isAlive = true;
    this.hasWon = false;
    this.numHealthPotion = 3;
    this.healthPotionHealAmount = 30;
    this.healthPotionDropChance = function(){
        return Math.floor(Math.random() < .5)
    }
    this.attack = function () {
        return Math.floor(Math.random() * 40) + 5
    }
}
let currentEnemy;
let player = new Player(username)

function Enemy(name, hp, num) {
    this.name = name;
    this.hp = hp;
    this.attack = function () {
        return Math.floor(Math.random() * num) + 1
    }
}

const desi = new Enemy("Desi the Destroyer", 200, 34)
const kurt = new Enemy("Kurt Russell", 200, 64)
const fe = new Enemy("Fe", 300, 37)
const freezer = new Enemy("freezer", 300, 27)

const enemies = [desi, kurt, fe, freezer]

while (!player.hasWon && player.isAlive) {
    gameStart();
}

function gameStart() {
    let playerAction = ask.keyIn('\nTo use your legs press [w], to see your inventory press [p], to give up press [g], to drink a health potion [d]\n', { limit: 'wpgd' })
    action(playerAction)

    function action(action) {
        if (action === 'w') {
            walk()
        } else if (action === 'p') {
            printInventory()
        } else if (action === 'd') {
            drink()
        } else if (action === 'g') {
            player.isAlive = false;
            return
        } else if (action === 'f') {
            fight(currentEnemy)
        } 

    }
    function walk() {
        console.log('\nyou are taking steps to greatness!')
    }

    function printInventory() {
        console.log(`\nYour chosen name is ${player.name}:  These are the things you have ${player.inventory}:, Your current health is ${player.hp}, you currently have this many health potions: ${player.numHealthPotion}\n`)
    }


    function fight(enemy) {
        console.log(`you are now fighting ${currentEnemy.name}`)
        if (currentEnemy.hp <= 0) {
            console.log(`${currentEnemy.name} has died, doing what they loved.`);
            let index = enemies.indexOf(currentEnemy);
            enemies.splice(index, 1);
        } else if (player.hp <= 0) {
            console.log(`\nOh no ${player.name} evil triumph's, you have let down the birds and the things that are not birds.\n`)
            action('g');
            return
        } 

        else {
            let random = Math.floor(Math.random() * 5) + 1
            if (random === 1) {
                console.log('you tots missed, #get better')
            } else {
                enemy.hp -= player.attack()
                player.hp -= enemy.attack()
                // console.log(`You hit ${currentEnemy.name} hit ${player.name}. ${currentEnemy.name} now has ${currentEnemy.hp} health remaining.`)
                console.log(`${currentEnemy.name} hit ${player.name}. \n${player.name}'s hp is now ${player.hp} \n ${currentEnemy.name}'s hp is now ${currentEnemy.hp}`)
            }
            let playerChoice = ask.keyIn('\nwould you like to fight press [f], or would you like to run away [r], or, OR would you like to take a drink [d]\n')
            action(playerChoice)
            // if (enemy.hp <= 0) {
            //     enemy.isAlive = false
            //     let index = enemies.indexOf(enemy)
            //     enemies.splice(index, 1)
            // } else if (player.hp <= 0) {
            //     player.isAlive = false
            //     console.log("you have died, may your family mourn you.")
            //     return


            // }
             if (enemies.length === 0)
                console.log('You are the best you have big muscles and a cool haircut\n')
            return
        }
    }

    function run(enemy) {
        let random = Math.floor(Math.random() < .5)
        if (random === 1) {
            console.log('\nyou did it you got away\n')
        } else if (random === 0) {
            console.log('\nrunning failed, ready yourself little duckling\n')
            fight(currentEnemy)
        }
    }

    function enemyEncounter() {
        let enemy = enemies[Math.floor(Math.random() * enemies.length), 0]
        
        console.log(enemy, enemy.name + ' line 124') 
        currentEnemy = enemy
        let action = ask.keyIn(`\nOh snap, you TOTS encountered ${currentEnemy.name}, there is no shame in running true-lie [r], or do you want to be remembered and fight[f]\n`, { limit: 'rf' })
        if (action === 'r') {
            run()
        } else {
            while (currentEnemy.hp > 0 && player.hp > 0) {
                fight(currentEnemy)
            }
        }
    }

    function walk() {
        let random = Math.floor(Math.random() * 4) + 1
        if (random < 4) {
            console.log('you have taken steps towards greatness')
        } else {
            enemyEncounter()
        }
    }
    
}

