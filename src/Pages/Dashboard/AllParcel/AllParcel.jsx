import { useState, useEffect } from "react";


const AllParcel = () => {
    const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // Fetch data from /bookings API
    fetch('http://localhost:5000/bookings')
      .then((response) => response.json())
      .then((data) => setBookings(data))
      .catch((error) => console.error('Error fetching bookings:', error));
  }, []);
    return (
        <div>
            <div className="flex justify-evenly my-1">
           
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                          <th></th>
                            <th>User Name</th>
                            <th>User Phone Number</th>
                            <th>Booking Date</th>
                            <th>Requested Delivery Date</th>
                            <th>Cost</th>
                            <th>Status</th>
                            <th>Action</th>
                            

                        </tr>
                    </thead>
                    <tbody>
                        {
                           bookings.map((booking, index) => <tr key={booking._id}>
                                <th>{index + 1}</th>
                                <td>{booking.name}</td>
                                <td>{booking.phoneNumber}</td>
                                <td>{booking?.bookingDate}</td>
                                <td>{booking.date}</td>
                                <td>{booking.price}</td>
                                <td>{booking.status}</td>
                                <td><button className="btn bg-indigo-950 text-white">Manage</button></td>

                              
                          
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};
   
export default AllParcel;