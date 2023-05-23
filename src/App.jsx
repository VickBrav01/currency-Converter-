import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ background: "##fce9f4" }}>
      <header className='header'>
        <Header />
      </header>

      <div className='body'>
        <div style={{ color: "#841522" }}><h1>Convert</h1> </div>
        <Currency />
        <Currency />
      </div>


    </div>
  )
}

// header
function Header() {
  return (
    <>
      <div><h1>Currency</h1> </div>
      <div><h1>converter</h1></div>
    </>


  )
}
// inputs & text areas

function Currency() {
  return (
    <div className='dataInput'>
      <input type="number" />
      <input list="currencies" />
      <datalist id='currencies'>
        <option value="">IDR</option>
        <option value="">EUR</option>
        <option value="">CAD</option>
        <option value="">USD</option>
        <option value="">AUD</option>
      </datalist>

    </div>
  )

}

export default App
