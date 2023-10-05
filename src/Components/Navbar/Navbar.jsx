const Navbar = () => {
  return (
    <div>
      <div className=" max-w-6xl mx-auto px-8 py-5 navbar ">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-white font-bold text-2xl">Travel BD</a>
        </div>
        <div className="flex-none gap-2">
          <div className=" gap-1 flex ">
            <button className="text-lg rounded-l-xl w-16 text-white btn-sm bg-[#00000071] hover:bg-[#0000009e]  border-none">bd</button>
            <button className="text-lg w-16 text-white btn-sm bg-[#00000071] hover:bg-[#0000009e]  border-none">en</button>
            <button className="text-lg rounded-r-xl w-16 text-white btn-sm bg-[#00000071] hover:bg-[#0000009e]  border-none">bdt</button>
          </div>
          <div className="dropdown dropdown-end">
            {/* <label tabIndex={0} className="btn btn-ghost  "> */}
              <div className="">
                <button className="btn rounded-xl btn-sm bg-[#00000071] hover:bg-[#0000009e] text-white border-none">Login</button>
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
