import React, { useState } from "react";

const HOC = (WrappedComponent)=>{
    const Counter = (props)=>{
        const [count, setCount] = useState(0)
        const increment = ()=>{
            setCount(count + 1)
        }
    return (
       
        <WrappedComponent increment = {increment} count = {count} {...props}/>
       
    )
    }
    return Counter
}
export  default HOC