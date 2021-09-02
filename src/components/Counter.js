import React, { useState } from 'react';
const Counter = ()=>{
    const [counter,setCounter]=useState(0);
    const [inVal,setInVal]=useState(1);
    const handleSub = ()=>{
        setCounter(counter-parseInt(inVal));
    }
    const handleAdd = ()=>{
        setCounter(counter+parseInt(inVal));
    }
    return(
        <div>
            <h1 data-testid="header">Counter Component</h1>
            <h2 data-testid="counter">{counter}</h2>
            <input data-testid="input" type="number" value={inVal} onChange={(event)=>setInVal(event.target.value)}></input>
            <button data-testid="sub-bn" onClick={handleSub}>-</button>
            <button data-testid="add-btn" onClick={handleAdd}>+</button>
        </div>
    )
}
export default Counter;