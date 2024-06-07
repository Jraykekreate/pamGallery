import { Link } from 'react-router-dom'
import './ChoosePam.css'
import { buttonVariants } from '../ui/button'
export function ChoosePam() {
  return (
    <div className="container p-4  bg-mySecondary font-primaryText rounded-2xl ">
      <div className="flex flex-col items-center justify-center p-10 gap-4 ">
        {" "}
        <div className="font-bold text-white text-3xl">Why Choose PicAniMe</div>
        <div className="text-white text-lg">
          We are dedicated to providing the best anime art and edits
        </div>
      </div>
      <div className="cards gap-8 flex flex-col md:flex-row justify-between p-10">
        <div className="  max-w-lg">
          <h1 className="text-3xl md:text-5xl text-white font-bold">High Quality</h1>
          <p className='text-white my-8'>We ensure all our art pieces are of the highest quality</p>
        </div>
        <div className=" max-w-lg">
          <h1 className="text-3xl md:text-5xl text-white font-bold">Wide Variety</h1>
          <p className='text-white my-8'>We offer a wide range of anime art and edits</p>
        </div>
        <div className=" max-w-lg">
          <h1 className="text-3xl md:text-5xl text-white font-bold">Custom Edits</h1>
          <p className='text-white my-8'>Get your favorite anime characters edited to your liking</p>
        </div>
    

      </div>
      <div className='flex items-center justify-center mb-8'>     <Link className={`${buttonVariants({ variant: "outline" })} mx-auto flex text-bold text-xl px-16 py-8 border-2 border-mySecondary hover:border-white hover:bg-mySecondary hover:text-white`}  to='/signup'>Join Us</Link>
 </div>
    </div>
  );
}
