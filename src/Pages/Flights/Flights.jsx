import { useLocation } from "react-router-dom";
import useApi from "../../Components/ContextApi/useApi";

const Flights = () => {
    const {handlePathName} = useApi()
    const location = useLocation()
    // console.log(location.pathname)
    handlePathName(location.pathname)
    return (
        <div className="max-w-6xl px-8 mx-auto bg-white h-52 shadow-xl">
            Flights
        </div>
    );
};

export default Flights;