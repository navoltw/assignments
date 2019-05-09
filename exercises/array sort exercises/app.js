//const num = [1, 3, 5, 2, 90, 20]

//1
// const sorted = num.sort(function(a,b){return a - b})
// console.log(sorted)

//2
// const sortedOne = num.sort(function(a, b){return b - a})
// console.log(sortedOne)



//3
// const str = ["dog", "wolf", "by", "family", "eaten"]

// const shortLong = str.sort((a, b) => a.length - b.length);
// console.log(shortLong)

//4
// const abc = str.sort()
// console.log(abc)


//5  
 const arr = [
      {
          name: "Quiet Samurai",
          age: 22
      },
      {
          name: "Arrogant Ambassador",
          age: 100
      },
      {
          name: "Misunderstood Observer",
          age: 2
      },
      {
          name: "Unlucky Swami",
          age: 77
      }
  ]

  const byAge = arr.sort(function (a, b){return a.age - b.age })
  console.log(byAge)

  