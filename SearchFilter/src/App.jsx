import { useState } from 'react'
import SearchFilter from './SearchFilter';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className="App">
      <h1>Search Filter Component</h1>
      <SearchFilter />
    </div>
      
    </>
  )
}

export default App
