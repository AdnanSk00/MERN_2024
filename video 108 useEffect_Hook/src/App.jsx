import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'

function App() {
  // const [first, setFirst] = useState(0)
  const [count, setCount] = useState(0)
  const [color, setColor] = useState(0)

  // When component(App) mount(load) in browser then execute useEffect

  useEffect(() => {
    alert("Count was changed")
    setColor(color + 1)

    console.log("counting...");
  }, [count])  

  // useEffect(() => {
  //   alert("First was changed")
  // }, [first])

  return (
    <>
      <Navbar color={"navy " + "blue" + color}/>      {/* color={} - props */}

      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
