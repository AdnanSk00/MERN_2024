import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';

function App() {
  const [value, setValue] = useState(0);

  return (
    <div className='App'>
      <Navbar logoText="CodeWithAddy"/>
      <div className="value">{value}</div>
      <button onClick={()=>{setValue(value + 1)}}>Click me</button>
      <button onClick={()=>{setValue(0)}}>Reset</button>
      <Footer />
    </div>
  );
}

export default App;


{/* <div className="App">
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      Edit <code>src/App.js</code> and save to reload.
    </p>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
  </header>
</div> */}