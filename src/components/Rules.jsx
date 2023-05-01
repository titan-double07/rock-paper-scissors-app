import React from 'react'
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from 'react-redux';
import { closeRules } from '../features/appSlice';


export default function Rules() {
  const dispatch =useDispatch()
  return (
   
    <div className="rules w-full  h-full md:w-[500px] md:h-3/5 bg-white absolute z-10 pt-16 flex flex-col items-center text-2xl md:pt-12 md:flex-row md:justify-between md:items-start rounded-xl md:text-4xl md:px-9">
      <h1 className="text-[#1f3756] text-center font-bold">RULES</h1>
      <button onClick={()=>dispatch(closeRules())} className="text-[#1f3756] mt-[11em] hover:border-2 border-current rounded-full text-4xl md:mt-0 ">
        <AiOutlineClose />
      </button>
    </div>

  );
}
