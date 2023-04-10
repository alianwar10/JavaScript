const learn = ['JavaScript', 'React', 'Next', 'Create Portfolio Websites', 'AI Engineering Courses']

// Convert array to array of objects -> text, completed
const todos = [{
    text: 'JavaScript',
    completed: true
}, {
    text: 'React',
    completed: false
}, {
    text: 'Next',
    completed: false
}, {
    text: 'Create Portfolio Websites',
    completed: false
}, {
    text: 'AI Engineering Courses',
    completed: false
}]

const sortTodos = function (todos) {
    todos.sort(function (a, b) {
        if (!a.completed && b.completed)   {
            return -1
        }
        else if (!b.completed && a.completed) {
            return 1
        } 
        else {
            return 0
        }
    })
}

// Create function to remove a todo by text value

const deleteTodo = function (todos, todoText) {
    const index = todos.findIndex(function (todo) {
        return todo.text.toLowerCase() === todoText.toLowerCase()
    })
    if (index > -1) {
        todos.splice(index, 1)
    }
}

deleteTodo(todos, 'next')
console.log(todos)

const getThingsToDo = function (todos) {
    return todos.filter(function(todo)  {
        return todo.completed === false
    })
}

console.log(getThingsToDo(todos))