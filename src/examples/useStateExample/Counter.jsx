import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
    const increment = () => {
        setCount((prev) => prev + 1)
    }

    const decrement = () => {
        if (count > 0) {
            setCount((prev)=> prev - 1)
        }
    }

    return (
        <div>
            <h2>Counter Example</h2>
            <h3>{count}</h3>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={() => setCount(0)}>Reset</button>
            <button onClick={() => setCount(count + 5)}>Increment by 5</button>
        </div>
    )
}

export default Counter