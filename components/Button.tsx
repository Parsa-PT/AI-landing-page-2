import React from 'react'

type styleprop = {
  title : string
}

export default function Button({title} : styleprop) {
  return (
    <button className=" text-white  relative py-2 px-3 rounded-lg  font-medium  text-sm bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0px_0px_12px_#8c45ff] ">
    <div className=" absolute  inset-0">
     <div className=" border  rounded-lg border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]"/> 
     <div className=" border  rounded-lg border-white/40 absolute inset-0 [mask-image:linear-gradient(to_top,black,transparent)]"/> 
     <div className=" absolute inset-0 shadow-[0_0_10px_rgb(140,69,255,0.7)_inset] rounded-lg "/>
   </div>
   <span>{title}</span>
</button>
  )
}
