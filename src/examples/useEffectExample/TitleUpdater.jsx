import React, { useEffect, useState } from 'react'

const TitleUpdater = () => {
    const [count, setCount] = useState(0)

    useEffect(()=>{
        document.title = `Count: ${count}` 
        console.log('component mount')
    },[count])

    return (
        <div>
            <h2>useEffect Example - Page Title</h2>
            <h3>Count: {count}</h3>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
}

export default TitleUpdater