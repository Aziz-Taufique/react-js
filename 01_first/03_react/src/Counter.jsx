import { useState } from "react"


function Counter() {

    const [count, setCount] = useState(0)
    let [val, setVal] = useState(false)
    console.log(setCount);
    

    function handleIncrement(){
        setVal(false)
        if(count >= 10) {
            setVal(true)
            return
        }
        setCount(prevCount => prevCount + 1)
        
    } 

    function handleDecrement(){
        if(count <= 0) return
        setCount(count - 1)
    }


  return (
    <main>
        <h1>Count is {count}</h1>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
        {val && <h2>count is over</h2>}
    </main>
  )
}

export default Counter