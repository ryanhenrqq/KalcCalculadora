import { useState } from 'react'
import { FuncsView, NumberPad } from "./assets/mainScr.jsx"
import './App.css'

function App() {
  const [viewKey, setViewKey] = useState("main")
  const handleViewChange = () => {
    if (viewKey === "main"){
      setViewKey("forms")
    } else {
      setViewKey("main")
    }
  }
  return (
    <>
    <div className="pg-content">
      <div className="header">
        <img src="./src/res/calculator.png" alt="Calculator" />
        <h1 className="title">Kalc</h1>
      </div>
      <div className='main-content'>
        {viewKey == "main" ? <NumberPad view={handleViewChange} /> : <FuncsView view={handleViewChange} />}
      </div>
    </div>
    </>
  )
}

export default App
