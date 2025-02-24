import { useState } from 'react'
import './index.css'

function App() {
  const [color, setColor] = useState("black")

  const randomClr = ()=>{
    const letters = "0123456789abcdef"
    let randomColor ="#"
    for(let i=0; i<6; i++){
      randomColor += letters[Math.floor(Math.random()*16)]
    }
    return randomColor;
  }
  return (
   <div className="w-full h-screen duration-200"
   style={{backgroundColor: color}}
   >
    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
      <div className="flex flex-wrap justify-center gap-2 shadow-lg bg-white px-3 py-2 rounded-3xl">
        <button 
        onClick={()=> setColor(randomClr)}
        className="outline-none px-4 py-2 rounded-full shadow-lg cursor-pointer  active:scale-95 active:opacity-50 transition duration-150"
        style={{backgroundColor: "cyan"}}>Change Color</button>
      </div>
    </div>
   </div>
  )
}

export default App
