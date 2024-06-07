
import KilluaAndGon from "../../assets/images/killuaAndGon.jpg";
import NarutoAndSasuke from "../../assets/images/narutoAndSasuke.jpg";
import { Link } from "react-router-dom";
import { buttonVariants } from "@/components/ui/button"

export default function Features() {
  return (
    <div className="container font-primaryText flex flex-col gap-16 bg-mySecondary p-16 rounded-2xl ">
      <div className="flex flex-col   items-center justify-center md:flex-row">
        <div className="rounded-2xl max-w-2xl h-full">
          <img
            className="object-cover rounded-2xl w-full"
            src={KilluaAndGon}
          ></img>
        </div>
        <div className="flex  p-2 text-left md:p-16 gap-4 flex-col">
          <h2 className="text-4xl font-bold  text-white">
            Exclusive Anime Art
          </h2>
          <p className="text-white font-normal text-lg">
            {" "}
            We offer a wide range of exclusive anime art pieces
          </p>
          <Link to='/login/collections' className={`${buttonVariants({ variant: "outline" })} bg-mySecondary text-xl border-2 border-[#F6511D] shadow-2xl hover:bg-[#F6511D] hover:text-white  text-[#F6511D] py-8 rounded-2xl font-bold`}>Click here</Link>

        </div>
        
      </div>
      <div className="flex flex-col-reverse  items-center justify-center md:flex-row">
      <div className="flex p-2 text-left  md:p-16 gap-4 flex-col">
          <h2 className="text-4xl font-bold  text-white">
          Custom Anime Edits
          </h2>
          <p className="text-white font-normal text-lg">
            {" "}
            Get your favorite anime characters edited to your liking
          </p>
          <Link to='/login/collections' className={`${buttonVariants({ variant: "outline" })} bg-mySecondary text-xl border-2 border-[#F6511D] shadow-2xl hover:bg-[#F6511D] hover:text-white  text-[#F6511D] py-8 rounded-2xl font-bold`}>Click here</Link>

        </div>
        <div className="rounded-2xl max-w-2xl h-full">
          <img
            className="object-cover rounded-2xl w-full"
            src={NarutoAndSasuke}
          ></img>
        </div>
      </div>
    </div>
  );
}
