import React from 'react'
import Image from 'next/image'
import Button from '@/components/Button'

export default function Aboutus() {
  return (
    <div className=' flex flex-col md:flex-row-reverse w-full md:items-center md:justify-center '>
      <section className=' flex justify-center mb-20 flex-col items-center gap-y-20'>
            <div className=' relative'>
                <Image src='/homepic/lawyer.jpeg' alt='lawyer' className=' w-[15rem] lg:w-[20rem] 2xl:w-[30rem]' width={500} height={300}/>
                <div className=' absolute  -bottom-3 -right-3 w-[15rem] h-[20rem] lg:h-[26rem] lg:w-[19rem] 2xl:w-[29rem] 2xl:h-[38rem] -z-20 bg-[#a38c23e4] '/>
            </div>
            
      </section>
        <section>
        <div dir='rtl' className=' px-6 md:max-w-[25rem] lg:max-w-[35rem] mr-4 xl:max-w-[45rem]'>
                <p className=' h-[2.5rem] w-[5rem] font-bold py-2 px-2  border-r-4  border-[#D4AF37]   text-[#D4AF37]'>درباره ما</p>
                <h1 className=' text-[32px] mb-4 font-bold'>حسین کاویانی</h1>
                <p className=' font-bold mb-4'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده</p>
                <p className=' font-bold mb-4'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و ..... </p>
                <Button style='text-black'/>
            </div>
        </section>     
    </div>
  )
}
