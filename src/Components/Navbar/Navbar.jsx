import { useState } from "react";
import { Link } from "react-router-dom";
import NavButton from "../../Sheare/NavButton";
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
    <div className={`${colorChange ? "bg-white" : "bg-none"} md:fixed xl:px-[6.8rem] md:navbar py-0`}>
      <div
        className={`  md:navbar  top-0 max-w-6xl px-8 `}
      >
        <div className={` w-full md:w-1/2 ${colorChange ? "text-black" : "text-white"}`}>
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
                className="menu menu-sm text-black dropdown-content -mt-2 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {nav}
              </ul>
            </div>
            <div className="btn  btn-ghost  normal-case  font-bold text-2xl">

            <a >
              Travel BD
            </a>
            </div>
          </div>

          <div className=" hidden lg:flex">
            <ul className="menu menu-horizontal text-lg font-semibold px-1">
              
              {nav}
            </ul>
          </div>
        </div>
        <div className=" w-full md:w-1/2 flex justify-center md:justify-end navbar-end gap-2">
          <div className="  flex ">
            <div className={`flex rounded-l-xl ${colorChange ? "bg-white text-black hover:bg-[#f6f5f5]  border border-slate-500" : "bg-[#00000071] text-white hover:bg-[#0000009e] border-none"}`}>

              <NavButton colorChange={colorChange}>en</NavButton>
            </div>
            <div className={`flex ${colorChange ? "bg-white hover:bg-[#f6f5f5] text-black  border-y border-slate-500" : "bg-[#00000071] text-white hover:bg-[#0000009e] border-x border-[#ffffff38]"}`}>

              <NavButton colorChange={colorChange}>en</NavButton>
            </div> 
            <div className={`flex rounded-r-xl ${colorChange ? "bg-white hover:bg-[#f6f5f5] text-black  border border-slate-500" : "bg-[#00000071] text-white hover:bg-[#0000009e] border-none"}`}>

              <NavButton colorChange={colorChange}>en</NavButton>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <div className="">
              <button className={`btn capitalize rounded-xl btn-sm ${colorChange ? "bg-white text-black  border border-slate-500" : "bg-[#00000071] text-white hover:bg-[#0000009e] border-none"}`}>
                Login
              </button>
            </div>
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
