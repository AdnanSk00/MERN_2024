import { useState, useMemo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Use of useMemo() - In between re render, to prevent the computation of value again and again. Only first time rerender then Memoized(pause/stop) for next re rener

const nums = new Array(30_000_00).fill(0).map((_, i)=>{
  return{
    index: i,
    isMagical: i===29_000_00       // Array - very big value in million
  }
})

function App() {
  const [count, setCount] = useState(0)
  const [numbers, setNumbers] = useState(nums)

  // const magical = numbers.find(item=>item.isMagical===true)   // Expensive Computation
  const magical = useMemo(() => numbers.find(item=>item.isMagical), [numbers])  // [numbers] - dependency array
  // above useMemo will recalculate when dependency array [numbers] will change

  return (

    <>
      <div>
        <span>Magical number is {magical.index}</span>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => {
          setCount((count) => count + 1);
          if(count == 10){
            setNumbers(new Array(10_000_00).fill(0).map((_, i)=>{
              return{
                index: i,
                isMagical: i===9_000_00       // Array - very big value in million
              }
            }))
          }
        }}>
          count is {count}
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
