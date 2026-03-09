import React, { useRef } from 'react'

const InputFocus = () => {
    const inputRef = useRef(null)

    const handelClick = () => {
        inputRef.current.focus()
    }


    return (
        <div>
            <h2>Input Focus Example</h2>
            <input type="text" placeholder='Type something...' ref={inputRef} />
            <br /><br />

            <button onClick={handelClick}>Focus Input</button>
        </div>
    )
}

export default InputFocus