
import { useState } from 'react'
import './index.css'

function App() {

  const[title, setTitle]= useState("")
  const[desc, setDesc]= useState("")

  function addTodo(){
    console.log(title, desc);
    
  }

  return (
    <div>
      <div >
        <input type="text" placeholder='Title' 
        onChange={(e)=> setTitle(e.target.value)
        }
        className='border-1 rounded-xl'/>
        <br />
        <br />
         <input type="text" placeholder='Description'
         onChange={(e)=> setDesc(e.target.value)}
         className='border-1 rounded-xl'/>
        <br />
        <br />
        <button onClick={addTodo}>
        Add Todo
      </button>
       </div>
    </div>
  )
}

export default App
