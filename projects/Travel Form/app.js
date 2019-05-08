let form = document.travelForm;

form.addEventListener('submit', function(e){
    e.preventDefault()
    var firstName = form.elements["firstName"].value;
    var lastName = form.elements["lastName"].value;
    var age = form.elements["age"].value;
    var gender = form.elements["gender"].value;
    var location = form.elements["travel-location"].value;
    var diet = [];
    if (form.elements['vegetarian'].checked) {
        diet.push(Document.getElementByName('vegetarian').value);
    }if (form.elements['kosher'].checked) {
        diet.push(Document.getElementById('kosher').value);
    }if (form.elements['lactose'].checked) {
        diet.push(Document.getElementById('lactose').value);
    }
    alert(`first name: ${firstName}
    last name: ${lastName}
    age: ${age}
    gender: ${gender}
    location: ${travel-location}
    diet: ${diet}`);
})


