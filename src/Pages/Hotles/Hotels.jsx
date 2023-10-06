import { useLocation } from "react-router-dom";
import useApi from "../../Components/ContextApi/useApi";

const Hotels = () => {
    const {handlePathName} = useApi()
    const location = useLocation()
    // console.log(location.pathname)
    handlePathName(location.pathname)
    return (
        <div>
            hottle
        </div>
    );
};

export default Hotels;