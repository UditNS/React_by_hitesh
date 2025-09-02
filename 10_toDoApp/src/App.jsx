import { useState, useId, useEffect } from 'react'
import { ToDoProvider } from './context'
import { ToDoForm, ToDoItem } from './components'

function App() {
  // todo in useState and todo in ToDoProvider is same
  const [todos, setTodo] = useState([])
  // name must be same as that we have defined in ToDoContext.js
  // the todo in addTodo came from the Todo form
  const addTodo = (todo) => {
    // if i do setTodo(todo) like this all previous value of todo is deleted then I need to call a callback 
    setTodo((prev) => [{id: Date.now(), ...todo}, ...prev])
  }
  const updateTodo  = (id, todo) => {
    setTodo((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  } 
  
  const deleteTodo = (id) => {
    setTodo((prev) => prev.filter((todo) => todo.id !== id)) // jo jo match nahi karga vo aata jaye ga //works on true value
  }

  const toggleComplete = (id) => {
    setTodo((prev) => prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo, completed : !prevTodo.completed} : prevTodo))
  }

  // It might happen when i open my todo app there are some previous todo exist which i need to fetch from local storage

  useEffect(() => {
    const storedTodo = JSON.parse(localStorage.getItem('todos'))

    if(storedTodo && storedTodo.length > 0){
      setTodo(storedTodo)
    }
  }, [])
// This useEffect is used to put some new todos into the local storage. We can't use previous useEffect because it will cal getItems everytime we add a new todo which cause repeatitive todos in the app
  useEffect(() => {
    // setItems and getItems key must nbe same
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return (
    <ToDoProvider value = {{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
            <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
            <div className="mb-4">
                <ToDoForm />
            </div>
            <div className="flex flex-wrap gap-y-3">
                {/*Loop and Add TodoItem here */}
                {todos.map((todo) => (
                  <div key={todo.id} className='w-full'>
                    <ToDoItem todo = {todo}/>
                  </div>
                ))}
            </div>
        </div>
      </div>
    </ToDoProvider>
  )
}

export default App
