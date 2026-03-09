import React, { useEffect, useRef, useState } from 'react'

const PreviousValue = () => {
    const [count, setCount] = useState(0);

    const prevCountRef = useRef();

    useEffect(() => {
        prevCountRef.current = count;
    }, [count]);


    return (
        <div>
            <h2>Previous Value Example</h2>
            <h3>Count: {count}</h3>
            <h3>Previous: {prevCountRef.current}</h3>

            <button onClick={() => setCount(count + 1)}>Incement</button>
        </div>
    )
}

export default PreviousValue