import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './index.css'
import './App.css'
import Card from './components/Card'

function App() {
  // const [count, setCount] = useState(0)
let myobj ={
  name: "Rashi",
  course: "Btech"
}
let myArr=[1,2,3]
  return (
    <>
  <div className='bg-blue-300 text-white font-bold text-lg text-center p-3'>
      <h1 className="">Hello World !</h1>
  </div>
  {/* <Card type="Student" otherInfo={myobj} newArray ={myArr}/> */}
    {/* <Card  name ="Arpita" thanking ="Thank u!"/> */}
     <Card  name ="Arpita" />
    </>
 
  )
}

export default App
