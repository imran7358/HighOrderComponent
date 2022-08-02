import React from "react";
import HOC from "./highOrder";
const B = (props)=>{
    const {count, increment,name} = props
    return(
        <button onMouseOver={increment}>{count}{name}</button>
    )
}

export default HOC(B)