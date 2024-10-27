import React from 'react'
import Image from 'next/image'
import { EVERY } from '@/constant'

const Every = () => {
  return (
     <section className=' my-24'>
            <div>
                <div className=' w-full flex justify-center  mb-10'>
                    <div className=" w-[15rem]  text-center rounded-full border  border-white/20   p-3">
                        <p className=" text-[#9855FF]">Everything you need</p>
                    </div>
                </div>

                <div className=' px-10 mb-20'>
                    <p className=' text-[26px] mx-auto text-white md:max-w-[30rem] text-center'>Harness the power of AI, making search engine optimization intuitive and effective for all skill levels.</p>
                </div>

                <div className=' w-full flex justify-center mb-10 '>
                <div className=' relative w-[90vw] h-[70vw] shadow-[0px_-10px_90px_0_rgb(140,69,255,.5)]  rounded-[20px]'>
                    <Image src='/img/product.png' alt='pic' className='  '  fill/>
                </div>
                </div>


                <div className=' grid grid-cols-1 md:grid-cols-2 w-full lg:grid-cols-3 gap-y-8 px-9  lg:ml-10 '>
                    {EVERY.map((items)=>(
                        <div>
                            <div className=' flex  items-center gap-2 mb-3'>
                            <Image src='/img/vector2.svg' alt='pic' className='  '  width={20} height={20}/>
                            <h2  className=' text-white  font-semibold'>{items.title}</h2>
                            </div>
                            <p className=' text-xl max-w-[20rem] text-white/70'>{items.desc}</p>
                        </div>
                    ))}

                </div>
            </div>
     </section>
  )
}

export default Every
