import { Link } from "react-router-dom";
import { buttonVariants } from "../ui/button";
export default function Menu() {
  return (
    <div className="container p-4 font-primaryText text-mySecondary">
      <div className="flex flex-col items-center justify-center p-10 gap-4 ">
        {" "}
        <div className="font-bold text-3xl">What's On The Menu</div>
        <div className=" text-lg">
        We offer a wide range of services to cater to all anime art lovers
        </div>
      </div>
      <div className="cards gap-8 flex flex-col md:flex-row justify-between p-10">
        <div className="  max-w-lg">
          <h1 className="text-5xl  font-bold">Anime Art Prints</h1>
          <p className=' my-8'>High-quality prints of your favorite anime art</p>
        </div>
        <div className=" max-w-lg">
          <h1 className="text-5xl  font-bold">Custom Anime Edits
</h1>
          <p className=' my-8'>Get your favorite anime characters edited to your liking</p>
        </div>
        <div className=" max-w-lg">
          <h1 className="text-5xl  font-bold">Anime Wallpapers</h1>
          <p className=' my-8'>Anime-themed wallpapers for your devices</p>
        </div>
      </div>
      <div className="cards gap-8 flex flex-col md:flex-row justify-between p-10">
        <div className="  max-w-lg">
          <h1 className="text-5xl  font-bold">Anime Stickers</h1>
          <p className=' my-8'>Decorate anime your belongins with our anime stickers </p>
        </div>
        <div className=" max-w-lg">
          <h1 className="text-5xl  font-bold">Anime Posters</h1>
          <p className=' my-8'>Decorate anime your belongins with our anime stickers</p>
        </div>
        <div className=" max-w-lg">
          <h1 className="text-5xl  font-bold">Anime Merch</h1>
          <p className=' my-8'>A collection of anime-themed merchandise</p>
        </div>
        
  

      </div>
      <div className='flex my-4 items-center justify-center mb-8'> <Link className={`${buttonVariants({ variant: "outline" })} mx-auto flex text-bold text-xl px-16 py-8 border-2 border-mySecondary hover:border-white hover:bg-mySecondary hover:text-white`}  to='/services'>View All Services</Link>
 </div>
    </div>
  );
}
