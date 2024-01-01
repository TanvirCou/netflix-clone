import { useState } from "react";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

const UserList = () => {
    const [data, setData] = useState(userRows);

    const handleClick = (id) => {
        setData(data.filter(d => d.id !== id));
    }
    return (

        <div>
            <Navbar />
            <div className="flex">
                <div className="w-1/5">
                    <Sidebar />
                </div>
                <div className="w-4/5 pt-16 pb-4">

                
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr className='text-[14px] text-black'>
                            <th>Id</th>
                            <th>User</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Transaction</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(user => (
                            <tr key={user.id}>
                                <th>{user.id}</th>
                                <td className='flex items-center'>
                                    <img src={user.avatar} className="w-9 h-9 rounded-[50%] object-cover" />
                                    <p className='pl-2'>{user.username}</p>
                                </td>
                                <td className='text-gray-500'>{user.email}</td>
                                <td className='text-gray-500'>{user.status}</td>
                                <td className='text-gray-500'>{user.transaction}</td>
                                <td className=''>
                                    <div className='flex'>
                                        <Link to={`/user/${user.id}`}>
                                            <button className='bg-green-500 text-white py-1 px-2 rounded-md'>Edit</button>
                                        </Link>
                                        <div className='text-2xl text-red-600 flex items-center pl-1 cursor-pointer' onClick={() => handleClick(user.id)}>
                                            <ion-icon name="trash-sharp"></ion-icon>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        </div>
        </div>
    );
};

export default UserList;