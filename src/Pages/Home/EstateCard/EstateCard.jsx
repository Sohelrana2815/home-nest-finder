import { FaMapMarkerAlt } from "react-icons/fa";

const EstateCard = ({ estate }) => {
  const { id, estate_title, location, price, status, image } = estate;

  return (
    <>
      <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-sm mx-auto sm:max-w-none sm:w-full">
        <div className="relative">
          <img
            src={image}
            alt={estate_title}
            className="w-full h-64 object-cover"
          />
          <div className="absolute top-4 left-4 bg-white text-black text-sm px-3 py-1 rounded-full shadow-md">
            {status}
          </div>
          <div className="absolute top-4 right-4 bg-black text-white text-sm px-3 py-1 rounded-full shadow-md">
            {price}
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg md:text-xl font-semibold">{estate_title}</h3>
          <div className="flex items-center text-gray-500 mt-2">
            <FaMapMarkerAlt className="mr-2" />
            <p className="text-sm md:text-base">{location}</p>
          </div>
          <div className="mt-4">
            <button
              className="bg-black  text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition duration-300"
              onClick={() => alert("View Property clicked")}
            >
              View Property
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EstateCard;
