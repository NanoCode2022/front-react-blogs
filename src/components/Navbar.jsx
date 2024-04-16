import { useState } from "react";
import { Link } from "react-router-dom"
export function Navbar(){
  const [isOpen,setIsOpen] = useState(false)
  return(
    <nav className="flex items-center justify-between flex-wrap  p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link to="/" className="font-semibold text-xl tracking-tight">
          My Site
        </Link>
      </div>
      <div className="block lg:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="flex items-center px-3 py-2 border rounded text-white-600 border-white-800 hover:text-white hover:border-white">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
      <div className={`${isOpen ? `block` : `hidden`} w-full block flex-grow lg:flex lg:items-center lg:w-auto`}>
        <div className="relative text-sm lg:flex-grow">
          <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 text-white-800 hover:text-white-950 mr-4">
            Home
          </Link>
          <form className="lg:absolute lg:w-max lg:right-0 lg:top-0 lg:h-full w-full flex justify-end lg:flex-row flex-col lg:justify-center mb-5 items-center">
          <Link to={"/signin"}><input type="button" value="Sign In" className="lg:m-2 lg:mr-8 cursor-pointer bg-black text-white-50 px-4 py-2 text-sm font-medium rounded-full"/></Link>
          <Link to={"/create"}>
            <button className="mt-2 lg:mt-0 hover:animate-spin">
              <img src="/stroke-rounded.svg" alt="stroke-rounded" />
            </button>
          </Link>
          </form>
          
        </div>
      </div>
    </nav>
    // <div className="lg:h-16 flex flex-row">
    //   <ul className="w-1/2 flex items-center ml-2 font-semibold">
    //     <li><Link to={'/'}>Home</Link></li>
    //   </ul>
    //   <form className="w-full lg:h-full flex justify-end items-center">
    //     <input type="button" value="Sign In" className=" m-2 lg:mr-8 cursor-pointer bg-black text-white-50 px-4 py-2 text-sm font-medium rounded-full"/>
    //   </form>
    // </div>
  )
}