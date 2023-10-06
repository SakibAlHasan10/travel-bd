
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Pages/Root/Root";
import Login from "../Components/Login/Login";

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Root></Root>,
            children:[
                {
                    path: '/',
                    element:<Home></Home>
                },
                {
                    path: '/login',
                    element:<Login></Login>
                },
            ]
        }
    ])
    

export default router;