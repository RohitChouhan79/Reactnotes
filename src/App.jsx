
import React, { useState } from 'react'

const App = () => {
    const [name, setname] = useState("Rohit")
    const [city, setcity] = useState("Bhopal")
    const [accept, setaccept] = useState(false)
    const [gender, setgender] = useState()
    const Submithandler=(event)=>{
        event.preventDefault()
        console.log(name,city,accept,gender);
    }
  return (
    <>
    <h1>Registration form</h1>
    <br />
    <form onSubmit={Submithandler}>
        <input type="text" onChange={(e)=>setname(e.target.value)} value={name} placeholder='Enter Username' />
        <br />
        <select onChange={(e)=>setcity(e.target.value)} value={city}>
            <option value="bhopal">Bhopal</option>
            <option value="indore">Indore</option>
            <option value="pune">Pune</option>
            <option value="others">others</option>
        </select>
        <br />
        <input type="checkbox" onChange={(e)=>setaccept(e.target.checked)} defaultChecked={accept} />Accept All Condition
        <br />
        <button>Submit</button>
        <input type="radio" onChange={(e)=>setgender(e.target.value)} value="male" />Male
       <input type="radio" onChange={(e)=>setgender(e.target.value) } value="female"  />{""}Female
        <input type="radio" onChange={(e)=>setgender(e.target.value)} value="female" />{" "}Female
    </form>
    </>
  )
}

export default App;
