import React, { useEffect, useState } from 'react'

const Timmer = () => {
    const [second, setSecond] = useState(0)
    const [isActive, setisActive] = useState(false)

    useEffect(() => {
        let interval = null
        
        if (isActive) {
            interval = setInterval(() => {
                setSecond((prev) => prev + 1)
            }, 1000)
        } else {
            clearInterval(interval)
        }

        return () => clearInterval(interval)

    }, [isActive])
    return (
        <div>

            <h2>Timmer Example</h2>

            <h3>{second} seconds</h3>

            <button onClick={() => setisActive(true)}>Start</button>
            <button onClick={() => setisActive(false)}>Stop</button>
            <button onClick={() => { setisActive(false); setSecond(0) }}>Reset</button>

        </div>
    )
}

export default Timmer