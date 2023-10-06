import Login from "../../Components/Login/Login";
import Navbar from "../../Components/Navbar/Navbar";
import Modal from "react-modal";
import SearchButton from "../../Sheare/SearchButton/SearchButton";

Modal.setAppElement('#root')
const Home = () => {
    return (
        <div className="h-[150vh]">
            <div className="bg-[url('https://i.ibb.co/x25pHyh/mohamed-nohassi-odx-B5o-IG-i-A-unsplash.jpg')] w-full h-[85vh] bg-cover bg-center bg-no-repeat rounded-b-[20%]">
            <div className="">
            <Navbar></Navbar>
            </div>
            <div className="flex font-bold text-center text-white h-[60vh] items-center justify-center">

            <h2 className="text-3xl md:text-4xl">Discover the real value of travel</h2>
            </div>
            <Login></Login>
            <SearchButton></SearchButton>
            </div>
        </div>
    );
};

export default Home;