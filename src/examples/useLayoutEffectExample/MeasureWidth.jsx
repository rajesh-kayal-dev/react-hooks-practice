import React, { useLayoutEffect, useRef, useState } from 'react'

const MeasureWidth = () => {
    const boxRef = useRef(null);
    const [witdth, setWitdth] = useState(0)

    useLayoutEffect(() => {
        setWitdth(boxRef.current.offsetWidth)
    }, [])

    return (
        <div>
            <h2>useLayoutEffect Example</h2>
            <div
                ref={boxRef}
                style={{
                    width: '200px',
                    padding: '20px',
                    background: 'lightblue'
                }}
            >
                This is a bx
            </div>

            <h3>Width: {witdth}px</h3>
        </div>
    )
}

export default MeasureWidth