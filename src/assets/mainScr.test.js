import { NumberPad, NumPadButton } from "./mainScr";
import { render, screen, fireEvent } from '@testing-library/react'
//BUGS:
    // corrigido no ultimo commit !!
    //REACT E REACT-DOM EM VERSOES DIFERENTES, CONFERIR NO NPM RUN DEV


    //FAZER O PRIMEIRO TESTE UNITÁRIO APOS CORRIGIR O PROBLEMA DE VERSOES
test("Funcionando numpad", ()=> {
    const mockClick = jest.fn()
    render(<NumPadButton label="clickhere" classname="number-0" onclick={mockClick} />)

    const firerClik = screen.getByText(/clickhere/i)
    fireEvent.click(firerClik)

    expect(fireEvent).toBeInTheDocument()
    expect(mockClick).toHaveBeenCalledTimes(1)
})