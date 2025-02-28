import Cards from "./component/Cards"


function App() {
  function filterHandeler(){

  }

  return (
    <div >
      <div className="text-center text-3xl pt-3 ">
        <h1>Online Baazar</h1>
        <div >
          <div className="mb-2">
            <input type="text" placeholder="Search..." className=" rounded-full rounded-tr-none rounded-br-none border-1 outline-none pl-0.5" />
            <button onClick={()=>{}} className="border-1 rounded-full rounded-tl-none rounded-bl-none active:scale-95 p-0.5 border-l-0 bg-sky-300 ">🔍</button>
          </div>
        </div>
      </div>
      <br />
      <Cards />
    </div>
  )
}

export default App
