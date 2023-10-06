import { useLocation } from "react-router-dom";
import useApi from "../../Components/ContextApi/useApi";

const Hotels = () => {
    const {handlePathName} = useApi()
    const location = useLocation()
    handlePathName(location.pathname)
    return (
        <div className="max-w-6xl p-5 mx-auto bg-white h-52 shadow-xl rounded-tr-xl rounded-b-xl">
        <p className="text-lg font-medium">Where do you want to stay?</p>
        <div className="flex gap-2 mt-4">
            <input type="text"
            
             className="border h-16 w-2/5 rounded-xl"/>
            <div className="w-2/5">
                <input type="text" className="border h-16 w-1/2 rounded-l-xl"/>
                <input type="text" className="border h-16 w-1/2 rounded-r-xl"/>
            </div>
            <input type="text" className="border h-16 w-1/5 rounded-xl"/>
        </div>
        <input type="checkbox" 
        width={'10px'}
        height={10}
        className="" />
        </div>
    );
};

export default Hotels;