const url = "http://localhost:8080/monkeys"
const query = {
    color: "black",
    species: "howler"
}


//1
function stringify(url, query) {

    const results = `${url}/search?color=${query.color}&species=${query.species}`
    return(
        results
    )
 }


console.log(stringify(url, query))


// url +  `${query.color}` + '&' + `${query.species}`


const extractParams = url => {

}

url = ''
