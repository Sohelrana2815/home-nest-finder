import { Helmet } from "react-helmet-async";
import TextComponent from "../Home/TextComponent/TextComponent";
import textData from "../Home/TextData/TextData";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About | Home Nest Finder</title>
      </Helmet>
      <div className="flex">
        <p className="text-5xl font-bold w-1/2">
          <TextComponent text={textData.about} />
        </p>
        <p className="w-1/2">
          At EstatePro highlighting your properties best aspects, we understand
          that every property has a unique story waiting to be told. Our expert
          team is dedicated to helping you craft a success story that highlights
          the best aspects of your property.
        </p>
      </div>
      <div className="flex flex-col md:flex-row md:justify-around w-full lg:w-1/2 text-center space-y-10 md:space-y-0 md:space-x-8 px-4">
        <div>
          <p className="text-gray-600">Satisfaction rate</p>
          <h2 className="text-4xl lg:text-7xl font-semibold mt-2 text-gray-900">
            99%
          </h2>
        </div>
        <div>
          <p className="text-gray-600">Happy clients</p>
          <h2 className="text-4xl lg:text-7xl font-semibold mt-2 text-gray-900">
            15K
          </h2>
        </div>
        <div>
          <p className="text-gray-600">Expert agents</p>
          <h2 className="text-4xl lg:text-7xl font-semibold mt-2 text-gray-900">
            45+
          </h2>
        </div>
      </div>
    </>
  );
};

export default About;
