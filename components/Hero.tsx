import Image from "next/image";
import pattern from "@/public/img/pattern1.png";

const HomeSec = () => {
  return (
    <div  className=" relative py-20  overflow-hidden">
        <div className=" w-full  h-[680px] top-0  absolute">
            <Image src='/img/pattern1.png' alt="tt"  className="  opacity-50"  fill/>
        </div>
        <div className=" rotate-[30deg] absolute w-[305px] h-[50rem] bg-[#8C45FF] rounded-full -bottom-[20rem] blur-3xl -right-[3rem] -z-10  shadow-[-50px_-50px_50px_rgb(140,69,255,0.5),-50px_-0px_50px_rgb(140,69,255,0.3)]  opacity-30"/>
      <div className=" w-full flex  justify-center items-center flex-col gap-y-10">
        <div className="  rounded-full border  border-white/20 flex items-center  gap-x-3 p-3 justify-between ">
          <p className=" text-black bg-[#9855FF] text-xs p-1 px-1.5 rounded-full font-bold">
            NEW
          </p>
          <p className=" text-[#9855FF]">Latest integration just arrived</p>
        </div>

        <div  className=" flex flex-col items-center gap-y-5">
          <h1 className=" text-[54px] text-white  max-w-[20rem]   ">
            Elevate your SEO efforts.
          </h1>
          <p className=" text-xl max-w-[20rem] text-white/50  ">
            Elevate your site’s visibility effortlessly with AI, where smart
            technology meets user-friendly SEO tools.
          </p>
        </div>

        <div>
          <input
            className=" w-full h-[3rem] mb-4 rounded-[8px] bg-transparent border border-white/20 outline-none text-white px-3"
            type="text"
            placeholder="Your email"
          />
          <button className=" w-full bg-white h-[3rem] rounded-[8px]  font-semibold">
            Join waitlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeSec;
