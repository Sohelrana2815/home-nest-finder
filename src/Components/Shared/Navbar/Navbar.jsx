import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut().then().catch();
  };
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
    </>
  );
  return (
    <>
      <div className="navbar bg-base-100 mt-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost lg:text-3xl text-xl font-outfit">
            Home Nest Finder
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="avatar tooltip"
              data-tip={user ? user.displayName : ""}
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Profile"
                  src={
                    user ? user.photoURL : "/src/assets/ProfileImg/profile.png"
                  }
                />
              </div>
            </div>
            {/*  */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="hover:bg-black hover:text-white">User settings</a>
              </li>
              <li>
                {user ? (
                  <button
                    onClick={handleLogOut}
                    className="hover:bg-black hover:text-white"
                  >
                    Sign out
                  </button>
                ) : (
                  <Link to="/login" className="hover:bg-black hover:text-white">
                    Login
                  </Link>
                )}
              </li>
            </ul>
          </div>
          {user ? (
            <button
              onClick={handleLogOut}
              className="hidden lg:inline-block  bg-black text-white 
                  py-2 px-2  rounded-xl
                hover:bg-gray-800 mb-1 ml-2"
            >
              Sign out
            </button>
          ) : (
            <Link to="/login" className="ml-2">
              <button
                className="hidden lg:inline-block bg-black text-white py-2 px-4 rounded-xl
           hover:bg-gray-800 mb-1"
              >
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
