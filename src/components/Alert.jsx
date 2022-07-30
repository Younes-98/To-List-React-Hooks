import React from 'react';

export default function Alert({message}) {
  return (
    <div className="flex items-center bg-red-500 text-white text-sm font-bold px-4 py-3 rounded-lg" role="alert">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-4 h-4 stroke-current mr-4"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
      <p>{message}</p>
    </div>
  )
}
