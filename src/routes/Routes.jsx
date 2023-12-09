import { createBrowserRouter } from "react-router-dom";
import Root from "../layOuts/Root";
import Home from "../pages/Home/Home";
import Login from "./Login";
import Register from "../pages/Register/Register";
import CourseDetails from "../pages/courseDetails/CourseDetails";
import PrivetRoute from "./PrivetRoute";
import Error from "../pages/ErrorPage/Error";
import Classes from "../pages/Classes/Classes";
import About from "../pages/About/About";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement:<Error></Error>,
        children:[
            {
                path:'/',
                element: <Home></Home>,
                loader:() =>fetch('/topics.json')
            },
            {
                path:'/courses/:id',
                element:<PrivetRoute><CourseDetails></CourseDetails></PrivetRoute>,
                loader:() =>fetch('/topics.json')
            },
            {
                path:'/classes',
                element:<PrivetRoute><Classes></Classes></PrivetRoute>,
                loader:() =>fetch('/class.json')
            },
            {
                path:'/about',
                element:<PrivetRoute><About></About></PrivetRoute>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]
    }
]);

export default router;