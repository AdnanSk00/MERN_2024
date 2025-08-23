import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>The count is {count}</h2>
      <button onClick={() => {setCount(count + 1)}}>Update count</button>
      <button onClick={() => {setCount(count - 1)}}>Reduce count</button>
    </>
  )
}

export default App
