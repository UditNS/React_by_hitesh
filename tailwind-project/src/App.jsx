import { useState } from 'react'
import Name from './components/Name'


function App() {
  const user = {
    id : 64856,
    age : 54,
    location : "india"
  }
  // To pass variable as prop, curly brackets are necessary
  return (
    <>
      <Name userName = 'udit' userDetail = {user}/>
      <Name />
    </>
  )
}

export default App
