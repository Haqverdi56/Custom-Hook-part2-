import React from 'react'
import useStateWithHistory from '../Hooks/useStateWithHistory';

function StateHistory() {
    const [count,setCount,left,goForward,history] = useStateWithHistory(0);
    console.log(history)

    return(<>
    <h1>UseState History</h1>
    <h1>{count}</h1>
    <h1>History:{history.map((item)=>`${item},`)}</h1>
    <button onClick={()=>{left()}}> Prev </button>
    <button onClick={()=>{setCount(count+1)}} > + </button>
    <button onClick={()=>{goForward()}} > Next </button>
</>)
}

export default StateHistory