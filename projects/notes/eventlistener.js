document.getElementById('clickMe').addEventListener('click', function(){
    alert(' I was clicked')
})

document.getElementById(changeMe).addEventListener('click', function (){
    this.innerText = ' I was changed'
})

document.getElementById('blue').addEventListener('mouseover', function(){
    this.style.backgroundColor = "blue"
})

document.getElementById('red').addEventListener('click', function (){
    document.getElementById('blue').style.backgroundColor = "red"
})

window.addEventListener('scroll', function(){
    document.getElementById('scrollMe')
})
