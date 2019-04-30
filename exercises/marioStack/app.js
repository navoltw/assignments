function marioStack(char){
    let spaceTracker = 5 //keeps track of how much whitespace to save
    for(let i = 0; i < 5; i++){
        let string = '' //begin each loop with an empty string
        for(let n = 0; n <= 5; n++){
            //use the nested loop to build each line for printing
            //logic below evaluates how much leading white space vs. characters to print in the string and concatenates to string
            n >= spaceTracker ? (string += char) : (string += ' ') 
        }
        //reduce char tracker for each iteration
        charTracker--
        //console.log the strings in order from top to bottom
        console.log(string)
    }
}

marioStack('#')