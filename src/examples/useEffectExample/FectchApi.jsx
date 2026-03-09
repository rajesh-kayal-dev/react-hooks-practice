import React, { useEffect, useState } from 'react'

const FectchApi = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://dummyjson.com/users')
            .then(response => response.json())
            .then(data => {
                setUsers(data.users);
            });
    }, [])

    return (
        <div>
            <h2>FectchApi Example</h2>
            <ul>
                {users.slice(0, 5).map((user, index) => (
                    <li key={user.id}>
                        {index + 1}. {user.firstName} {user.lastName}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FectchApi