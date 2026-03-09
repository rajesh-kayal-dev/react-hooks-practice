import React from 'react'

const ChildComponent = ({ handleClick }) => {

    console.log('Child Renderd')
    return (
        <div>
            <h2>Child Component</h2>

            <button onClick={handleClick}>Click child Button</button>

        </div>
    )
}

export default ChildComponent