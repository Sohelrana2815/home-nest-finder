import Marquee from "react-fast-marquee";
import { FaHome } from "react-icons/fa";
const ReactMarquee = () => {
  return (
    <div className="flex items-center justify-center w-full py-4 mt-20 ">
      <div className="bg-black rounded-full px-8 py-3 flex items-center justify-center overflow-hidden max-w-screen-lg">
        <Marquee gradient={false} speed={50}>
          <div className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold flex items-center space-x-12">
            <span className="flex items-center gap-2 md:gap-3 lg:gap-4 ml-5 lg:ml-8 md:ml-4">
              <FaHome className="text-xl md:text-2xl lg:text-3xl" /> Townhouse
            </span>
            <span className="flex items-center gap-2 md:gap-3 lg:gap-4">
              <FaHome className="text-xl md:text-2xl lg:text-3xl" /> Loft
            </span>
            <span className="flex items-center gap-2 md:gap-3 lg:gap-4">
              <FaHome className="text-xl md:text-2xl lg:text-3xl" /> Penthouse
            </span>
            <span className="flex items-center gap-2 md:gap-3 lg:gap-4">
              <FaHome className="text-xl md:text-2xl lg:text-3xl" /> House
            </span>
            <span className="flex items-center gap-2 md:gap-3 lg:gap-4">
              <FaHome className="text-xl md:text-2xl lg:text-3xl" /> Villas
            </span>
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default ReactMarquee;
