import React from 'react';
import { useState } from 'react';



export default function AddList({showAlert, setShowAlert}) {

    const id = Math.floor(Math.random() * 100000);
    const [feild, setFeild] = useState('')

    // For edite
    const [newfeild, setNewfeild] = useState('')

    console.log(newfeild)

    const [listOffeild, setListOffeild] = useState([])

    const [forEdit, setForEdit] = useState(false)
    const Add = () => {
        if(feild !== ''){
            setListOffeild([...listOffeild, {id: id, feild: feild, edit: forEdit}])
            setFeild('')
        } else {
            setShowAlert(true)
            setTimeout(() => setShowAlert(false), 2000);
        }
    }

    const Delete = (id, feild) => {
        (window.confirm(`Vous voullez vraiment supprimer ${feild} !`) === true) && (
            setListOffeild(listOffeild.filter(item => item.id !== id))) 
    }

    const Edit = (id, feild, edit) => {
        setNewfeild(feild);

        (edit) ? setListOffeild(listOffeild.map(item => item.id === id ? {id: id, feild: newfeild, edit: !edit} : item))
         : setListOffeild(listOffeild.map(item => item.id === id ? {id: id, feild: feild, edit: !edit} : item))
    }

    console.log(listOffeild)
  return (
    <div className="flex flex-col">
        <div className="flex text-center justify-center">
            <input type="text" className="input input-bordered text-black font-bold input-md w-[200px] sm:w-[400px] mr-2" placeholder="Écrire quelque chose..." value={feild} onChange={(e) => setFeild(e.target.value)}/>
            <button className="btn btn-ghost border-white" onClick={Add}>Add</button>
        </div>

        <div>
            {listOffeild.map(feildoflist => (
                <div key={feildoflist.id} className="border-solid bg-accent-content border-2 border-white rounded-lg flex text-center items-center justify-between mt-5 p-3">
                    {feildoflist.edit ? 
                        <input type="text" className="input input-bordered input-sm text-black w-[150px] sm:w-[300px]" value={newfeild} onChange={(e) => setNewfeild(e.target.value)}/> : 
                        <p className="mr-8">{feildoflist.feild}</p>
                    }
                    <div>
                        <button onClick={() => Delete(feildoflist.id, feildoflist.feild, feildoflist.edit)} className="inline-flex animate-pulse items-center mr-2 p-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                        </button>
                        <button onClick={() => Edit(feildoflist.id, feildoflist.feild, feildoflist.edit)} className="inline-flex animate-pulse items-center p-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-md">
                            <svg className="w-6 h-6 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 14l9-5-9-5-9 5 9 5z"></path><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path></svg>
                        </button>
                    </div>  
                </div>))}
        </div>

        {listOffeild.length > 1 && <button class="btn btn-outline btn-error mt-5 place-self-end">Clear All</button>} 
    </div>
  )
}
