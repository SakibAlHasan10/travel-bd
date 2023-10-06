import { MdFlight } from "react-icons/md";
import { LiaHotelSolid } from "react-icons/lia";
import { NavLink, useLocation } from "react-router-dom";
const SearchButton = () => {
    const location = useLocation()
    console.log(location)
    return (
        <div className="max-w-6xl px-8 mx-auto flex items-center">
            <NavLink
          to={`/flights`}
          className={({ isActive,  }) =>
            isActive ? " active bg-white rounded-ss-xl text-black" :  "rounded-ss-xl bg-[#00000052] text-white"}
        >
            <button className="    flex gap-2 items-center py-5 px-8 text-xl">
            <div className={`text-[#00000052] text-4xl `}>
                <MdFlight/>
                </div>
                Flights
            </button>
        </NavLink>
            <button className=" bg-[#00000052] text-white rounded-tr-xl flex gap-2 items-center py-5 px-8 text-xl">
                <div className="text-4xl">
                <LiaHotelSolid/>
                </div>
                Hotels
            </button>
        </div>
    );
};

export default SearchButton;