let form = document.addTodo
let todoList = []

axios.get('https://api.vschool.io/wayne/todo').then((response) => {
    displayTodos(response.data)
})

function displayTodos(todos){
    todos.forEach((todo) => {
        
        let parentDiv = document.createElement('div')
        let titleH2 = document.createElement('p')
        if(todo.completed === true){
            titleH2.innerText = todo.title
            titleH2.setAttribute('style', 'text-decoration:line-through')
        } else{
            titleH2.innerText = todo.title 
        }
        parentDiv.appendChild(titleH2)
        document.getElementById('main').appendChild(parentDiv)
        console.log(todo)
       
    })
}


form.addEventListener('submit', function(event){
    event.preventDefault()

    let title = form.title.value
    let description = form.description.value

    let newObject = {
        title,
        description
    }
    postTodo(newObject)
})

const postTodo =(newTodo) => {
    axios.post('https://api.vschool.io/wayne/todo', newTodo).then((response) =>{
    todoList.push(response.data)
    displayTodos(todoList)
    })
}

//2



// localStorage.setItem('isAuth', true)
// const isAuth = localStorage.getItem('isAuth')
// console.log(isAuth)


// localStorage.isAuth = true
// const todoList = localStorage.getItem('todoList')
// const todoListArr = todoList.split(',')
// console.log(todoListArr)




