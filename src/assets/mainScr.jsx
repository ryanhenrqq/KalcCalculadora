import { useEffect, useRef, useState } from 'react'
import "./mainScr.css"

export function NumberPad({view}) {
    const [display, setDisplay] = useState("0")
    const [valOne, setValOne] = useState(null)
    const [symbolSet, setSymbolSet] = useState("")

    const plusButton = useRef(null)

    function handlePlus() {
        setValOne(Number(display))
        setSymbolSet("+")
        changeColorToRed()
        setDisplay("0")
        console.log("index 1 running", display, valOne)
    }
    function handleMinus() {
        setValOne(Number(display))
        setSymbolSet("-")
        changeColorToRed()
        setDisplay("0")
        console.log("index 1 running", display, valOne)
    }
    function handleTimes() {
        setValOne(Number(display))
        setSymbolSet("x")
        changeColorToRed()
        setDisplay("0")
        console.log("index 1 running", display, valOne)
    }
    function handleDivision() {
        setValOne(Number(display))
        setSymbolSet("/")
        changeColorToRed()
        setDisplay("0")
        console.log("index 1 running", display, valOne)
    }
    function handleEquals() {
        if (symbolSet == "+") {
            const result = valOne + Number(display) // logica que deu certo:
            setDisplay(result)                  // usar o valor 2 diretamente
            undoColorToRed()
        } else if (symbolSet == "-") {
            const result = valOne - Number(display)
            setDisplay(result)
            undoColorToRed()
        } else if (symbolSet == "x") {
            const result = valOne * Number(display)
            setDisplay(result)
            undoColorToRed()
        }
         else if (symbolSet == "/") {
            const result = valOne / Number(display)
            setDisplay(result)
            undoColorToRed()
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
            <div className="flex-hor">
                <div>
                    <div className='row-1'>
                        <NumPadButton label="7" classname="number-7" onclick={() => changeDisplay("7")} />
                        <NumPadButton label="8" classname="number-8" onclick={() => changeDisplay("8")} />
                        <NumPadButton label="9" classname="number-9" onclick={() => changeDisplay("9")} />
                        <div className='number-times button-outside' onClick={handleDivision}>
                            <button>/</button>
                        </div>
                    </div>
                    <div className='row-2'>
                        <NumPadButton label="4" classname="number-4" onclick={() => changeDisplay("4")} />
                        <NumPadButton label="5" classname="number-5" onclick={() => changeDisplay("5")} />
                        <NumPadButton label="6" classname="number-6" onclick={() => changeDisplay("6")} />
                        <div className='number-times button-outside' onClick={handleTimes}>
                            <button>x</button>
                        </div>
                    </div>
                    <div className='row-3'>
                        <NumPadButton label="1" classname="number-1" onclick={() => changeDisplay("1")} />
                        <NumPadButton label="2" classname="number-2" onclick={() => changeDisplay("2")} />
                        <NumPadButton label="3" classname="number-3" onclick={() => changeDisplay("3")} />
                        <div className='number-times button-outside' onClick={handleMinus}>
                            <button>-</button>
                        </div>
                    </div>
                    <div className='row-4'>
                        <NumPadButton label="0" classname="number-0" onclick={() => changeDisplay("0")} />
                        <NumPadButton label=".," classname="symbol-dot" onclick={() => changeDisplay(".")} />
                        <div className='symbol-equals button-outside' onClick={handleEquals}>
                            <button>=</button>
                        </div>
                        <div className='number-times button-outside' onClick={handlePlus}>
                            <button ref={plusButton}>+</button>
                        </div>
                    </div>
                </div>
                <div>
                    <ToolboxBar onDel={eraseDisplay} onFormulas={view} />
                </div>

            </div>

        </div>
    )
}

export function NumPadButton({label, classname, onclick}) {
    return (
        <div className={`${classname} button-outside`} onClick={onclick}>
            <button>{label}</button>
        </div>
    )
}

export function ToolboxBar({onDel, onFormulas}) {
    return (
        <>
            <div className='number-del' onClick={onDel}>
                <button>DEL</button>
            </div>
            <div className='number-del' onClick={onFormulas}>
                <button>Alterar Função</button>
            </div>
        </>
    )
}

export function FormsToolboxBar({onDel, onToFah, onToCel, onFormulas, functionLabel}) {
    return (
        <>
            <div className='number-del' onClick={onDel}>
                <button>{functionLabel}</button>
            </div>
            <div className='number-del' onClick={onToFah}>
                <button>Para Fahreheit</button>
            </div>
            <div className='number-del' onClick={onToCel}>
                <button>Para Celsius</button>
            </div>
            <div className='number-del' onClick={onFormulas}>
                <button>Alterar Função</button>
            </div>
        </>
    )
}

export function FuncsView({view}) {
    const [display, setDisplay] = useState("0")
    function eraseDisplay() {
        setDisplay("0")
    }
    function showInfoOnDisplay(message) {
        setDisplay(message)
        setTimeout(() => {
            setDisplay("0")
        }, 1000)
    }
    function changeDisplay(number) {
        if (display.length > 12) {
            showInfoOnDisplay("Numero Grande!")
        } else {
            display === "0" ? setDisplay(number) : setDisplay(bef => bef + number)
        }
    }
    function handleFtoC() {
        const result = Math.trunc((Number(display) - 32)*5/9)
        result < 1000 ? setDisplay(result) : setDisplay("0")
    }
    function handleCtoF() {
        const result = Math.trunc((Number(display) * 1.8)+32)
        result < 1000 ? setDisplay(result) : setDisplay("0")
    }
    return (
        <div className="contents">
            <div className="number-display">
                <input value={display} readOnly /><b>°</b>
            </div>
            <div className="flex-hor">
                <div>
                    <div className='row-1'>
                        <NumPadButton label="7" classname="number-7" onclick={() => changeDisplay("7")} />
                        <NumPadButton label="8" classname="number-8" onclick={() => changeDisplay("8")} />
                        <NumPadButton label="9" classname="number-9" onclick={() => changeDisplay("9")} />
                    </div>
                    <div className='row-2'>
                        <NumPadButton label="4" classname="number-4" onclick={() => changeDisplay("4")} />
                        <NumPadButton label="5" classname="number-5" onclick={() => changeDisplay("5")} />
                        <NumPadButton label="6" classname="number-6" onclick={() => changeDisplay("6")} />
                    </div>
                    <div className='row-3'>
                        <NumPadButton label="1" classname="number-1" onclick={() => changeDisplay("1")} />
                        <NumPadButton label="2" classname="number-2" onclick={() => changeDisplay("2")} />
                        <NumPadButton label="3" classname="number-3" onclick={() => changeDisplay("3")} />
                    </div>
                    <div className='row-4'>
                        <NumPadButton label="0" classname="number-0" onclick={() => changeDisplay("0")} />
                        <NumPadButton label=".," classname="symbol-dot" onclick={() => changeDisplay(".")} />
                        <div className='symbol-equals button-outside' onClick={eraseDisplay}>
                            <button>DEL</button>
                        </div>
                    </div>
                </div>
                <div>
                    <FormsToolboxBar onDel={() => showInfoOnDisplay("Indisponivel")} onToFah={handleCtoF} onToCel={handleFtoC} onFormulas={view} functionLabel={"1- Temperatura"} />
                </div>

            </div>
        </div>
    )
}