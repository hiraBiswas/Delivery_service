import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";



const Dashboard = () => {
const isAdmin = true;
    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen  text-white bg-indigo-950 font-bold ">
                <ul className="menu px-4 pt-4">

                    {
                        isAdmin ? <>
                            <li>
                                <NavLink to="/dashboard/allUser">

                                    All User</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/allParcel">

                                    All Parcel</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/deliveryman">

                                    All Deliveryman</NavLink>
                            </li>
                            {/* <li>
                                <NavLink to="/dashboard/bookings">
                                   
                                    Manage Bookings</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/users">
                                   
                                    All Users</NavLink>
                            </li> */}
                      </>:
                      <>
                        <li>
                            <NavLink to="/dashboard/myProfile">

                                My Profile</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/bookParcel">

                                Book Parcel</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/myParcel">

                                My Parcel</NavLink>
                        </li>
                        {/* <li>
                                    <NavLink to="/dashboard/review">
                                        <FaAd></FaAd>
                                        Add a Review</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/paymentHistory">
                                        <FaList></FaList>
                                        Real Payment History</NavLink>
                                </li> */}
                    </>
}
                  
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