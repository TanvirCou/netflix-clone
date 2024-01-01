import axios from "axios";
import { useEffect, useState } from "react";

const WidgetSm = () => {
    const [newUsers, setNewUsers] = useState([]);

    useEffect(() => {
        const getUsers = async() => {
            try {
            const res = await axios.get(`http://localhost:3000/api/user?new=true`, {
                headers: {
                    authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NThlYTUxYTE5NjhiZDMwZWVlM2MxZjEiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE3MDM4NDcyOTYsImV4cCI6MTcwNDI3OTI5Nn0.Yz3yJlixi41lvZjomRZPq_6ldQMH8msFnV_0-eDRiWM"
                }
            });
            setNewUsers(res.data);
            } catch(err) {
                console.log(err);
            }
        }
        getUsers();
    }, []);

    return (
        <div className='py-2 px-4'>
            <p className='text-lg font-semibold'>New Join Members</p>
            {newUsers.map(user => 
            <div key={user._id} className='flex justify-between items-center py-2'>
                <div >
                    <img src={user.dp} className="w-12 h-12 rounded-[50%] object-cover" />
                </div>
                <div className='text'>
                    <p className='font-medium'>{user.name}</p>
                    <p className='text-sm font-normal text-gray-500'>{user.email}</p>
                </div>
                <div className='flex justify-center items-center rounded cursor-pointer p-1 bg-sky-100'>
                    <div className='text-lg md:text-2xl text-gray-800 flex items-center'>
                        <ion-icon name="eye-sharp"></ion-icon>
                    </div>
                    <p className='font-medium px-1'>Display</p>
                </div>
            </div>)}
        </div>
    );
};

export default WidgetSm;