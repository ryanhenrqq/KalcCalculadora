import { useState } from 'react'
import { NumberPad } from "./assets/mainScr.jsx"
import './App.css'

function App() {
  return (
    <>
      <div className="header">
        <h1 className="title">Kalc</h1>
      </div>
      <NumberPad />
    </>
  )
}

export default App
