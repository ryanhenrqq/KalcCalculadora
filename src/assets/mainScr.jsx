import { useEffect, useRef, useState } from 'react'
import "./mainScr.css"

export function NumberPad() {
    const [display, setDisplay] = useState("0")
    const [colorDisplay, setColorDisplay] = useState("white")
    const [numberOne, setNumberOne] = useState(0)
    const [numberTwo, setNumberTwo] = useState(0)
    const [functioner, setFunctioner] = useState("?")
    const [finalResult, setFinalResult] = useState(0)
    // Re-check it later, not working
    let valOne = 0
    let valTwo = 0
    let finalValue = 0
    // ^

    const plusButton = useRef(null)

    // Re-check it later
    function calculateItTwo(n1, n2) {
        console.log("running calcittwo")
        return n1 + n2
    }
    

    useEffect(() => {
        if (numberOne !== 0 && numberTwo !== 0) {
            finalValue = Number(valOne + valTwo)
            setFinalResult(finalValue)
            setDisplay(finalValue)
        }
    }, [])
    // ^

    function handleSetter(index) {
        /* 
        Bugs to fix:
        1 - Delay to update numberOne and numberTwo states (sometimes didn't even change!)
        2- The finalResult setted inside calculateItTwo() fails too, probaly cause the first problem
        */
        if (index === 0) {
            changeColorToRed()
            valOne = parseInt(display)
            setNumberOne(valOne)
            setDisplay("0")
            console.log("index 1 running", display, numberOne, numberTwo) /* All the times the numberOne and numberTwo returns int 0 */
            return
        } else if (index === 1 && numberOne !== 0) {
            console.log("running index 2")
            undoColorToRed()
            valTwo = parseInt(display)
            setNumberTwo(valTwo)
            // finalValue = calculateItTwo(valOne, valTwo)
            setDisplay(finalValue)
            return
        } else {
            undoColorToRed()
            showInfoOnDisplay("Erro Interno")
        }
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
            setNumberOne(0)
            setNumberTwo(0)
            setFinalResult(0)
            setDisplay("0")
        }, 1000)
    }
    function eraseDisplay() {
        setTimeout(() => {
            setColorDisplay("white")
        }, 500)
        setColorDisplay("red")
        setDisplay("0")
    }
    return (
        <div className="contents">
            <div className="number-display">
                <b style={{ color: colorDisplay}}>{display}</b>
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
                <div className='symbol-equals button-outside' onClick={() => handleSetter(1)}>
                    <button>=</button>
                </div>
                <div className='number-times button-outside' onClick={() => handleSetter(0)}>
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

export function FormPad() {
    return (
        <div>    
        </div>
    )
}