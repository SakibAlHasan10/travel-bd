
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Pages/Root/Root";
// import Login from "../Components/Login/Login";
import Flights from "../Pages/Flights/Flights";
import Hotels from "../Pages/Hotles/Hotels";

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Root></Root>,
            children:[
                {
                    path: '/',
                    element:<Home></Home>,
                    children:[
                        {
                            path: '/flights',
                            element:<Flights></Flights>
                        },
                        {
                            path: '/hotels',
                            element:<Hotels></Hotels>
                        },
                    ]
                },
                
            ]
        }
    ])
    

export default router;