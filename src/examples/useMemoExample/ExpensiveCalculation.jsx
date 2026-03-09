import React, { useState } from 'react'
import { useMemo } from 'react'

const ExpensiveCalculation = () => {
    const [number, setNumber] = useState(0)
    const [dark, setDark] = useState(false)

    const dubleNumber = useMemo(() => {
        console.log('Calculation running...')
        return slowFunction(number)
    }, [number])

    const themstyle = {
        backgroundColor: dark ? 'black' : 'white',
        color: dark ? 'white' : 'black',
        padding: '2rem',
        marginTop: '1rem'
    }

    return (
        <div>
            <h2>useMemo Example</h2>

            <input
                type='number'
                value={number}
                onChange={(e) => setNumber(parseInt(e.target.value))}
            />
            <button onClick={() => setDark(prev => !prev)}>
                Toggle Theme
            </button>

            <div style={themstyle}>
                Duble Number: {dubleNumber}
            </div>

        </div>
    )
}

function slowFunction(num) {
    for (let i = 0; i <= 1000000000; i++) { }
    return num * 2
}

export default ExpensiveCalculation