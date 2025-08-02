import React, { useState } from 'react'

export default function Home() {
    const [display, setdisplay] = useState(false)
  return (
    <div>
        <div>
            <button onClick={()=>{setdisplay(!display)}}>show</button>
        </div>
        {display&&
        <div>
         <p>Results</p>   
        </div>}
    </div>
  )
}
