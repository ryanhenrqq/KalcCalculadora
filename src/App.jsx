import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="header">
        <h1 className="title">Kalc</h1>
      </div>
      <div className="contents">
        <div className="number-display">0</div>
        <div className='row-1'>
          <div className='number-7 button-outside'>
            <button>7</button>
          </div>
          <div className='number-8 button-outside'>
            <button>8</button>
          </div>
          <div className='number-9 button-outside'>
            <button>9</button>
          </div>
        </div>
        <div className='row-2'>
          <div className='number-4 button-outside'>
            <button>4</button>
          </div>
          <div className='number-5 button-outside'>
            <button>5</button>
          </div>
          <div className='number-6 button-outside'>
            <button>6</button>
          </div>
        </div>
        <div className='row-3'>
          <div className='number-1 button-outside'>
            <button>1</button>
          </div>
          <div className='number-2 button-outside'>
            <button>2</button>
          </div>
          <div className='number-3 button-outside'>
            <button>3</button>
          </div>
        </div>
        <div className='row-4'>
          <div className='number-0 button-outside'>
            <button>0</button>
          </div>
          <div className='symbol-dot button-outside'>
            <button>.</button>
          </div>
          <div className='symbol-equals button-outside'>
            <button>=</button>
          </div>
        </div>
        <div className='row-5'>
          <button>Formulas</button>
        </div>
      </div>
    </>
  )
}

export default App
