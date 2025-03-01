import { useState } from "react"
import Cards from "./component/Cards"
import { data } from "./utilis/data";


function App() {
  const [val, setVal] = useState("")
  const [filterData, setFilterData] = useState(data)

  function filterHandeler(){
    let res = data.filter((item)=> item.title.toLocaleLowerCase().includes(val.toLocaleLowerCase()))
    setFilterData(res)
    
  }

  return (
    <div >
      <div className="text-center text-3xl pt-3 ">
        <h1>Online Baazar</h1>
        <div >
          <div className="mb-2">
            <input type="text" placeholder="Search..."
             className=" rounded-full rounded-tr-none rounded-br-none border-1 outline-none pl-0.5"
             onChange={(e) => setVal(e.target.value)} />

            <button onClick={filterHandeler}
             className="border-1 rounded-full rounded-tl-none rounded-bl-none active:scale-95 p-0.5 border-l-0 bg-sky-300 "
             >🔍</button>
          </div>
        </div>
      </div>
      <br />
      {filterData.length === 0 ? <h1  className="text-center font-serif text-5xl font-semibold mt-10">No Items Found</h1> : <Cards products={filterData} />}
      
    </div>
  )
}

export default App
