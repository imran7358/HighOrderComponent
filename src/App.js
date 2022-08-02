import React from "react";
import A from "./A";
import "./App.css"
import B from "./B";
// importing HighOrder file
const App = (props) =>{
  return(
   <div className='cont'>
   <h1>Hello High Order Component</h1>
   <A name="OnClick"/>
   <B name = "OnMouseOver"/>
   </div>
  )
}
  
export default App;