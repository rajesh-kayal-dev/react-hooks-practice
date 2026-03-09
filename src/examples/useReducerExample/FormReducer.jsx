import React, { useReducer } from 'react'

const initialState = {
    name: "",
    email: ""
};

const reducer = (state, action) => {

    switch (action.type) {
        case "updateField":
            return {
                ...state,
                [action.field]: action.value
            };
        case "reset":
            return initialState;

        default:
            return state;
    }

}

const FormReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const handleChange = (e) => {
        dispatch({
            type: "updateField",
            field: e.target.name,
            value: e.target.value
        });
    };
    
    return (
        <div>

            <h2>Form Example</h2>

            <input
                name="name"
                placeholder="Enter name"
                value={state.name}
                onChange={handleChange}
            />

            <input
                name="email"
                placeholder="Enter email"
                value={state.email}
                onChange={handleChange}
            />

            <button onClick={() => dispatch({ type: "reset" })}>
                Reset
            </button>

            <p>Name: {state.name}</p>
            <p>Email: {state.email}</p>

        </div>
    )
}

export default FormReducer