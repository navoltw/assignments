// document.getElementById('click').addEventListener('mouseover', function(){
//     this.style.backgroundColor = "blue"  
// })
// document.getElementById('click').addEventListener('mouseleave', function(){
//     this.style.backgroundColor = "white"
// })
// document.getElementById('click').addEventListener('mousedown', function(){
//     this.style.backgroundColor = "red"
// })

// document.getElementById('click').addEventListener('mouseup', function(){
//     this.style.backgroundColor = "yellow"
// })

// document.getElementById('click').addEventListener('dblclick', function(){
//     this.style.backgroundColor = "green"
// })

// window.addEventListener('scroll', function(){
//     document.getElementById('click').style.backgroundColor = "orange"
// })

// document.getElementById('click').addEventListener("keydown", function(r){
//     if (r)
// })


var colorMap = {
    'b' : 'blue',
    'r' : 'red',
    'w' : 'white',
    'o' : 'orange',
    'g' : "green",
    'y' : 'yellow'
};

function changeProperty (target, event, propertyName) {
    if (!target || !event || !propertyName) {
        return false;
    }
    else {
        target = target.nodeType && target.nodeType === 1 ? target : document.getElementById(target);
        
        var letter = String.fromCharCode(event.which).toLowerCase(),
            oldPropertyValue = window.getComputedStyle(target,null)[propertyName];
        target.style[propertyName] = colorMap[letter] || oldPropertyValue;
    }
}

document.body.addEventListener('keyup', function(e){
    changeProperty(document.getElementById('click'), e, 'backgroundColor');
});
