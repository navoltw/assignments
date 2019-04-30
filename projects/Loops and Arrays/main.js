//                          1

// const officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]

// const result = officeItems.filter(i => i === "computer").length;
// console.log('computers = ' + result)

//                       2

var people = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ] 


function movie(people){
    for(var i = 0; i < people.length; i++){
        if(people[i].age < 18){
          console.log(people[i].name + " old enough to see Mad Max")
        } else {
          console.log(people[i].name + " not old enough to see Mad Max")
        }
}
}
movie(people)

