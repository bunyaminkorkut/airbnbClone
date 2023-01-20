'use client';

import { useEffect, useState } from "react";

export default function FloatInput({ onChange, addClass, defaultValue, placeholder }) {

  const [value, setvalue]= useState(defaultValue)
  useEffect(()=>{
    setvalue(defaultValue)
  },[defaultValue])

  return (
    <div>
      <div class="relative">
        <input value={value} onChange={(e)=>setvalue(e.target.value)}  type="text" id="floating_filled" className={addClass+" block  px-2.5 pb-3 pt-6 w-full text-md text-gray-900 bg-white border appearance-none focus:outline-none focus:border focus:ring-0 focus:border-black peer"} placeholder=" "/>
        <label for="floating_filled" class="absolute text-lg text-black duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5  peer-focus:text-gray-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">{placeholder}</label>
      </div>
    </div>
  )
}