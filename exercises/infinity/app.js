const avengers = ['Iron Man', 'Captain America', 'Thor'
, 'Hulk', 'Black Widow', 'Hawkeye', 'Black Panther', 
'Spider Man','Dr. Strange', 'Ant Man','War Machine', 
'Falcon', 'Vision', 'Scarlet Witch', 'Star Lord', 
'Gamora', 'Drax the Destroyer', 'Rocket', 'Groot', 
'Mantis', 'Nebula', 'Wong']

function infinityStoneGauntlet(arr){
  let loopIterations = arr.length / 2
  const survivingAvengers = []
    // avenger eliminator loop
  for(let i = 0; i < loopIterations; i++){
      let randomNum = Math.floor(Math.random) * arr.length
      arr.slice(randomNum, 1)
  }
  return arr
  
}

console.log()