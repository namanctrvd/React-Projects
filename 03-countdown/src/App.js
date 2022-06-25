import React, { useState, useRef } from 'react'

function App() {
  const [count, setCount] = useState('')
  const [isStart, setIsStart] = useState(false);

  const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }
  const countdown = async () =>  {
    setIsStart(true);
    let num = count;
    while (num>0) {
      await sleep(1000);
      setCount(c=>c-1)
      num = num-1;
    }
    // setIsStart(false);
  }
  return (
    <div className="main">
      <div className="container">
        <h2 className="title">CountDown</h2>
        {isStart && (<div className="box"> <h2>{count}</h2> </div>)}
        <div className="input">
          <input type="number" onChange={event => setCount(event.target.value)}></input>
          <button onClick={countdown} >Start</button>
        </div>
      </div>
    </div>
  )
}
export default App