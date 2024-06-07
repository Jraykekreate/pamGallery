import Logo from "../ui/logo";
import {  Link } from "react-router-dom";
import { buttonVariants } from "@/components/ui/button"
import 'animate.css';
import {Divide as Hamburger} from 'hamburger-react'
import { useState } from "react";

//Links Will Be On Backend
const links:string[] = ['Discover' ,'About Us', 'Sign Up', 'Login' ]
const animateSlow:string = 'animate__animated animate__fadeInRightBig'


function HamContainer() {
  const [isOpen, setOpen] = useState<boolean>(false)
  return <div className="relative " >
        <span className="relative z-50"><Hamburger toggled={isOpen} toggle={setOpen} /></span>
       
        {isOpen ?  <SideBar></SideBar> : null}    
      
      </div> 
  
  
}

function SideBar() {
  return (<div className={` right-0 top-0 w-72 fixed z-40 bg-primaryBg  shadow-2xl rounded rounded-l-2xl  h-screen ${animateSlow}`}> 
  
    <div className="link-container flex flex-col w-full h-full py-24   gap-16 ">
      
        {links.map((link)=>{ return <div className="border-b-2 hover:border-mySecondary  hover:text-mySecondary  px-8 py-2 font-bold text-xl  text-Raleway text-left text-primary border-primary ">
                   <Link key={link} to={link}>{link}</Link>
               </div>
          })}
    </div>
  
  
  </div>)
  
}

function RenderLinks() {

    return (
    <>
     <div className=" gap-2 hidden md:flex">{links.map((link , i ) => i === 3 ? <Link className={`${buttonVariants({ variant: "outline" })}  flex text-bold text-xl px-10 py-6 border-2 border-mySecondary hover:bg-mySecondary hover:text-white`} key={link} to={`${link}`}>{link}</Link>:
      <Link className={`${buttonVariants({ variant: "ghost" })} flex text-bold text-xl px-10 py-6 `  }  key={link} to={`${link}`}>{link}</Link>)}
     </div>
     <div className="md:hidden flex ">
       <HamContainer ></HamContainer>
     </div>
    </>
  
    )
}

export default function Navbar ( ) {
  return (
    <nav className=" w-full  transition-all hover:shadow-lg font-primaryText">
    <div className=" container p-4 mx-auto flex items-center justify-between  ">
        <Logo></Logo>

        {<RenderLinks></RenderLinks>}
    </div>
    </nav>
  );
}


///fixTheAnimations and yeah thats it