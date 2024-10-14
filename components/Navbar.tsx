import Button from './Button'
import Image from 'next/image'


const Navbar = () => {
  return (
    <header className="py-4 border-b border-white/15 md:border-none sticky top-0 z-50 ">
      <div className=" absolute inset-0 backdrop-blur -z-10 md:hidden"/>
      <div className="containerr px-5 md:px-0">
        <div className=" flex justify-between items-center md:border  md:border-white/20 md:p-2.5 md:rounded-xl max-w-2xl  mx-auto  md:backdrop-blur ">
          <div>
            <div  className=" border h-10 w-10 rounded-lg flex justify-center  items-center border-white/15">
              {/* <LogoIcon className="h-8 w-8  "/> */}
              <Image src='/img/logo.png'  alt='tt' className=' w-8 h-8' width={0} height={0}/>
            </div>
          </div>
          <div className=" hidden md:block">
            <nav className=" flex gap-8 text-sm ">
              <a className=" text-white/70 hover:text-white transition" href="">Features</a>
              <a className=" text-white/70 hover:text-white transition" href="">Developers</a>
              <a className=" text-white/70 hover:text-white transition" href="">Pricing</a>
              <a className=" text-white/70 hover:text-white transition" href="">Changelog</a>
            </nav>
          </div>
          <div className=" flex gap-4 items-center">
            <Button title="Join waitlist"/>
             {/* <Menu className="h-8 w-8 md:hidden"/> */}
             <Image src='/img/menu.svg'  alt='tt' className=' w-7 h-7 md:hidden' width={0} height={0}/>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
