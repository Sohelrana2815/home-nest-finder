import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar/Navbar";
import Footer from "../Components/Shared/Footer/Footer";

const Root = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="container mx-auto px-4 max-w-screen-xl flex-grow">
          <Navbar />
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Root;
