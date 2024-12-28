import { useState } from "react"


function Aziz() {
    // const data = useState("oh")
    // console.log(data);  // output:- ["oh", fn]
    

    // array destructuring
    const [value, setValue] = useState("Yes")

    function handleClick(){
        setValue("Yah baby")
    }

  return (
  <main className='aziz-main'>
    <h1 className='title'>Is state important to know</h1>
    <button className='value' onClick={handleClick}>{value}</button>
  </main>
  )
}


export default Aziz