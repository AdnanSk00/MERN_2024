import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])

  useEffect(() => {
    let todoString = localStorage.getItem("todos")
    if(todoString){
      let todos = JSON.parse(localStorage.getItem("todos"))
      setTodos(todos)
    }
  }, [])
  

  const saveToLocalStorage = (params) => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const handleAdd = () => {
    setTodos([...todos, {id: uuidv4(), todo, isCompleted: false}])
    setTodo("")
    console.log(todos);
    saveToLocalStorage();
  }

  const handleChange = (e) => {
    setTodo(e.target.value)

  }

  const handleCheckbox = (e) => {
    // console.log(e, e.target);
    let id = e.target.name;
    // console.log(`The id is ${id}`);
    let index = todos.findIndex(item => {
      return item.id === id;
    })
    // console.log(index);
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos)
    // console.log(newTodos);
    saveToLocalStorage();
  }

  const handleEdit = (e, id) => {
    let t = todos.filter(item=>item.id === id)
    setTodo(t[0].todo)
    handleDelete(e, id);
    saveToLocalStorage();
  }

  const handleDelete = (e, id) => {
    let newTodos = todos.filter(item => {
      return item.id !== id;
    });
    setTodos(newTodos)
    saveToLocalStorage();
  }

  return (
    <>
      <Navbar />
      <div className="container bg-violet-200 mx-auto my-5 rounded-xl p-5 min-h-[80vh]">

        <div className="addTodo my-5">
          <h2 className='text-lg font-bold'>Add a Todo</h2>
          <input onChange={handleChange} value={todo} type="text" className='bg-amber-50 w-1/2' />
          <button onClick={handleAdd} className='bg-emerald-800 text-white hover:bg-green-950 p-2 py-1 text-sm font-bold rounded-md mx-5'>Save</button>
        </div>

        <h2 className='text-lg font-bold'>Your Todos</h2>
        <div className="todos">
          {todos.length === 0 && <div className='m-5'>No Todos to display</div>}
          {todos.map(item=>{
            return (
              <div key={item.id} className="todo flex justify-between my-3 w-1/3">
                <div className='flex gap-5'>
                  <input name={item.id} onChange={handleCheckbox} type="checkbox" value={item.isCompleted} id="" />
                  <div className={item.isCompleted?"line-through":""}>{item.todo}</div>
                </div>
                <div className="buttons flex h-full">
                  <button onClick={(e)=>{handleEdit(e, item.id)}} className='bg-emerald-800 text-white hover:bg-green-950 p-2 py-1 text-sm font-bold rounded-md mx-1'>Edit</button>
                  <button onClick={(e)=>{handleDelete(e, item.id)}} className='bg-emerald-800 text-white hover:bg-green-950 p-2 py-1 text-sm font-bold rounded-md mx-1'>Delete</button>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </>
  )
}

export default App
