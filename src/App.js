import { useState } from "react";
import Alert from "./components/Alert";
import AddList from "./components/AddList";

function App() {
  const [showAlert, setShowAlert] = useState(false)
  return (
    <div className="bg-[#333] text-[#00FFFF] py-8 flex flex-col text-center items-center justify-center min-h-screen h-full">
      <>{showAlert && <Alert message={'Le champ est vide!'}/>}</>
      <h1 className="text-3xl mt-5 mb-5">To Do List React App</h1>
      <AddList showAlert={showAlert} setShowAlert={setShowAlert}/>
    </div>
    
  );
}

export default App;
