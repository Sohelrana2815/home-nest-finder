import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

const Root = () => {
  return (
    <div className="container mx-auto px-4 max-w-screen-xl ">
      <main className="min-h-screen">
        <Navbar />
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default Root;
