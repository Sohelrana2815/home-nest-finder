import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import banner1 from "../../../assets/Banner-img/banner1.jpg";
import banner2 from "../../../assets/Banner-img/banner2.jpg";
import banner3 from "../../../assets/Banner-img/banner3.jpg";
import { FaArrowRight } from "react-icons/fa";
const Banner = () => {
  return (
    <>
      <div className=" flex flex-col md:flex-row p-4 mt-10 lg:p-4">
        <div className=" w-full md:w-3/4">
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-semibold">
            Discover your dream{" "}
            <span className="block mt-2 lg:mt-4">home with us</span>
          </h2>
        </div>
        <div className=" w-full md:w-3/12 mt-4 md:mt-10">
          <p className="text-gray-500">
            Embark on a journey through the expansive world of real estate,
            where opportunities unfold in a myriad of possibilities.
          </p>
          <p className="mt-4 text-black font-bold">
            View all properties
            <span className="btn btn-xs  btn-outline border-black btn-circle ml-3">
              <FaArrowRight />
            </span>
          </p>
        </div>
      </div>
      <Carousel>
        <div>
          <img src={banner1} className="rounded-2xl" />
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 container h-10 w-20 py-1 rounded-full mx-auto border bg-slate-800 hidden lg:block"></div>
          </div>
        </div>
        <div>
          <img src={banner2} className="rounded-2xl" />
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 container h-10 w-20 py-1 rounded-full mx-auto border bg-slate-800 hidden lg:block"></div>
          </div>
        </div>
        <div>
          <img src={banner3} className="rounded-2xl" />
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 container h-10 w-20 py-1 rounded-full mx-auto border bg-slate-800 hidden lg:block"></div>
          </div>
        </div>
      </Carousel>
    </>
  );
};

export default Banner;
