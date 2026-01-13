import { useState } from 'react'
import { NumberPad } from "./assets/mainScr.jsx"
import './App.css'

function App() {
  return (
    <>
    <div className="pg-content">
      <div className="header">
        <img src="./src/res/calculator.png" alt="Calculator" />
        <h1 className="title">Kalc</h1>
      </div>
      <div className='main-content'>
        <NumberPad />
      </div>
    </div>
    </>
  )
}

export default App
