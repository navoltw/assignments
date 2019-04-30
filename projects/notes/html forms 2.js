// let form = document.myForm

// example = 1

// form.addEventListener('submit', function(event){
//     event.preventDefault() //prevents refresh on forms
//     document.getElementById('results').innerText = 
//     form.name.value
//     document.getElementById('results').innerHTML=<h1>$
//         {form.name.value}</h1>
//     console.log(form.name.value)
// })

// example 2

let form = document.cars

form.addEventListener('submit', function(event){
    event.preventDefault()
    const cars = form.likes
    const likedCars = []
    console.log(cars)
    for(let i = 0; i < cars.length; i++)
        if (cars[i].checked){
            likedCars.push(cars[i])
        }
})