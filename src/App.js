import { useState } from "react";

function App() {

  const [feild, setFeild] = useState()
  const [listOffeild, setListOffeild] = useState([])
  const change = (e) => {
    setFeild(e.target.value)
  }
  const Add = () => {
    setListOffeild([...listOffeild, feild])
  }
  return (
    <div className="bg-[#333] text-[#00FFFF] flex flex-col text-center items-center justify-center h-screen">
      <h1 className="text-3xl mb-5">To Do List React App</h1>
      <div className="flex flex-col">
        <div className="flex">
          <input type="text" className="input input-bordered text-black font-bold input-md w-[200px] sm:w-[400px] mr-2" onChange={change}/>
          <button className="btn btn-ghost border-white" onClick={Add}>Add</button>
        </div>
        <div>
          {listOffeild.map(feildoflist => <p>{feildoflist}</p>)}
        </div>
      </div> 
    </div>
  );
}

export default App;
