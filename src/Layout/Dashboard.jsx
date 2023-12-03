import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";


const Dashboard = () => {
    return (
        <div className="flex">
        {/* dashboard side bar */}
        <div className="w-64 min-h-screen  text-white bg-indigo-950 font-bold ">
            <ul className="menu px-4 pt-4">
               <li className="text-xl "><NavLink to="/dashboard/bookParcel">Book Parcel</NavLink></li>
            </ul>

            
             <ul className="menu px-4 py-1">  <li className="text-xl "><NavLink to="/dashboard/myParcel">My Parcel</NavLink></li>
             </ul>

            <ul className="menu px-4 py-1">
               <li className="text-xl "><NavLink to="/dashboard/myProfile">My Profile</NavLink></li>
            </ul>

        </div>
        {/* dashboard content */}
        <div className="flex-1 ">
            <Navbar></Navbar>
           <Outlet></Outlet>
        </div>
    </div>
);
};


export default Dashboard;