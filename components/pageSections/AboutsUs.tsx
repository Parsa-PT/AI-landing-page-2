import React from "react";
import Image from "next/image";
import Link from "next/link";
import BannerMaker from "../BannerMaker";

export default function AboutsUs() {
  return (
    <div className=" mb-20">
     <BannerMaker title="درباره ما" banner="aboutbg"/>

      <div className=" w-full flex justify-center  relative z-20 -mt-16 ">
        <div className=" w-[20rem]  md:w-[45rem] xl:w-[60rem] lg:w-[55rem] 2xl:w-[70rem] flex flex-col md:flex-row-reverse   shadow-xl  bg-[#131D42]">
          <div>
            <Image
              src="/homepic/lawyer.jpeg"
              className=" w-full md:w-[100rem] h-full"
              alt="pic"
              width={400}
              height={200}
            />
          </div>

          <div className=" p-3  ">
            <div className=" p-1  w-full h-full border-[4px] border-[#D4AF37]">
              <div
                dir="rtl"
                className=" text-white  xl:flex xl:flex-col xl:justify-center  px-3 pt-7 w-full h-full border-[4px] border-[#D4AF37]"
              >
                <h1 className=" text-center  font-bold text-[32px] xl:text-[40px] lg:mb-10 mb-5">
                  محسن کاویانی
                </h1>
                <p className="  text-[13px] lg:text-[16px] xl:leading-8 mb-3">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و
                  آینده
                </p>
                <p className="  text-[13px] lg:text-[16px] xl:leading-8 mb-5">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و .....
                </p>
                <div className=" w-full flex justify-center lg:justify-start mb-2">
                  <Link href="/contact-us">
                    <button className="  text-white py-2 px-5 text-[13px] lg:text-base bg-[#8b8b8b5f] rounded-[10px]">
                      درخواست مشاوره
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
