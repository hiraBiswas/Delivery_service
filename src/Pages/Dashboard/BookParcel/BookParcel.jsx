import { useContext, useState } from 'react';
import { AuthContext } from "../../../Providers/AuthProvider"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addDays } from 'date-fns';

const BookParcel = () => {
    const { user } = useContext(AuthContext);
    const [selectedDate, setSelectedDate] = useState(null);
    const today = new Date();
    const minimumDate = addDays(today, 0);

    
    const handleBooking = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phoneNumber = form.phoneNumber.value;
        const parcelWeight= form.parcelWeight.value;
        const parcelType= form.parcelType.value;
        const receiverName= form.receiverName.value;
        const receiverPhoneNumber= form.receiverPhoneNumber.value;
        const parcelDeliveryAddress= form.parcelDeliveryAddress.value;
        const addressLongitude= form.addressLongitude.value;
        const addressLatitude= form.addressLatitude.value;
        const price = form.price.value;
        const date = form.date.value;
        const status= 'Pending';
        const currentDate = new Date();
       

       

    const newBooking = { name, status ,email,bookingDate: currentDate, phoneNumber, price, parcelDeliveryAddress, parcelType, parcelWeight,receiverName, receiverPhoneNumber, addressLatitude, addressLongitude, date };
    console.log(newBooking);

    fetch('http://localhost:5000/bookings', {
  method: 'POST',
  headers: {
    'content-type': 'application/json',
  },
  body: JSON.stringify(newBooking),
})
  .then((res) => res.json())
  .then((data) => {
    console.log(data)
    if (data._id || data.insertedId) {
      toast.success('Booking is successfully placed');
      form.reset();
    }
  })
  .catch(() => {
    
    toast.error('Failed to Book');
  });
  }


    return (
        <div className="bg-gray-800 p-12">
            <h2 className="text-3xl font-extrabold text-center py-5 text-white">Book a Parcel</h2>
            <form onSubmit={handleBooking}  className="bg-black px-10 max-w-3xl mx-auto shadow-2xl rounded-3xl">
                {/* Add other form fields as needed */}
                <div className="md:flex gap-8 px-5">
                    <div className="form-control md:w-1/2 pt-8">
                        <label className="label">
                            <span className="label-text text-white">Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" value={user.displayName} readOnly className="input input-bordered bg-black text-white w-full max-w-xs" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 lg:pt-8">
                        <label className="label">
                            <span className="label-text text-white">Email</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="email" value={user.email} readOnly className="input input-bordered bg-black text-white w-full max-w-xs" />
                        </label>
                    </div>
                </div>
                <div className="md:flex gap-8 px-5 mb-2">
                    {/* Add other form fields as needed */}
                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text text-white">Phone Number</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="phoneNumber"  placeholder="Phone Number" className="input input-bordered border-red-600 bg-black text-white w-full max-w-xs" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text text-white">Parcel Type</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="parcelType"  placeholder="Parcel Type" className="input input-bordered border-red-600 bg-black text-white w-full max-w-xs" />
                        </label>
                    </div>
                </div>
                {/* Add other form fields as needed */}
                <div className="md:flex gap-8 px-5 mb-2">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-white">Parcel Weight (kg)</span>
                        </label>
                        <label className="input-group">
                            <input type="number" name="parcelWeight" className="input input-bordered border-red-600 bg-black text-white w-full max-w-xs" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-white">Receiver's Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="receiverName"  placeholder="Receiver's Name" className="input input-bordered border-red-600 bg-black text-white w-full max-w-xs" />
                        </label>
                    </div>
                </div>
                {/* Add other form fields as needed */}
                <div className="md:flex gap-8 px-5 mb-2">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-white">Receiver's Phone Number</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="receiverPhoneNumber"  placeholder="Receiver's Phone Number" className="input input-bordered border-red-600 bg-black text-white w-full max-w-xs" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-white">Parcel Delivery Address</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="parcelDeliveryAddress"  placeholder="Parcel Delivery Address" className="input input-bordered border-red-600 bg-black text-white w-full max-w-xs" />
                        </label>
                    </div>
                </div>
                {/* Add other form fields as needed */}
                <div className="md:flex gap-8 px-5 mb-2">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-white">Requested Delivery Date</span>
                        </label>
                        <label className="input-group">
                           
                            <DatePicker
                                    required
                                    selected={selectedDate}
                                    onChange={(date) => setSelectedDate(date)}
                                    name="date"
                                    placeholderText="Select a date"
                                    minDate={minimumDate}
                                    className="input input-bordered border-red-600 bg-black text-white w-full "
                                />
                        </label>
                        </div>
                        <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-white">Price</span>
                        </label>
                        <label className="input-group">
                            <input  type="number" name="price"  placeholder="Price" className="input input-bordered border-red-600 bg-black text-white w-full max-w-xs" />
                        </label>
                    </div>

                        </div>


                        <div className="md:flex gap-8 px-5 mb-2">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-white">Delivery Address Latitude</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="addressLatitude"  placeholder="Delivery Address Latitude" className="input input-bordered border-red-600 bg-black text-white w-full max-w-xs" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-white">Delivery Address longitude</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="addressLongitude"  placeholder="Delivery Address longitude" className="input input-bordered border-red-600 bg-black text-white w-full max-w-xs" />
                        </label>
                    </div>
                </div>

                <div className="flex justify-center">
                        <input type="submit" value="Book" className="btn w-3/4 bg-red-700 text-white my-4 hover:text-red-700 hover:bg-white" />
                    </div>
                        </form>
                        </div>
    )}

    export default BookParcel;