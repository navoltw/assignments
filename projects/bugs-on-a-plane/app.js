console.log('this is linked')
let form = document.airlineForm;
console.log('form: ', form)
// let submit = document.getElementById(submit);
// let query = document.querySelector;
form.addEventListener('submit', function(e){
    // // function formAlert(e) {
        e.preventDefault()
    //     // console.log("submit")
    //     let firstName = form.firstName.value;
    //     // console.log('firstName: ', firstName)
    //     let lastName = form.lastName.value;
    //     console.log('lastName: ', lastName)
    //     let age = form.age.value;
    //     let gender = form.gender.value;
    //     let location = form.travelLocation.value;
    //     let diet = document.getElementsByClassName("diet")
    //     let diets = '';
    //     // let diet = form.diet.value;
    //     console.log('diet: ', diet)
    //     for(let i = 0; i < diet.length; i++){
    //         if (diet[i].checked) {
    //             diets+= + 
    //         }
    //     }


    var firstName = form.elements["firstName"].value;
    var lastName = form.elements["lastName"].value;
    var age = form.elements["age"].value;
    var gender = form.elements["gender"].value;
    var location = form.elements["travel-location"].value;
    var diet = [];
    if (form.elements['vegan'].checked) {
        diet.push(document.getElementById("vegan").value);
    }
    if (form.elements['gluten'].checked) {
        diet.push(document.getElementById('gluten').value);
    }
    if (form.elements['paleo'].checked) {
        diet.push(document.getElementById('paleo').value);
    }

        alert(`first name: ${firstName} 
last name: ${lastName} 
age: ${age} 
gender: ${gender} 
diet: ${diet} 
Awesome, now if you die, it won't be an accident..`);
})
// submit.addEventListener("click",(alert));