import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const [showBtn, setShowBtn] = useState(false)
  const [todos, setTodos] = useState([
    {
      title: 'Hey',
      desc: 'I am a good todo'
    },
    {
      title: 'Hey another todo',
      desc: 'I am a good todo too'
    },
    {
      title: 'Hey I am grocery todo',
      desc: 'I am a good todo but also grocery todo'
    }
  ])

  // const Todo = ({todo}) => {
  //   return (<>      {/* component */}
  //   <div className="m-4 border border-2 border-purple-400">
  //     <div className="todo">{todo.title}</div>
  //     <div className="todo">{todo.desc}</div>
  //   </div>

  //   </>)
  // }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      {showBtn ? <button>showBtn is true</button> : <button>showBtn is false</button>}
      {/* {showBtn && <button>showBtn is true</button>} */}

      {todos.map(item=>{
        // return <Todo key={item.title} todo={item}/>
        return ( 
            <div key={item.title} className="m-4 border-2 border-purple-400">
              <div className="todo">{item.title}</div>
              <div className="todo">{item.desc}</div>
          </div>
        )
      })}
      <div className="card">
        <button onClick={() => setShowBtn(!showBtn)}>
          Toggle showBtn
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
