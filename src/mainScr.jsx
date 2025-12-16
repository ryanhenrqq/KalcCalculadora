import "./mainScr.css"

export default function NumberPad() {
    const [display, setDisplay] = useState("0")
    function changeDisplay(number) {
        console.log("Numero digitado: ", number, ". Numero no Display: ", display)
        display === "0" ? setDisplay(number) : setDisplay(bef => bef + number)
    }
    function eraseDisplay() {
        setDisplay("0")
    }
    return (
        <div className="contents">
            <div className="number-display">{display}</div>
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
            <div className='number-9 button-outside' onClick={eraseDisplay}>
                <button>DEL</button>
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
            </div>
            <div className='row-4'>
            <div className='number-0 button-outside' onClick={() => changeDisplay("0")}>
                <button>0</button>
            </div>
            <div className='symbol-dot button-outside'  onClick={() => changeDisplay(".")}>
                <button>.</button>
            </div>
            <div className='symbol-equals button-outside' onClick={() => changeDisplay("=")}>
                <button>=</button>
            </div>
            </div>
            <div className='row-5'>
            <button>Formulas</button>
            </div>
        </div>
    )
}