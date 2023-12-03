
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getAuth, updateProfile } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

import { useForm } from 'react-hook-form';

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const location = useLocation();
  const navigate = useNavigate();

  const auth = getAuth();
  const { createUser } = useContext(AuthContext);

  const onSubmit = async (data) => {
    try {
      console.log(data);

      const { password, name, image, type, email } = data;
      console.log(password);

      if (password.length < 6) {
        toast.error("Password should be at least 6 characters long");
        return;
      }
      if (!/[A-Z]/.test(password)) {
        toast.error("Password should contain at least one capital letter");
        return;
      }
      if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
        toast.error(
          "Password should contain at least one special character"
        );
        return;
      }

      const imageFile = data.image[0];

      // Create FormData object
      const formData = new FormData();
      formData.append("image", imageFile);

      // Perform the fetch request
      const response = await fetch(image_hosting_api, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const res = await response.json();
      if (res.success) {
        // Handle the ImgBB API response data
        console.log(res);
        createUser(name, image, type, email, password)
          .then((result) => {
            console.log(result.user);
            updateProfile(auth.currentUser, {
              displayName: name,
              photoURL: res.data.display_url,
            })
              .then((result) => {
                toast.success("Registration Successful");
                navigate(location?.state ? location.state : "/");
              })
              .catch((error) => {
                toast.error(error.message);
              });
          })
          .catch((error) => {
            console.error("Registration error:", error.message);
          });
      } else {
        toast.error("Error during image upload");
      }
    } catch (error) {
      console.error("Error during image upload:", error);
    }
  };
  return (
    <div className=" py-5 shadow-drop">
      <div className="flex  container mx-auto">
        <div className="flex-1 py-5 " >
          <h2 className="text-2xl font-bold text-center   lg:text-4xl pt-3 ">Register Here !</h2>
          <div className="flex gap-10">
            <div>
              <form  onSubmit={handleSubmit(onSubmit)} className="py-2 " >
                <div className="form-control px-12 ">
                  <label className="label">
                    <span className="label-text text-black focus:text-black">Name</span>
                  </label>
                  <input {...register('name', { required: true })} type="text" name='name' placeholder="name" className="input rounded-none border-none border-transparent  bg-violet-200 drop-shadow text-black focus:outline-indigo-950 focus:bg-white" />
                </div>
                <div className="form-control px-12 ">
                  <label className="label">
                    <span className="label-text text-black">Email</span>
                  </label>
                  <input {...register('email', { required: true })} type="text" name='email' placeholder="email" className="input rounded-none border-none border-transparent  bg-violet-200 drop-shadow text-black focus:outline-indigo-950 focus:bg-white" />
                </div>
                <div className="form-control px-12 ">
                  <label className="label">
                    <span className="label-text text-black">Type</span>
                  </label>
                  <select {...register('type', { required: true })}  defaultValue="default" className="input rounded-none border-none border-transparent  bg-violet-200 drop-shadow text-black focus:outline-indigo-950 focus:bg-white">
  <option disabled value="default">Choose the type.</option>
  <option>User</option>
  <option>DeliveryMan</option>
</select>
                </div>

                <div className="form-control px-12 ">
                  <label className="label">
                    <span className="label-text text-black">Image</span>
                  </label>
                  <input {...register('image', { required: true })} type="file" name='image' placeholder="image" className="input rounded-none border-none border-transparent  bg-violet-200 drop-shadow text-black focus:outline-indigo-950 focus:bg-white"/>

                </div>
                <div className="form-control px-12 ">
                  <label className="label">
                    <span className="label-text  text-black">Password</span>
                  </label>
                  <input {...register('password', { required: true })} type="password" name='password' placeholder="password" className="input rounded-none border-none border-transparent  bg-violet-200 drop-shadow text-black focus:outline-indigo-950 focus:bg-white" />

                  <p className="text-black py-2">Already have account? <span className="text-indigo-900"><Link to="/login">Login</Link></span> here.</p>
                </div>
                <div className="form-control mt-4">
                  <input className="btn bg-indigo-950 mx-12 text-white hover:bg-white hover:text-indigo-900" type="submit" value="Sign Up" />
                </div>
              </form>
            </div>


            <div>
              <img src="https://i.postimg.cc/jSHMzwjw/1000-F-282091909-OKTHM5-TJG5-Fa-KYRklh8-IFL9073x-NSt-Bg-1-c0-ESK6-Vd-C-transformed.jpg" alt="" />
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>

    </div>

  );
};

export default Register;