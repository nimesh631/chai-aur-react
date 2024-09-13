import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let  [counter, setCounter] = useState(5)

  // let counter =5;

const  addValue=()=>{
    if(counter<=19){  //counter<20
      counter=counter+1
    // console.log("clicked",counter);
    // setCounter(counter+1)
       setCounter(counter)
    }
  }

const removeValue=()=>{
  if(counter>0)   //counter>=1
    setCounter(counter-1)
}


  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value:{counter}</button>
      <br />
      <button onClick={removeValue}>Remove value:{counter}</button>
      <p>val:{counter}</p>
    </>
  )
}

export default App