import AboutCompany from "../AboutCompany/AboutCompany";
import Banner from "../Banner/Banner";
import FeaturedEstates from "../FeaturedEstates/FeaturedEstates";
import ReactMarquee from "../ReactMarquee/ReactMarquee";

const Home = () => {
  return (
    <div>
      <Banner />
      <AboutCompany />
      <ReactMarquee />
      <FeaturedEstates />
    </div>
  );
};

export default Home;
