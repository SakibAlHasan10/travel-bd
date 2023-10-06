import { MdFlight } from "react-icons/md";
import { LiaHotelSolid } from "react-icons/lia";
const SearchButton = () => {
    return (
        <div className="max-w-6xl px-8 mx-auto flex items-center">
            <button className=" bg-[#00000052] text-white rounded-ss-xl flex gap-2 items-center py-5 px-8 text-xl">
                <div className="text-4xl text-white">
                <MdFlight/>
                </div>
                Flights
            </button>
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