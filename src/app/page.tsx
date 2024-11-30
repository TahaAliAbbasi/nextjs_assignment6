'use client'
import Link from "next/link";
import Image from "next/image";
import {useState} from "react"
import Main from "./components/main";

export default function Home() {
    const [showContainer,setShowContainer] = useState(false)
    const handleToggle =()=>{
      setShowContainer(!showContainer)
    }
    
  

  return (
    <div>
      <nav className="max-w-screen w-[99%] bg-gray-400 bg-opacity-5 absolute top-0 right-0 left-0 m-0 shadow-md shadow-blue-900">
      <div className="hidden md:flex justify-between place-items-center max-w-screen min-w-screen w-screen">
        <div>
          <Image src="/logo.png" alt="logo" width={80} height={80} />
        </div>
        <div className="flex gap-x-4 m-3">
          <Link
            href="/"
            className=" bg-black text-white rounded-2xl px-4 py-1  border-2 border-white h-max hover:text-black hover:bg-white hover:border-black hover:scale-125 shadow-md shadow-blue-900 hover:shadow-md hover:shadow-blue-900"
          >
            Home
          </Link>
          <Link
            href="/"
            className=" bg-black text-white rounded-2xl px-4 py-1  border-2 border-white h-max hover:text-black hover:bg-white hover:border-black hover:scale-125 shadow-md shadow-blue-900hover:shadow-md hover:shadow-blue-900"
          >
            About
          </Link>
          <Link
            href="/"
            className=" bg-black text-white rounded-2xl px-4 py-1  border-2 border-white h-max hover:text-black hover:bg-white hover:border-black hover:scale-125 shadow-md shadow-blue-900hover:shadow-md hover:shadow-blue-900"
          >
            Contact
          </Link>
        </div>
      </div>
      

      <div className="hidden max-md:flex justify-between  max-w-screen min-w-screen w-screen m-3">
        <div >
          <Image src="/logo.png" alt="logo" width={80} height={80} />
        </div>

        <div className="flex flex-col">
        <button onClick={handleToggle} className="rounded-2xl px-1 py-1 border-2 border-white h-max hover:bg-white absolute right-1 top-5 hover:border-black hover:scale-125" ><Image className="px-2 py-1" src="/menu.png" alt="logo" width={50} height={50} /></button>
        
        
        {showContainer && (
          <div className={"flex flex-col items-center justify-center gap-y-4 m-3  absolute right-1 top-14  border-2 border-blue-800 shadow-md shadow-blue-900 bg-black hover:bg-whiteborder-black h-max"}>
          <Link
            href="/"
            className='  text-white  px-4 py-1     hover:scale-125'
          >
            Home
          </Link>
          <Link
            href="/"
            className="  text-white  px-4 py-1    hover:scale-125"
          >
            About
          </Link>
          <Link
            href="/"
            className="  text-white  px-4 py-1   hover:scale-125"
          >
            Contact
          </Link>
        </div>
        )}
        </div>

        
        
      </div>
      </nav>
        <div className="flex flex-col md:flex-row m-6 mt-36 justify-center items-center" >
        <Main />
        <Main />
        <Main />
        <Main />
        </div>
        
  
    </div>
  );
}
