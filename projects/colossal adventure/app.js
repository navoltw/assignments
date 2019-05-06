const ask = require('readline-sync')



console.log(`Would you like to play a game, 
JK. Welcome to the Thunderdome. 
In the words of Fred Rodger stay strapped or get clapped  `)

console.log("\n-----------------------------------------------------------------------")
let username = ask.question (`So who might you be, do not be shy, you are here to make a difference:  `)


function Player (name){
    this.name = name;
    this.hp = 600;
    this.inventory = ['Jabberwocks Bane, the vorpal sword of legend', ];
    this.isAlive = true;
    this.hasWon = false;
    this.numHealthPotion = 3;
    this.healthPotionHealAmount = 30;
    this.healthPotionDropChance = function(){
        return Math.floor(Math.random() < .5)
    }
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

//restore to here
//game
while(!player.hasWon && player.isAlive){
console.log("----------------------------------------------------------------------------")

    let action = ask.keyIn('\tTo use your legs press [w], to see your inventory press [p], to give up press [g], to drink a health potion [d]', {limit: 'wpgd'} )
    if (action === 'w'){
        walk()
    }else if(action === 'p'){
        printInventory()
    }else if(action === 'd'){
        drink()
    }else if (action === 'g'){
        player.askAlive = false
    }


    let enemy = enemies[Math.floor(Math.random() *enemies.length)];
        console.log(`\t# ${enemy} has appeared! \n`);
    while  (enemyHealth > 0){
        

        if (health < 1){
            console.log("\t> The damage you have taken is to sever, you cannot continue. ");
                break;
        }else if (action === 'd'){
            if (player.numHealthPotions > 0 ) {
                player.health += player.HealthPotionHealAmount;
                player.numHealthPotions--;
                console.log(`\t> You take a hearty swig of your health potion for ${HealthPotionHealAmount}.
                             \n\t> You now have ${player.health} HP.
                             \n\t> you have ${player.numHealthPotions} health potions left. \n`);
        }else{
            console.log("\t> you have no health potions left! Make a difference un-alive the villain's for a chance for health potions")
            }
    }

}
}
// while (!player.hasLost && player.isDead){
//     let action =
// }

function walk (){
    let random = Math.floor(Math.random()*4)+1
    if(random < 4){
        console.log('\tyou have taken steps towards greatness')
    }else {
        enemyEncounter()
    }
}

// function drink(){
//     let drink = ask.keyIn('you look like you need a pick me up press [d]')
//         if(player.numHealthPotions > 0 ) {
//             player.health += player.HealthPotionHealAmount;
//             player.numHealthPotions--;
//             console.log(`\t> You take a hearty swig of your health potion for ${HealthPotionHealAmount}.
//                          \n\t> You now have ${player.health} HP.
//                          \n\t> you have ${player.numHealthPotions} health potions left. \n`);
    
//         }else{
//         console.log("\t> you have no health potions left! Make a difference un-alive the villain's for a chance for health potions")
//         }
// }
system.out.printIn("----------------------------------------------------------------------------------------------------")

function printInventory(){
    console.log(`Your chosen name is ${player.name}:  These are the things you have ${player.inventory}:, Your current health is ${player.hp}, You have this many health potions left ${player.numHealthPotion}`)
}

function enemyEncounter(){
    let enemy = enemies[Math.floor(Math.random() *enemies.length)]
    let action = ask.keyIn(`\nOh snap, you tots encountered ${enemy.name}, there is no shame in running true-lie [r], or do you want to be remembered and fight[f]`, {limit:'rf'})
    if (action === 'r'){
        run()
    }else{
        while(enemy.hp >0 && player.hp > 0){
            fight(enemy)
        }
    }
}
function run(){
    let random = Math.floor(Math.random() < .5)
    if(random === 1){
        console.log('\t\nyou did it, you got away')
    }else if(random === 0){
        console.log('\t\nrunning failed, dying tired would suck')
        enemyEncounter()
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


// if (input.equals ("f")){
//     let damageDealt = rand.nextInt(attackDamage);
//     let damageTaken = rand.nextInt(enemyAttackDamage);

//     enemyHealth -= damageDealt;
//     health -= damageTaken;

//     console.log(`${enemy.name} hit ${player.name}. \n${player.name}'s hp is now ${player.hp} \n ${enemy.name}'s hp is now ${enemy.hp}`)
    
//     if (health < 1){
//         console.log("\t> The damage you have taken is to sever, you cannot continue. ");
//         break;
//     }else if (input.equals("d")){
//         if (numHealthPotions > 0) {
//             health += HealthPotionHealAmount;
//             numHealthPotions--;
//             console.log("\t> You have take a hearty swig of your health potion for " + HealthPotionHealAmount + ". "
//                         + "\n\t> You now have " + health + "HP."
//                         + "\n\t> you have " + numHealthPotions + " health potions left. \n");
//         }else{
//             console.log("\t> you have no health potions left! Make a difference un-alive the villain's for a chance for health potions")
//         }
//     }else if (input.equal("r")){
//         console.log("\t you have chosen to flee from " + enemy + "!");
//     }else {
//         console.log("\tInvalid command!")
//     }
// }





// if (health < 1){
//     console.log("You barely survive the battles");
//     break;
// }
// console.log("-----------------------------------------");
// console.log(" # " + enemy + "was demolished! # ");
// console.log(" # you have " + health + "HP left. #");
// if (rand.nextInt(100) < healthPotionChance){
//     numHealthPotions++;
//     console.log("# the " + enemy + "dropped a health potion! # ");
// }
// console.log("------------------------------------------");
// console.log("What would you like to do now");
// console.log("#!. continue fighting");
// console.log("2. leave the battle field");;

// let input = ask.nextLine();
// while(!input.equals ("1") && !input.equals("2")){
//     console.log("invalid command!");
//     input = ask.nextLine();
// }if (input.equal("1")){
//     console.log("You continue trying to make a difference");
// }else if (input.equals("2")){
//     console.log("you have completed the journey, you are now a legend");
//     break;
// }
// }
// console.log("Thank you!")

// }


// function fight(player){
//     if 
// }


// In walks Desi, the destroyer you see her emerge. she crushes a tin can on her head screams woo! there are times where you do not know if you are in danger, this is not one of those times.
// he surprises you! What you don't realize is, he is in fact one of the most dangerous men this side of the Mississippi in his hands he holds doom, you should flee.
//Hush and behold, peasant. In walks Fe she is staggering, your legs buckle. a dark smile crosses her face. you stand face to face with the leader of the Gun-ho Guns, death is certain!
