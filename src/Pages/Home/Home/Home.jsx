import AboutCompany from "../AboutCompany/AboutCompany";
import Banner from "../Banner/Banner";
import FeaturedEstates from "../FeaturedEstates/FeaturedEstates";
import ReactMarquee from "../ReactMarquee/ReactMarquee";
import TextComponent from "../TextComponent/TextComponent";
import textData from "../TextData/TextData";

const Home = () => {
  return (
    <div>
      <Banner />
      <AboutCompany />
      <ReactMarquee />
      <div className=" mt-20 md:mt-32 lg:mt-48 p-4 space-y-4">
        {/* Example of a card component */}
        <TextComponent text={textData.home} />
        <FeaturedEstates />
      </div>
    </div>
  );
};

export default Home;
