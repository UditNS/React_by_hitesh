import React from "react"
import { useState } from "react"
function App() {
  const [counter, setcounter] = useState(0)
  const [totalClick, setTotalClick] = useState(0);

  const addValue = () => {
    setcounter(counter+1);
    setTotalClick(totalClick+1)
  }
  const removeValue = () => {
    setcounter(counter-1);
    setTotalClick(totalClick+1)
  }

  return (
    <>
      <h1>Counter App</h1>
      <h2>Current counter value : {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>Remove value</button>

      <h3>Total Clicks : {totalClick}</h3>
    </>
  )
}

export default App


// Learned how to use useState hook.
// This hook is need to update UI.