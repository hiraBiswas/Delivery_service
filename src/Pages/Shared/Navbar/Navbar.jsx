import {  Link, NavLink } from "react-router-dom";
import './navbar.css'
import { useContext} from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import { IoIosNotifications } from "react-icons/io";
const Navbar = () => {
    const links =<>
    <li className="text-lg lg:text-lg font-semibold hover:text-indigo-900 lg:px-3"><NavLink to="/">Home</NavLink></li>

    <li className="text-lg lg:text-lg font-semibold text-black hover:text-indigo-900 lg:px-3"><NavLink to="/dashboard">Dashboard</NavLink></li>
    <li className="text-lg lg:text-lg font-semibold text-black hover:text-indigo-900 lg:px-3"><NavLink to="/notification">Notification <IoIosNotifications></IoIosNotifications></NavLink></li>
    </>

const {user, logOut}= useContext(AuthContext)
const handleSignOut=()=>{
     logOut()
     .then(result=>{
      console.log(result.user)
     })

     .then(error=>{
      console.error(error)
     })
}
    return (
        <div className="navbar-wrapper"> 
           <div className="navbar  bg-white  ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu-sm menu  text-white dropdown-content mt-3 p-2 shadow z-40  rounded-box w-52 ">
       {links}
      </ul>
    </div>
    <div className="flex items-center">
        <img className="h-20 w-20 hidden lg:block" src="https://i.postimg.cc/TYs6N1Gk/Express-Drop-3-removebg-preview.png" alt="" />
    
    </div>
  </div>
  <div className="navbar-center hidden  lg:flex">
    <ul className="menu-horizontal ">
      {links}
    </ul>
  </div>

  <div className="navbar-end ">
  {user ? (
            <div className="flex items-center">
             <div className="dropdown dropdown-hover">
  <label tabIndex={0} className="hover:underline"> <img
                src={user.photoURL} 
                alt="Profile"
                className="h-10 w-10 rounded-full mr-2"
              /></label>
  <ul tabIndex={0} className="dropdown-content z-[1] menu -ml-32 p-2 shadow bg-base-100 rounded-box w-36">
  <h2 className="text-lg font-semibold hidden text-black lg:block">{user?.displayName}</h2>
  <button onClick={handleSignOut} className="text-start text-lg text-black font-semibold"  >LogOut</button>
  </ul>
</div>
      
            </div>
          ) : (
            <Link to="/login">
              
  <div className="navbar-end ">
   <Link  to="/login"> <button className="btn btn-outline border-2 border-indigo-950 text-indigo-900 hover:bg-indigo-950 hover-text-white">Login</button></Link>
  </div>
            </Link>
          )}
            
         
</div>
        </div>
        </div>
    );
};

export default Navbar; 