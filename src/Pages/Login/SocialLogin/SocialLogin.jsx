import { FaGoogle } from "react-icons/fa";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const SocialLogin = () => {
  const { signInWithGoogle } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(result => {
        console.log(result); // Log the entire result object
        if (result && result.user) {
          console.log(result.user); // Log user information
          const userInfo = {
            email: result.user?.email,
            name: result.user?.displayName,
          };
          axiosPublic.post('/users', userInfo)
            .then(res => {
              console.log(res.data);
              navigate('/');
            })
            .catch(error => {
              console.error("Error posting user info:", error);
            });
        } else {
          console.error("Google Sign-In Result or User is undefined:", result);
        }
      })
      .catch(error => {
        console.error("Error during Google Sign-In:", error);
      });
  };
  
  return (
    <div className="p-8">
      <div className="divider"></div>
      <div>
        <button onClick={handleGoogleSignIn} className="btn">
          <FaGoogle className="mr-2"></FaGoogle>
          Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
