import { createBrowserRouter, Outlet } from "react-router-dom";

import Navbar from "../pages/NAvbar/navbar";
import Course from "../pages/course-page/course";
import Home from "../pages/home/horosetion";
import About from "../pages/about-page/about";
import Contact from "../pages/contact-page/contact";
import Dashboard from "../dashbourd/Dashboard";
import Courses from "../dashbourd/my-courses";
import AdminDashboard from "../dashbourd/admindashbourd";
import Login from "../login/login";
import Footer from "../footer/footer";


// Layout
const Router = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Router;


// ROUTES
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Router />,
    children: [

      {
        path: '/',
        element: <Home />
      },
      {
        path: '/course',
        element: <Course />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/admindashboard',
        element: <AdminDashboard />
      },

      // ✅ DASHBOARD
      {
        path: '/dashboard',
        element: <Dashboard />,
        children: [
          {
            path: 'courses',
            element: <Courses />
          },
          {
            path:"Progress",
            element:<progress/>
          }
        ]
      }

    ]
  }
]);