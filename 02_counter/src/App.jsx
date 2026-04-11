import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

function App() {
      /*
 count is state (managed by React)
setCount() does NOT update immediately
React updates state later (asynchronously)
⚠️ Important:
console.log(count)
👉 This prints OLD value, not updated one
      */
      const [count,setCount] = useState(10)
      const add = ()=>{
       setCount(preCount => preCount+1)
       setCount(preCount => preCount+1)
       setCount(preCount => preCount+1)
       setCount(preCount => preCount+1)
       console.log("clicked value :",count)

      
      //React rule: State is immutable (you should not change it directly)
      // let [count,setCount] = useState(10)
      // const add = ()=>{
      //  count=count+1;
      //  setCount(count)
      //  console.log("clicked value :",count)
       }
      const remove =()=>{
        if(count>0)
        setCount(count-1)
        console.log("clicked value :",count)
      }
  return (
    <>
    <h1> hello react....</h1>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem necessitatibus odit, voluptates accusantium ratione harum molestias aut debitis delectus aliquam vel sequi nisi reiciendis quibusdam voluptas assumenda vitae. Ipsum, doloribus.</p>
    <h2>Counter value : {count}</h2>
    <button
    onClick={add}>
      Add Value</button>
    <br />
    <hr></hr>
    <button onClick={remove}>Remove Value</button>
    </>
  )
}

export default App
