axios.get('https://api.vschool.io/pokemon').then((response)=> {
    const pokeArr = response.data.objects[0].pokemon
    pokeArr.forEach(poke => {
        document.getElementById('name').innerHTML += `<h1>${poke.name}</h1>`
    })
        
    })