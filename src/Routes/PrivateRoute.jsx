import { Navigate, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if(loading){
        return<>
        <span className="loading loading-ring loading-xs text-indigo-800"></span>
        <span className="loading loading-ring loading-sm"></span>
        <span className="loading loading-ring loading-md"></span>
        <span className="loading loading-ring loading-lg"></span></> 
    }

    if (user) {
        return children;
    }
    return <Navigate state={location.pathname}  to="/login" replace></Navigate>
};

export default PrivateRoute;