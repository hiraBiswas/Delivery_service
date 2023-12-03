
const Banner = () => {
    return (
       <div className="container mx-auto">
         <div className="flex gap-5 px-20 justify-center items-center">
            <div className="flex-1 relative overflow-hidden">
                <div className="">
                 
  <h1 className="text-4xl font-bold py-8 ">At <span className="text-white px-3 py-2 bg-indigo-950 max-w-content text-4xl font-bold italic ">Express Drop</span></h1>
  <h3 className="py-2 text-xl font-bold">We do not just deliver packages; <br /> We deliver <span className="text-2xl text-indigo-900 italic">Happiness</span> <br /></h3>
  <div className="join py-2">
  <input className="input input-bordered border-indigo-950 join-item" placeholder="Email"/>
  <button className="btn join-item text-white hover:text-indigo-950 bg-indigo-950">Search</button>
</div>
            </div>
            </div>
            <div className="flex-1  pl-10">
            <img src="https://i.postimg.cc/4y9xB9qT/Delivery-Service-Illustration.jpg" alt="" />
            </div>
            
       
        </div>
       </div>
    );
};

export default Banner;