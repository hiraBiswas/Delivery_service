import { FaShippingFast } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { FaHandshake } from "react-icons/fa";
const Features = () => {
    return (
        <div className="container mx-auto">
            <h1 className="text-4xl mt-12 mb-5 text-center">Our <span className="text-white font-bold px-2 bg-indigo-950 italic">Features</span> Section</h1>
            <div className=" grid gap-16 grid-cols-3">
            <div className="card  shadow-xl">
  <figure><FaShippingFast className="text-9xl text-indigo mt-8 "></FaShippingFast></figure>
  <div className="card-body">
    <h2 className="card-title text-indigo-950 text-bold">Lightning-Fast Delivery</h2>
    <p className="text-sm text-gray-700 my-5"> Experience the thrill of super-fast deliveries! Our optimized logistics and cutting-edge technology enable us to deliver your packages at lightning speed. Say goodbye to long waiting times and enjoy the convenience of swift delivery.</p>
    
  </div>
</div>

<div className="card  shadow-xl">
  <figure><MdOutlineSecurity className="text-9xl text-indigo mt-8 "></MdOutlineSecurity></figure>
  <div className="card-body">
    <h2 className="card-title text-indigo-950 text-bold">Secure Parcel Handling</h2>
    <p className="text-sm text-gray-700 my-5">We prioritize the safety of your parcels throughout the delivery journey. Our advanced security measures ensure that your packages are handled with care and reach their destination in the same condition they were sent.</p>
    
  </div>
</div>
<div className="card  shadow-xl">
  <figure><FaHandshake  className="text-9xl text-indigo mt-8 "></FaHandshake ></figure>
  <div className="card-body">
    <h2 className="card-title text-indigo-950 text-bold">Customer Support</h2>
    <p className="text-sm text-gray-700 my-5"> Our dedicated support team is available 24/7 to assist you. Whether you have questions about your delivery, need assistance with tracking, or want to provide feedback, our customer support is here to ensure a seamless experience.</p>
    
  </div>
</div>
        </div>
        </div>
    );
};

export default Features;