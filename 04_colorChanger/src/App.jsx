import { useState } from "react"

function App() {
  const [color,setColor] = useState("olive")
  return (
   <>
   <div className='w-screen h-screen'  style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap ">
          <ul className="p-4 bg-green-100 ms-10  mt-10 rounded-full flex gap-10">
            <li><button onClick={()=>setColor("red")} className="bg-red-400 text-white p-3 rounded gap-3">Red</button></li>
             <li><button onClick={()=>setColor("green")}  className="bg-green-400 text-white p-3 rounded gap-3">Green</button></li>
              <li><button onClick={()=>setColor("yellow")}  className="bg-yellow-400 text-white p-3 rounded gap-3">Yellow</button></li>
               <li><button onClick={()=>setColor("blue")}  className="bg-blue-400 text-white p-3 rounded gap-3">Blue</button></li>
            <li><button onClick={()=>setColor("gray")}  className="bg-gray-400 text-white p-3 rounded gap-3">Gray</button></li>
          </ul>
        </div>
   </div>
  </>
  )
}

export default App
