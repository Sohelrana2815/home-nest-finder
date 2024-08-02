import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import banner1 from "../../../assets/Banner-img/banner1.jpg";
import banner2 from "../../../assets/Banner-img/banner2.jpg";
import banner3 from "../../../assets/Banner-img/banner3.jpg";
import { FaArrowRight, FaBeer } from "react-icons/fa";
const Banner = () => {
  return (
    <>
      <div className="border  flex p-4">
        <div className="border w-3/4">
          <h2 className="text-7xl font-bold leading-snug">
            Discover your dream <br /> home with us
          </h2>
        </div>
        <div className="border w-3/12 mt-10 ">
          <p className="text-gray-500">
            Embark on a journey through the expansive world of real estate,
            where opportunities unfold in a myriad of possibilities.
          </p>
          <p className="mt-4 text-black font-bold ">
            View all properties
            <span className="btn btn-xs border btn-outline border-black btn-circle ml-3">
              <FaArrowRight />
            </span>
          </p>
        </div>
      </div>
      <Carousel>
        <div>
          <img src={banner1} className="rounded-2xl" />
        </div>
        <div>
          <img src={banner2} className="rounded-2xl" />
        </div>
        <div>
          <img src={banner3} className="rounded-2xl" />
        </div>
      </Carousel>
    </>
  );
};

export default Banner;
