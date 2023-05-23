import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className='header'>
        <Header />
      </header>

      <div className='body'>
        <Currency />
        <Currency />
      </div>


    </>
  )
}

// header
function Header() {
  return (
    <>
      <div>Currency</div>
      <div>converter</div>
    </>


  )
}
// inputs & text areas

function Currency() {
  return (
    <div>
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
