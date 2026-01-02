// Manage complex state logic

import { useReducer } from "react";

// when to use: 
// Logic becomes complex with useState
// Updates depend on previous state

// example: Forms with many fields

// useContext + useReducer => Global state without Redux


function reducer(state, action){ // => new updated state
    switch(action.type){
        case "increments":
            return {count: state.count + 1}
        case "decrement":
            return {count: state.count - 1}
        default:
            return state;
    }
}

// reduce(() => {}, initVal)

const Reducers = () => {
    const [state, dispatch] = useReducer(reducer, {count: 0})

  return (
    <div>
        <p> count is - {state.count} </p>
        <button type="button" onClick={() => dispatch({type: 'increments'})}> Increment </button>
        <button type="button" onClick={() => dispatch({type: 'decrement'})}> Decrement </button>
    </div>
  )
}

export default Reducers