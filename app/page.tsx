
import Client from "@/components/Client";
import Every from "@/components/Every";
import HomeSec from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div  className=" max-w-[100%] overflow-x-hidden">

      <HomeSec/>
      <Every/>
      <Client/>
    </div>
  );
}
