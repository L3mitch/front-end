import { useState } from "react"

export default function UseStateComponent1() {
    const [value1, setValue1] = useState(1)
    const [value2, setValue2] = useState(1)

    const increaseValue1 = () => setValue1(value1 + 1)
    const decreaseValue1 = () => setValue1(value1 - 1)

    const increaseValue2 = () => setValue2(value2 + 1)
    const decreaseValue2 = () => setValue2(value2 - 1)

    return(
        <>
        <hr />
        <p>Exercício 1: useState</p>
        <p>{value1}</p>
        <button onClick={decreaseValue1}>-</button>
        <button onClick={increaseValue1}>+</button>
        <hr />
        <p>{value2}</p>
        <button onClick={decreaseValue2}>-</button>
        <button onClick={increaseValue2}>+</button>
        <p>Resultado = {value1} * {value2} = {value1 * value2}</p>
        </>
    )

}