import React from "react";
import Counter from "./highOrder";
const A = (props)=>{
    const {count, increment, name} = props
    return (
        <button onClick={increment}> {count} {name}</button>
    )
}

export default Counter(A)