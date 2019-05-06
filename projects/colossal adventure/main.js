const ask = require('readline-sync')


//game variables
const enemies = ["Kurt Russell, Desi The Destroyer, Fe, Tormond"];
this.maxEnemyHealth = 100;
this.enemyAttackDamage = 25;


// player variables
this.health = 100;
this.attackDamage = 50;
this.numHealthPotions = 3;
this.HealthPotionHealAmount = 30;
this.healthPotionChance = 50;


console.log(`Would you like to play a game, 
JK. Welcome to the Thunderdome. 
In the words of Fred Rodger stay strapped or get clapped  `)

game:

while(running){
    console.log("-------------------------------------------------------------");

    this.enemyHealth = ask.nextInt(maxEnemyHealth);
    let enemy = enemies[Math.floor(Math.random() *enemies.length)];
    console.log("\t# " + enemy + "has appeared! #\n");
    
    while (enemyHealth > 0){
        console.log("\tYour HP:" + health)
        console.log("\t" + enemy +"'s HP:" + enemyHealth);
        console.log("\n\tHow would you like to proceed")
        console.log("\t1. attack")
        console.log("\t2. Drink health potion")
        console.log("\t3. run!")     
        System.out.printin
        let input = ask.nextline();
        
        
        if (input.equals ("1")){
            let damageDealt = rand.nextInt(attackDamage);
            let damageTaken = rand.nextInt(enemyAttackDamage);

            enemyHealth -= damageDealt;
            health -= damageTaken;

            console.log(`${enemy.name} hit ${player.name}. \n${player.name}'s hp is now ${player.hp} \n ${enemy.name}'s hp is now ${enemy.hp}`)
            
            if (health < 1){
                console.log("\t> The damage you have taken is to sever, you cannot continue. ");
                break;
            }else if (input.equals("2")){
                if (numHealthPotions > 0) {
                    health += HealthPotionHealAmount;
                    numHealthPotions--;
                    console.log("\t> You have take a hearty swig of your health potion for " + HealthPotionHealAmount + ". "
                                + "\n\t> You now have " + health + "HP."
                                + "\n\t> you have " + numHealthPotions + " health potions left. \n");
                }else{
                    console.log("\t> you have no health potions left! Make a difference un-alive the villain's for a chance for health potions")
                }
            }else if (input.equal("3")){
                console.log("\t you have chosen to flee from " + enemy + "!");
            }else {
                console.log("\tInvalid command!")
            }
        }
        if (health < 1){
            console.log("You barely survive the battles");
            break;
        }
        console.log("-----------------------------------------");
        console.log(" # " + enemy + "was demolished! # ");
        console.log(" # you have " + health + "HP left. #");
        if (rand.nextInt(100) < healthPotionChance){
            numHealthPotions++;
            console.log("# the " + enemy + "dropped a health potion! # ");
        }
        console.log("------------------------------------------");
        console.log("What would you like to do now");
        console.log("#!. continue fighting");
        console.log("2. leave the battle field");;

        let input = ask.nextLine();
        while(!input.equals ("1") && !input.equals("2")){
            console.log("invalid command!");
            input = ask.nextLine();
        }if (input.equal("1")){
            console.log("You continue trying to make a difference");
        }else if (input.equals("2")){
            console.log("you have completed the journey, you are now a legend");
            break;
        }
    }
    console.log("Thank you!")

}
