// Created by Younes EL MOUATASIM // @Copyright@

import React from 'react';
import { useState } from 'react';
import editicon from '../Icon/editIcon.svg'



export default function AddList({showAlert, setShowAlert}) {

    const id = Math.floor(Math.random() * 100000);
    const [feild, setFeild] = useState('')

    // For edite
    const [newfeild, setNewfeild] = useState('')

    // console.log(newfeild)

    const [listOffeild, setListOffeild] = useState([])

    const Add = () => {
        if(feild !== ''){
            setListOffeild([...listOffeild, {id: id, feild: feild, edit: false}])
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
        // Created by Younes EL MOUATASIM @Copyright@
        (edit) ? setListOffeild(listOffeild.map(item => item.id === id ? {id: id, feild: newfeild, edit: !edit} : item))
         : setListOffeild(listOffeild.map(item => item.id === id ? {id: id, feild: feild, edit: !edit} : item))
    }

    const clearAll = () => {
        setListOffeild([])
    }

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
                            <img className="w-6 h-6 dark:text-white" src={editicon} alt="edit" />
                        </button>
                    </div>  
                </div>))}
        </div>

        {listOffeild.length > 1 && <button className="btn btn-outline btn-error mt-5 place-self-end" onClick={() => clearAll()}>Clear All</button>} 
    </div>
  )
}
