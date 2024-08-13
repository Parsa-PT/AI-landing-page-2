import React from "react";
import Image from "next/image";
import Button from "@/components/Button";
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <div
        dir="rtl"
        className="homebg relative flex  items-center w-full lg:h-[40rem] z-20 md:h-[30rem] xl:h-screen h-[23rem]"
      >
        <div className=" w-full h-full  absolute  bg-[#0202026e]" />
        <div className="  relative flex flex-col gap-y-2 z-40 px-[26px] lg:px-[90px] xl:px-[130px] 2xl:px-[160px]">
          <h2 className="text-white text-[24px] lg:text-[40px] font-bold">
            حسین کاویانی
          </h2>
          <h3 className="text-white text-[26px] lg:text-[42px] font-bold">
            وکیل پایه یک دادگستری
          </h3>
          <p className="text-white text-[11px] lg:text-[15px] ">
            وکیل پایه یک دادگستری متخصص در دعاوی قضایی شامل: زمینه های
            حقوقی-کیفری-ثبتی و غیره
          </p>
          <Link href="/about-us">
            <Button style="group-hover:text-black" />
          </Link>
        </div>
      </div>
    </div>
  );
}
