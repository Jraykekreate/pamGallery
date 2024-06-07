import Luffy from "../../assets/images/luffy.png";
import { AspectRatio } from "../ui/aspect-ratio";
import { Button } from "@/components/ui/button";
console.log(Luffy);

const goldenRatio = 1.618033988;
export default function HeroSection() {
  return (
    <div className="container  font-primaryText relative font-secondaryText flex flex-col md:flex-row items-center">
      <div className="flex  text-center md:text-left   flex-col py-2 space-y-2 gap-4 px-4">
        <h1 className="text-4xl md:text-7xl font-bold">Welcome To PicAnime</h1>
        <p className="text-2xl font-normal">This is a gallery of anime</p>
        <p className="text-base text-myTetiary ">
          Join our community and start selling your anime pictures today!
        </p>
        <div className="w-full flex justify-center md:justify-start space-x-8">
          <Button className="px-8 py-6 border-2 text-xl font-bold border-mySecondary hover:bg-white hover:text-mySecondary hover:shadow-lg">
            Get Started
          </Button>
          <Button
            className="px-8 py-6 border-2 text-xl font-bold border-mySecondary hover:bg-mySecondary hover:text-white hover:shadow-lg"
            variant="outline"
          >
            Outline
          </Button>
        </div>
      </div>

        <AspectRatio ratio={goldenRatio / 1}>
        <img className="h-full mx-auto " src={Luffy}></img>
       </AspectRatio>
   
        
   
    
    </div>
  );
}
