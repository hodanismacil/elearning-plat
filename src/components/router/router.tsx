
import { createBrowserRouter } from "react-router-dom";
import Horosetion from "../pages/home/horosetion";
import Navbar from "../pages/NAvbar/navbar";


const Router=()=>{
    return(
        <div>
            <Navbar />
            <Horosetion />

        </div>
    )
}

export default Router;

export const router=createBrowserRouter([
{
   path:'/',
   element:<Router />

},
{
    path:'/',
    element:<Horosetion />
}
])