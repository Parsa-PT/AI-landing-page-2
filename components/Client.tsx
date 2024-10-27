import React from 'react'
import Image from 'next/image'



const Client = () => {
  return (
     <section className=' my-24'>
        <div className=' px-5'>
                <div className=' mb-10 text-white flex flex-col  justify-center  max-w-[20rem] gap-y-3  mx-auto items-center'>
                    <h1 className=' text-4xl'>Our clients</h1>
                    <p className=' text-center'>Hear firsthand how our solutions have boosted online success for users like you.</p>
                </div>

                <div className=' flex border py-5 bg-gradient-to-b from-[#8c45ffa6] to-[#000] border-white/40 rounded-xl md:flex-row  w-full flex-col justify-center relative  items-center'>
                    <Image src='/img/person.png' className=' mb-10' alt='pic' width={170} height={200}/>
                    <p className=' text-white max-w-[20rem] text-center mb-5'>”This product has completely transformed how I manage my projects and deadlines”</p>
                    <div>
                    <p className=' text-white'>Talia Taylor</p>
                    <p className=' text-white/50'>Digital Marketing Director @ Quantum</p>
                    </div>

                    {/* <div className=' absolute top-0 w-full h-[1px] bg-white/70'/>
                    <div className=' w-full h-[1px] bg-white/70'/>
                    <div className=' w-full h-[1px] bg-white/70'/>
                    <div className=' absolute bottom-30 w-full h-[1px] bg-white/70'/> */}
                </div>
        </div>
     </section>
  )
}

export default Client
