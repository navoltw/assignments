let form = document.addTodo
let todoList = []

axios.get('https://api.vschool.io/wayne/todo').then((response) => {
    todoList.push(...response.data)
    displayTodos(response.data)
})

function displayTodos(todos, updated){
    if(updated){
        document.getElementById('main').innerHTML = ''
    }

    todos.forEach((todo) => {
        
        let parentDiv = document.createElement('div')
        let titleH2 = document.createElement('h2')
        let descP = document.createElement('p')
        let imgUrl = document.createElement('img')
        let deleteBtn = document.createElement('button')
        let checkBox = document.createElement('input')

        parentDiv.setAttribute('class', 'todoBox')
        imgUrl.setAttribute('src', todo.imgUrl)
        checkBox.setAttribute('type', 'checkbox')

        titleH2.innerText = todo.title
        descP.innerText = todo.description
        deleteBtn.innerText = 'delete'

        deleteBtn.addEventListener('click', function(){
            parentDiv.style.display = 'none'
            axios.delete(`https://api.vschool.io/wayne/todo/${todo._id}`)
        })

        checkBox.addEventListener('click', function(){
            checkTodo(todo)
            axios.get('https://api.vschool.io/wayne/todo').then(res => {
                todoList = res.data
            })
        })
      
        if (todo.completed){
            checkBox.checked = true
            parentDiv.style.textDecoration = 'line-through'
        }else {
            parentDiv.style.textDecoration = 'none'
        }

        parentDiv.appendChild(titleH2)
        parentDiv.appendChild(descP)
        parentDiv.appendChild(imgUrl)
        parentDiv.appendChild(deleteBtn)
        parentDiv.appendChild(checkBox)

        document.getElementById('main').appendChild(parentDiv)
        
       
    })
}


const checkTodo = oldTodo => {
    axios.put(`https://api.vschool.io/wayne/todo/${oldTodo._id}`, {completed: !oldTodo.completed}).then(response => {
        const newList = todoList.map(todo => todo._id === oldTodo._id ? response.data : todo)
        displayTodos(newList, true)
    })
}

form.addEventListener('submit', function(event){
    event.preventDefault()

    let title = form.title.value
    let description = form.description.value
    let price = form.price.value
    let imgUrl = form.imgUrl.value

    let newObject = {
        title,
        description,
        price,
        imgUrl
    }
    postTodo(newObject)
})

const postTodo = (newTodo) => {
    axios.post('https://api.vschool.io/wayne/todo', newTodo).then((response) => {
    todoList.push(response.data)
    displayTodos([response.data])
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




