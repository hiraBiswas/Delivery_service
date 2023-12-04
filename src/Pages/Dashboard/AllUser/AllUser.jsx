import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
const AllUser = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })

    const handleMakeAdmin = user =>{
        axiosSecure.patch(`/users/admin/${user._id}`)
        .then(res =>{
            console.log(res.data)
            if(res.data.modifiedCount > 0){
                refetch();
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: `${user.name} is an Admin Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }

    const handleMakeDeliveryman = user =>{
        axiosSecure.patch(`/users/deliveryman/${user._id}`)
        .then(res =>{
            console.log(res.data)
            if(res.data.modifiedCount > 0){
                refetch();
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: `${user.name} is an deliveryman Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }
    return (
        <div>
            <div className="flex justify-evenly my-1">
                <h2 className="text-3xl">All Users</h2>
              
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                          <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Number of Parcel Booked</th>
                            <th>Make Deliveryman</th>
                            <th>Make Admin</th>
                            

                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.email}</td>
                                <td>
                                { user.type === 'Deliveryman' ? 'Deliveryman' : <button
                                        onClick={() => handleMakeDeliveryman(user)}
                                        className="btn btn-lg bg-indigo-950">
                                        <FaUsers className="text-white 
                                        text-2xl"></FaUsers>
                                    </button>}
                                </td>

                              
                                <td>
                                <td>
                                { user.type === 'Admin' ? 'Admin' : <button
                                        onClick={() => handleMakeAdmin(user)}
                                        className="btn btn-lg bg-indigo-950">
                                        <FaUsers className="text-white 
                                        text-2xl"></FaUsers>
                                    </button>}
                                </td>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};
    
export default AllUser;