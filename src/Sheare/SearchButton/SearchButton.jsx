import { MdFlight } from "react-icons/md";
import { LiaHotelSolid } from "react-icons/lia";
import { NavLink } from "react-router-dom";
import useApi from "../../Components/ContextApi/useApi";
const SearchButton = () => {
  const { pathName } = useApi();

  return (
    <div className="max-w-6xl mx-auto flex items-center">
      <NavLink
        to={`/flights`}
        className={({ isActive }) =>
          isActive
            ? " active bg-white rounded-ss-xl text-black"
            : "rounded-ss-xl bg-[#00000052] text-white"
        }
      >
        <button className="flex gap-2 items-center py-5 px-8 text-xl">
          <div
            className={`${
              pathName == "/flights" ? "text-black " : "text-white"
            } text-4xl `}
          >
            <MdFlight />
          </div>
          Flights
        </button>
      </NavLink>
      <NavLink
        to={`/hotels`}
        className={({ isActive }) =>
          isActive
            ? " active bg-white rounded-tr-xl text-black"
            : "rounded-tr-xl bg-[#00000052] text-white"
        }
      >
        <button className="flex gap-2 items-center py-5 px-8 text-xl">
          <div
            className={`${
              pathName == "/hotels" ? "text-black " : "text-white"
            } text-4xl `}
          >
            <LiaHotelSolid />
          </div>
          Hotels
        </button>
      </NavLink>
    </div>
  );
};

export default SearchButton;
