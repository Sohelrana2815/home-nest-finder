import AboutCompany from "../AboutCompany/AboutCompany";
import Banner from "../Banner/Banner";
import FeaturedEstates from "../FeaturedEstates/FeaturedEstates";
import ReactMarquee from "../ReactMarquee/ReactMarquee";
import TextContent from "../TextContent/TextContent";

const Home = () => {
  return (
    <div>
      <Banner />
      <AboutCompany />
      <ReactMarquee />
      <TextContent />
      <FeaturedEstates />
    </div>
  );
};

export default Home;
