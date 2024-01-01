import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserProvider';
import axios from 'axios';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';

const ListTable = () => {
    const {allList, setAllList} = useContext(UserContext);

    useEffect(() => {
        const getList = async() => {
            try {
            const res = await axios.get("http://localhost:3000/api/list", {
                headers: {
                    authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NThlYTUxYTE5NjhiZDMwZWVlM2MxZjEiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE3MDM4NDcyOTYsImV4cCI6MTcwNDI3OTI5Nn0.Yz3yJlixi41lvZjomRZPq_6ldQMH8msFnV_0-eDRiWM"
                }
            });
            setAllList(res.data);
            } catch(err) {
                console.log(err);
            }
        };
        getList();
    }, []);

    console.log(allList);

    const handleClick = async(id) => {
        setAllList(allList.filter(d => d._id !== id));
            try {
                await axios.delete(`http://localhost:3000/api/list/${id}`, {
                    headers: {
                        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NThlYTUxYTE5NjhiZDMwZWVlM2MxZjEiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE3MDM4NDcyOTYsImV4cCI6MTcwNDI3OTI5Nn0.Yz3yJlixi41lvZjomRZPq_6ldQMH8msFnV_0-eDRiWM"
                    }
                });
            } catch(err) {
                console.log(err);
            }
        };

    return (
        <div>
            <Navbar />
            <div className="flex">
                <div className="w-1/5">
                    <Sidebar />
                </div>
                <div className="w-4/5 pt-16">
        <div className="overflow-x-auto pl-4">
            <table className="table">
                <thead>
                    <tr className='text-[14px] text-black'>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Type</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {allList.map((list, index) => (
                        <tr key={list._id}>
                            <th>{index + 1}</th>
                            <td className='text-gray-500'>
                                {list.title}
                            </td>
                            <td className='text-gray-500'>{list.genre}</td>
                            <td className='text-gray-500'>{list.type}</td>
                            <td className=''>
                                <div className='flex'>
                                    <Link to={`/list/${list._id}`} state={{state: list}}>
                                        <button className='bg-green-500 text-white py-1 px-2 rounded-md'>Edit</button>
                                    </Link>
                                    <div className='text-2xl text-red-600 flex items-center pl-1 cursor-pointer' onClick={() => handleClick(list._id)}>
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

export default ListTable;