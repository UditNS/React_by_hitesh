import React from "react"
import { useState } from "react"
function App() {
  const [color, setColor] = useState('white')
  return (
  <div className="flex min-w-full h-screen items-end-safe justify-center pb-10" style={{backgroundColor: color}}> 
    <div className="flex space-x-4 bg-gray-600/60 p-5 rounded-3xl">
      <button onClick={() => setColor('red')} className="py-4 px-6 rounded-2xl duration-200 hover:scale-105" style={{background: 'red'}}>Red</button>
      <button onClick={() => setColor('green')} className=" py-4 px-6 rounded-2xl duration-200 hover:scale-105" style={{background: 'green'}}>Green</button>
      <button onClick={() => setColor('blue')} className=" py-4 px-6 rounded-2xl duration-200 hover:scale-105" style={{background: 'blue'}}>Blue</button>
      <button onClick={() => setColor('cyan')} className="py-4 px-6 rounded-2xl duration-200 hover:scale-105" style={{background: 'cyan'}}>Cyan</button>
      <button onClick={() => setColor('purple')} className=" py-4 px-6 rounded-2xl duration-200 hover:scale-105" style={{background: 'purple'}}>Purple</button>
      <button onClick={() => setColor('pink')} className=" py-4 px-6 rounded-2xl duration-200 hover:scale-105" style={{background: 'pink'}}>Pink</button>
      <button onClick={() => setColor('lavender')} className=" py-4 px-6 rounded-2xl duration-200 hover:scale-105" style={{background: 'lavender'}}>Lavender</button>
      <button onClick={() => setColor('gray')} className=" py-4 px-6 rounded-2xl duration-200 hover:scale-105" style={{background: 'gray'}}>Gray</button>
      <button onClick={() => setColor('black')} className="text-white py-4 px-6 rounded-2xl duration-200 hover:scale-105" style={{background: 'black'}}>Black</button>
      <button onClick={() => setColor('white')} className=" py-4 px-6 rounded-2xl duration-200 hover:scale-105 " style={{background: 'white'}}>White</button>
    </div>
  </div>
  )
}

export default App