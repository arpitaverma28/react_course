import React, { useEffect, useState } from 'react'

function Github() {
    const [data,setData] =useState([])
    useEffect(()=>{
fetch('http://api.github.com/users/arpitaverma28').then(response=> response.json())
.then(data =>{ console.log(data);
      setData(data);
 }) },[])
  return (
    <div className='text-center m-4 p-4 text-white bg-gray-700 text-xl'>
      GitHub Followers : {data.followers}
    
    </div>
  )
}

export default Github
