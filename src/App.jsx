
import React, { useState } from 'react'

const App = () => {
    const [name, setname] = useState("Rohit")
  return (
    <>
    <h1>{name}</h1>
    <button onClick={()=>setname(prompt("Enter the name"))}>Change the name</button>
    </>
  )
}

export default App;
