import { useEffect, useRef, useState } from 'react'
import "./mainScr.css"

export function NumberPad() {
    const [display, setDisplay] = useState("0")
    const [valOne, setValOne] = useState(null)

    const plusButton = useRef(null)

    function handlePlus() {
        setValOne(Number(display))
        changeColorToRed()
        setDisplay("0")
        console.log("index 1 running", display, valOne)
    }
    function handleEquals() {
        const result = valOne + Number(display) // logica que deu certo:
        setDisplay(result)                  // usar o valor 2 diretamente
        undoColorToRed()
    }

    function changeColorToRed(e) {
        plusButton.current.style.backgroundColor = "white"
        plusButton.current.style.color = "black"
    }
    function undoColorToRed() {
        plusButton.current.style.backgroundColor = "#10101080"
        plusButton.current.style.color = "white"
    }

    function changeDisplay(number) {
        if (display.length > 12) {
            showInfoOnDisplay("Numero Grande!")
        } else {
            display === "0" ? setDisplay(number) : setDisplay(bef => bef + number)
        }
        
    }
    function showInfoOnDisplay(message) {
        setDisplay(message)
        setTimeout(() => {
            setValOne(null)
            setDisplay("0")
        }, 1000)
    }
    function eraseDisplay() {
        setValOne(null)
        setDisplay("0")
    }
    return (
        <div className="contents">
            <div className="number-display">
                <input value={display} readOnly />
            </div>
            <div className='row-1'>
                <div className='number-7 button-outside' onClick={() => changeDisplay("7")}>
                    <button>7</button>
                </div>
                <div className='number-8 button-outside' onClick={() => changeDisplay("8")}>
                    <button>8</button>
                </div>
                <div className='number-9 button-outside' onClick={() => changeDisplay("9")}>
                    <button>9</button>
                </div>
                <div className='number-times button-outside' onClick={() => showInfoOnDisplay("Indisponivel")}>
                    <button>/</button>
                </div>
                </div>
                <div className='row-2'>
                <div className='number-4 button-outside' onClick={() => changeDisplay("4")}>
                    <button>4</button>
                </div>
                <div className='number-5 button-outside' onClick={() => changeDisplay("5")}>
                    <button>5</button>
                </div>
                <div className='number-6 button-outside' onClick={() => changeDisplay("6")}>
                    <button>6</button>
                </div>
                <div className='number-times button-outside' onClick={() => showInfoOnDisplay("Indisponivel")}>
                    <button>x</button>
                </div>
                </div>
                <div className='row-3'>
                <div className='number-1 button-outside' onClick={() => changeDisplay("1")}>
                    <button>1</button>
                </div>
                <div className='number-2 button-outside' onClick={() => changeDisplay("2")}>
                    <button>2</button>
                </div>
                <div className='number-3 button-outside' onClick={() => changeDisplay("3")}>
                    <button>3</button>
                </div>
                <div className='number-times button-outside' onClick={() => showInfoOnDisplay("Indisponivel")}>
                    <button>-</button>
                </div>
                </div>
                <div className='row-4'>
                <div className='number-0 button-outside' onClick={() => changeDisplay("0")}>
                    <button>0</button>
                </div>
                <div className='symbol-dot button-outside' onClick={() => changeDisplay(".")}>
                    <button>.</button>
                </div>
                <div className='symbol-equals button-outside' onClick={handleEquals}>
                    <button>=</button>
                </div>
                <div className='number-times button-outside' onClick={handlePlus}>
                    <button ref={plusButton}>+</button>
                </div>
                </div>
                <div className='row-5'>
                    <div className='number-del' onClick={eraseDisplay}>
                        <button>DEL</button>
                    </div>
                    <div className='number-del' onClick={() => showInfoOnDisplay("Indisponivel")}>
                        <button>Formulas</button>
                    </div>
                </div>
        </div>
    )
}