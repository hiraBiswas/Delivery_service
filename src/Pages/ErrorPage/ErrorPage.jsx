import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="container mx-auto mt-12">
           <img src="https://i.postimg.cc/fR37kMwV/404-maintenance-error-landing-page-vector.jpg" alt="" />
           <div className="flex items-center">
           <Link to="/"> <button className="btn bg-indigo-950 text-white">Back to Home</button></Link>
           </div>
        </div>
    );
};

export default ErrorPage;