import React, { useLayoutEffect, useState } from 'react'

const PreventFlicker = () => {
    const [color, setColor] = useState("white");
    useLayoutEffect(() => {
       
        setColor("lightGreen")
    }, [])
    return (
        <div
            style={{
                height: '100px',
                background: color,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            Background Color Chnaged
        </div>
    )
}

export default PreventFlicker