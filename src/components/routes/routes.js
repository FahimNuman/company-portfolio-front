import Home from "../Pages/Home/Home";
import Main from "../Pages/Shared/Layout/Main";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([

    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home/>
            }
        ]
    }

])

export default router;