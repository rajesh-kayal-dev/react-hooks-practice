import React, { useRef, useState } from 'react'

const Stopwatch = () => {
    const [time, setTime] = useState(0);

    const intervalRef = useRef(null);

    const start = () => {
        intervalRef.current = setInterval(() => {
            setTime(prev => prev + 1)
        }, 1000)
    }
    const stop = () => {
        clearInterval(intervalRef.current)
    }
    const reset = () => {
        clearInterval(intervalRef.current)
        setTime(0)
    }

    return (
        <div>
            <h2>Stopwatch Example</h2>

            <h3>{time} sec</h3>
            <button onClick={start}>Start</button>
            <button onClick={stop}>Stop</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default Stopwatch