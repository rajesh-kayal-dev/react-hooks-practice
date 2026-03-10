import React from 'react'
import useFetch from '../../hooks/useFetch'

const UserList = () => {
    const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/users"
    );

    if (loading) return <p>Loading...</p>

    if (error) return <p>{error}</p>;

    return (
        <div>
            <h2>User List</h2>
            {data && data.length > 0 ? (
                <ul>
                    {data.map((user) => (
                        <li key={user.id}>
                            {user.name}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No data found!</p>
            )
            }
        </div>
    )
}

export default UserList