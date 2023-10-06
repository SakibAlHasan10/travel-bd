import { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [colorChange, setColorChange] = useState(false);
  const changeNavColor = () => {
    if (window.scrollY >= 80) {
      console.log("hello");
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };
  const nav = (
    <>
      <li>
        <Link>Flights</Link>
      </li>
      <li>
        <Link>Hotels</Link>
      </li>
      <li>
        <Link>Travel Blog</Link>
      </li>
    </>
  );
  window.addEventListener("scroll", changeNavColor);
  return (
    <div className={`${colorChange ? "bg-white" : "bg-none"} fixed xl:px-[6.8rem] navbar`}>
      <div
        className={`  navbar  top-0 max-w-6xl px-8 `}
      >
        <div className="w-1/2 ">
          <div className="">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {nav}
              </ul>
            </div>
            <a className="btn btn-ghost normal-case text-white font-bold text-2xl">
              Travel BD
            </a>
          </div>

          <div className=" hidden lg:flex">
            <ul className="menu menu-horizontal text-white text-lg font-semibold px-1">
              
              {nav}
            </ul>
          </div>
        </div>
        <div className="w-1/2 navbar-end gap-2">
          <div className=" gap-1 flex ">
            <div className="flex">
              <button className="text-lg rounded-l-xl w-24  text-white btn-sm bg-[#00000071] hover:bg-[#0000009e] flex items-center gap-3 border-none">
                BD
                <img
                  src="/down-arrow-7425.png"
                  alt="arrow"
                  className=" pr-2 w-8 h-4 pt-1 "
                />
              </button>
            </div>
            <button className="text-lg w-20 text-white btn-sm bg-[#00000071] hover:bg-[#0000009e] flex items-center gap-3 border-none">
              EN
              <img
                src="/down-arrow-7425.png"
                alt="arrow"
                className="  w-8 h-4 pt-1 "
              />
            </button>
            <button className="text-lg rounded-r-xl w-24 text-white btn-sm bg-[#00000071] hover:bg-[#0000009e] flex items-center gap-3 border-none">
              BDT
              <img
                src="/down-arrow-7425.png"
                alt="arrow"
                className=" pr-2 w-8 h-4 pt-1 "
              />
            </button>
          </div>
          <div className="dropdown dropdown-end">
            {/* <label tabIndex={0} className="btn btn-ghost  "> */}
            <div className="">
              <button className="btn rounded-xl btn-sm bg-[#00000071] hover:bg-[#0000009e] text-white border-none">
                Login
              </button>
            </div>
            {/* </label> */}
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
