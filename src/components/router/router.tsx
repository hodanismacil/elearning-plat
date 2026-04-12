
import { createBrowserRouter, Outlet } from "react-router-dom";

import Navbar from "../pages/NAvbar/navbar";
import Course from "../pages/course-page/course";
import Home from "../pages/home/horosetion";


const Router=()=>{
    return(
        <div>
            <Navbar />

           <Outlet />


        </div>
    )
}

export default Router;

export const router=createBrowserRouter([
{
   path:'/',
   element:<Router />,
   children:[
    {
        path:'/',
        element:<Home />
    },
    {
        path:'/course',
        element:<Course />
    }
   ]

   
}

])