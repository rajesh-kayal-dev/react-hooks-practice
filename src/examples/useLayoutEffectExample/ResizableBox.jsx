import React, { useState, useLayoutEffect, useRef } from 'react';

const ResizableBox = () => {
    const [size, setSize] = useState(200); 
    const [measuredWidth, setMeasuredWidth] = useState(0); 
    const boxRef = useRef(null);

    useLayoutEffect(() => {
        if (boxRef.current) {
            setMeasuredWidth(boxRef.current.offsetWidth);
        }
    }, [size]);

    return (
        <div style={{ padding: '20px' }}>
            <h2>Resizable Box</h2>
            <p><strong>Actual Box Width:</strong> {measuredWidth}px</p>

            <div
                ref={boxRef}
                style={{
                    width: `${size}px`,
                    height: '100px',
                    background: 'coral',
                    transition: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                    marginBottom: '10px'
                }}
            >
                Box
            </div>

            <button onClick={() => setSize(prev => prev + 50)}>
                Increase Width
            </button>
            <button onClick={() => setSize(200)} style={{ marginLeft: '10px' }}>
                Reset
            </button>
        </div>
    );
};

export default ResizableBox;
