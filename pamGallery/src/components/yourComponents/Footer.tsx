import Logo from "../ui/logo";
import  {Link}  from "react-router-dom";
import { buttonVariants } from "../ui/button";
export function Footer() {
  return (
    <div className="container bg-mySecondary text-white font-primaryText rounded-2xl">
      <div className="p-10 flex flex-col md:flex-row gap-16 items-center justify-evenly">
        <div className="flex flex-col gap-2">
          <span className=" ">
        <Logo></Logo>
          </span>
          <p>PAMGallery. </p>
          <p>All rights reserved.    &copy; </p>
        </div>
   <div className="flex flex-col md:flex-row">
         
   <div className="flex items-start flex-col ">
          <Link className={`${buttonVariants({ variant: "ghost" })} flex text-orange-300 text-bold text-xl px-8 py-6 hover:text-[#F6511D] hover:bg-mySecondary `  }  to='/shop'>Shop</Link>
           <Link className={`${buttonVariants({ variant: "ghost" })} flex  text-base  px-8 py-6 hover:text-[#F6511D] hover:bg-mySecondary `  }  to='/shop'>Art prints</Link>
          <Link className={`${buttonVariants({ variant: "ghost" })} flex  text-base px-8 py-6 hover:text-[#F6511D] hover:bg-mySecondary `  }  to='/shop'>Custom Edits</Link>
        </div>
        <div className="flex    items-start  flex-col ">
          <Link className={`${buttonVariants({ variant: "ghost" })} flex text-orange-300 text-bold text-xl px-8 py-6 hover:text-[#F6511D] hover:bg-mySecondary `  }  to='/legal'>Legal</Link>
           <Link className={`${buttonVariants({ variant: "ghost" })} flex  text-base  px-8 py-6 hover:text-[#F6511D] hover:bg-mySecondary `  }  to='/legal'>Privacy Policy</Link>
          <Link className={`${buttonVariants({ variant: "ghost" })} flex  text-base px-8 py-6 hover:text-[#F6511D] hover:bg-mySecondary `  }  to='/legal'>Terms Of Service</Link>
        </div>
        <div className="flex  items-start flex-col ">
          <Link className={`${buttonVariants({ variant: "ghost" })} flex text-orange-300 text-bold text-xl px-8 py-6 hover:text-[#F6511D] hover:bg-mySecondary `  }  to='/us'>Information</Link>
           <Link className={`${buttonVariants({ variant: "ghost" })} flex  text-base  px-8 py-6 hover:text-[#F6511D] hover:bg-mySecondary `  }  to='/us'>Contact Us</Link>
          <Link className={`${buttonVariants({ variant: "ghost" })} flex  text-base px-8 py-6 hover:text-[#F6511D] hover:bg-mySecondary `  }  to='/us'>About us</Link>
        </div>

   </div>
        
      </div>
    </div>
  );
}
