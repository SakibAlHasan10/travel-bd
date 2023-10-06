import { Link } from "react-router-dom";

const Navbar = () => {
    const nav = <>
    <li><Link>Flights</Link></li>
    <li><Link>Hotels</Link></li>
    <li><Link>Travel Blog</Link></li>
    </>
  return (
    <div className="  fixed top-0 max-w-screen-xl">
      <div className=" navbar w-full ">
        <div className="flex-1 ">
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
                {/* <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Parent</a>
                  <ul className="p-2">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>Item 3</a>
                </li> */}
              </ul>
            </div>
            <a className="btn btn-ghost normal-case text-white font-bold text-2xl">
              Travel BD
            </a>
          </div>
        
        <div className=" hidden lg:flex">
          <ul className="menu menu-horizontal text-white text-lg font-semibold px-1">
            {/* <li>
              <a>Item 1</a>
            </li>
            <li tabIndex={0}>
              <details>
                <summary>Parent</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Item 3</a>
            </li> */}
            {nav}
          </ul>
        </div>
        </div>
        <div className="flex-1 gap-2">
          <div className=" gap-1 flex ">
            <div className="flex">
              <button className="text-lg rounded-l-xl w-24 text-white btn-sm bg-[#00000071] hover:bg-[#0000009e] flex items-center gap-3 border-none">
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
