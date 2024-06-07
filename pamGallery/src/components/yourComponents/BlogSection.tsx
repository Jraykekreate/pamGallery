import { buttonVariants } from "../ui/button";
import { Link } from "react-router-dom";
import Gojo from "../../assets/images/gojo.jpg";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function Blogs() {
  return (
    <div className="container flex flex-col items-center  justify-evenly font-primaryText my-16">
      <div className="flex flex-col   gap-4 my-16 text-center">
        <h1 className="text-4xl font-bold">Latest Blog Posts</h1>
        <h3 className="text-lg text-myTetiary font-normal">
          {" "}
          Stay updated with the latest anime news and trends
        </h3>
      </div>

      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <Card></Card>
          </CarouselItem>
          <CarouselItem>
            <Card></Card>
          </CarouselItem>

          <CarouselItem>
            <Card></Card>
          </CarouselItem>

          <CarouselItem>
            <Card></Card>
          </CarouselItem>

          <CarouselItem>
            <Card></Card>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <Link
        to="/blogs"
        className={`${buttonVariants({
          variant: "outline",
        })}text-bold text-xl px-12 py-8 my-16 border-2 border-mySecondary text-mySecondary hover:bg-mySecondary hover:text-white `}
      >
        View All Posts
      </Link>
    </div>
  );
}
function Card() {
  return (
<div className="flex bg-white rounded-3xl flex-col md:flex-row gap-8 overflow-none">
  <div className="image flex justify-start md:h-72">
    <img src ={Gojo} className="max-w-full rounded-3xl max-h-full object-scale-down"></img>
  </div>
  <div className=" flex flex-col gap-8 text py-4 px-4   justify-center text-center ">
    <h1 className="font-bold text-xl">Top 10 Anime Edits Of 2022 </h1>
    <h2 className="font-normal text-base text-myTetiary">Check Out Our Top picks for anime in 2022 </h2>
    <h3 className="font-bold text-base">A ROUNDUP OF THE BEST ANIME ART THIS YEAR</h3>
  </div>
</div>
  );
}
