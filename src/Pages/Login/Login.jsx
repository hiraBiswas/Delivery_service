import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { BsGoogle } from 'react-icons/bs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {

   
    const location = useLocation()
    console.log('location in login page', location)
    const navigate = useNavigate()
    const { signIn, signInWithGoogle } = useContext(AuthContext)


    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.target);
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password)


        signIn(email, password)
            .then(result => {

                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                toast.error(error.message);
            })
    }
    return (

        <div className="  shadow-drop">
            <div className="container   mx-auto"  >
                <h2 className="text-2xl font-bold text-black py-12 text-center   lg:text-4xl pt-2">Login Here !</h2>
                <div className="flex ">
                    <form onSubmit={handleLogin} className="py-5 flex-1" >
                        <div className="form-control drop-shadow px-12">
                            <label className="label">
                                <span className="label-text text-black ">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input rounded-none border-none border-transparent  bg-violet-200 drop-shadow text-black focus:outline-indigo-950 focus:bg-white" />
                        </div>

                        <div className="form-control drop-shadow  px-12 ">
                            <label className="label">
                                <span className="label-text  text-black">Type</span>
                            </label>
                            {/* <input type="password" name='password' placeholder="Type" className="input rounded-none border-none  border-cyan-600 bg-cyan-50  text-black" /> */}
                            <select className="input rounded-none border-none border-transparent  bg-violet-200 drop-shadow text-black focus:outline-indigo-950 focus:bg-white">
                                <option disabled selected>Choose the role?</option>
                                <option>Admin</option>
                                <option>DeliveryMan</option>
                                <option>User</option>
                            </select>
                        </div>

                        <div className="form-control drop-shadow  px-12 ">
                            <label className="label">
                                <span className="label-text  text-black">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input rounded-none border-none border-transparent  bg-violet-200 drop-shadow text-black focus:outline-indigo-950 focus:bg-white" />

                            <p className="text-black py-3">New to the website? <span className="text-indigo-950"><Link to="/register">Sign Up</Link></span> here.</p>
                        </div>
                        <div className="px-8 py-1">
                            <h2 className="text-center text-white">Or</h2>
                            <div onClick={signInWithGoogle} className="flex items-center gap-6 justify-center">
                                <BsGoogle className="text-xl text-indigo-950"></BsGoogle>
                                <Link className="text-indigo-950 text-xl">Login with Google</Link>
                            </div>
                        </div>
                        <div className="form-control mt-2">
                            <input className="btn bg-indigo-950 mx-12 text-white drop-shadow hover:bg-white hover:text-cyan-600" type="submit" value="Login" />
                        </div>
                    </form>

                    <div className="flex-1 h-full">
                        <img className="h-[430px]" src="https://i.postimg.cc/jSHMzwjw/1000-F-282091909-OKTHM5-TJG5-Fa-KYRklh8-IFL9073x-NSt-Bg-1-c0-ESK6-Vd-C-transformed.jpg" alt="" />
                    </div>
                </div>
            </div>

        </div>


    );
};

export default Login;