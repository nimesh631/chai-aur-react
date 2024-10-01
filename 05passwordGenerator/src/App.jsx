import { useState ,useCallback, useEffect, useRef} from 'react'
import './App.css'

function App() {
 const [length,setLength]=useState(8);
 const [numberAllowed,setNumberAllowed]=useState(false);
 const [charAllowed,setCharAllowed]=useState(false);
 const [password,setPassword]=useState("");

 //useRef cook
 const passwordRef=useRef(null)

 //function and dependencies for optimization and memorize and place in cache change in char,number length put in cache
 const passwordGenerator = useCallback(()=>{
  let pass=""
  let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if(numberAllowed) str+="0123456789"
  if(charAllowed) str+="!#$%&()*+,-./:;<=>?@[\]^_`{|}~"
for (let i= 1; i <= length; i++) {
  let char=Math.floor(Math.random()*str.length+1)
  pass += str.charAt(char)
  
}

setPassword(pass)

 },[length,numberAllowed,charAllowed,setPassword])

 const copyPasswordToClipboard = useCallback(()=>{
  passwordRef.current?.select()
  passwordRef.current?.setSelectionRange(0,101);
  window.navigator.clipboard.writeText(password)
 },{password})


 //if some change then rerrun
useEffect(()=>{
  passwordGenerator();
},[length,numberAllowed,charAllowed,passwordGenerator])
  return (
    <>
      <div className="text-center w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700 h-[150px]">
      <h1 className='m-2 py-2.5'>  Password Generator </h1>
        <div className="flex rounded-lg overflow-hidden mb-1 ">
          <input type="text" value={password} className='outline-none w-full py-1 px-3 mb-5 rounded-lg' placeholder='Password' readOnly ref={passwordRef} />
          <button onClick={copyPasswordToClipboard} className='bg-blue-600 px-3 py-1 shrink-0 outline-none mb-5 rounded-lg mx-1 hover:bg-black' >copy</button>
        </div>

        <div className='flex text-sm gap-x-2 '>
          <div className='flex items-center gap-x-1'>
            <input type="range" min={6} max={100} value={length} onChange={(e)=>{setLength(e.target.value)}} className='cursor-pointer '/>
            <label htmlFor="length">Length:{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
              <input type="checkbox" defaultChecked={numberAllowed} id="numberInput" onChange={()=>{
                setNumberAllowed((prev)=>!prev);
              }} />
              <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>
              <input type="checkbox" defaultChecked={charAllowed} id="charInput" onChange={()=>{
                setCharAllowed((prev)=>!prev);
              }} />
              <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
