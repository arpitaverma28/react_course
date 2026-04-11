import { useState, useCallback ,useEffect, useRef} from 'react'
function App() {
  const [length, setLength] = useState(6)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed,setCharAllowed] = useState(false)
  const [password,setPassword] =useState("")

const passwordRef = useRef(null)

  const passwordGenerator=useCallback(()=>{
    let pass=""
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numAllowed) str +="0123456789"
    if(charAllowed) str +="!@#$%^&*(){}[]~`+-_="
    for(let i=1;i<=length;i++){
      let idx = Math.floor(Math.random() * str.length +1)
      pass += str.charAt(idx)
    }
    setPassword(pass)

  },[length,numAllowed,charAllowed,setPassword])
   
const copyPasswordToClipBoard =useCallback(()=>{
  passwordRef.current?.select()
 //  passwordRef.current?.setSelectionRange(0,4)
  window.navigator.clipboard.writeText(password)
},[password])

useEffect(()=>{ passwordGenerator()},[length,numAllowed,charAllowed,passwordGenerator])

  return (
   <>
  <div className="w-full max-w-md mx-auto shadow-md text-center rounded-lg pb-10 px-8 my-10  text-orange-500 bg-gray-700">
  <h1 className='text-4xl text-white p-4 m-3'>Password Generator</h1>
   
   <div className='flex shadow rounded overflow-hidden mb-4'>
    <input type="text"
    value={password} 
    className='outline-none w-full text-gray-700 bg-white rounded py-1 px-3'
    placeholder='password'
    readOnly
    ref={passwordRef}
    />
    <button
     onClick={copyPasswordToClipBoard} 
     className='bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
    </div> 
    <div className='flex text-sm gap-x-2'>
     <div className='flex item-center gap-x-1'>
      <input 
      type="range"
      min={6}
      max={50}
      value={length}
      className='cursor-pointer'
      onChange={(e)=>{setLength(e.target.value)}}
       />
       <label>Length : {length}</label>
     </div>
    </div>
    <div className='flex item-center gap-x-1'>
      <input 
      type="checkbox" 
      defaultChecked={numAllowed}
      id="numberInput"
      onChange={()=> setNumAllowed((prev)=>!prev)}
       />
       <label htmlFor="numberInput">Numbers</label>
    </div>
      <div className='flex item-center gap-x-1'>
      <input 
      type="checkbox" 
      defaultChecked={charAllowed}
      id="characterInput"
      onChange={()=> setCharAllowed((prev)=>!prev)}
       />
       <label htmlFor="characterInput">Characters</label>
    </div>
  </div>
  
   </>
  )
}

export default App
