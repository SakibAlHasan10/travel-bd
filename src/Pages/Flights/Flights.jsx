import { useLocation } from "react-router-dom";
import useApi from "../../Components/ContextApi/useApi";

const Flights = () => {
    const {handlePathName} = useApi()
    const location = useLocation()
    console.log(location.pathname)
    handlePathName(location.pathname)
    return (
        <div>
            Flights
        </div>
    );
};

export default Flights;