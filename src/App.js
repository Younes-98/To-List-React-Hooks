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
    <div className="bg-[#333] text-[#00FFFF] py-8 flex flex-col text-center items-center justify-center min-h-screen h-full">
      <h1 className="text-3xl mt-5 mb-5">To Do List React App</h1>
      <div className="flex flex-col">
        <div className="flex">
          <input type="text" className="input input-bordered text-black font-bold input-md w-[200px] sm:w-[400px] mr-2" onChange={change}/>
          <button className="btn btn-ghost border-white" onClick={Add}>Add</button>
        </div>
        <div>
          {listOffeild.map(feildoflist => <div className="border-solid bg-accent-content border-2 border-white rounded-lg flex text-center items-center justify-between mt-5 p-3">
            <p>{feildoflist}</p>
            <button className="inline-flex animate-pulse items-center p-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
            </button> 
            </div>)}
        </div>
      </div> 
    </div>
  );
}

export default App;
