import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { UserContext } from '../context/UserProvider';
import Select from 'react-select';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';

const List = () => {
    const { id } = useParams();
    const location = useLocation();
    const state = location.state.state;

    const [listDetails, setListDetails] = useState({});
    
    const [selectedOptions, setSelectedOPtions] = useState([]);
    
    const {allMovies} = useContext(UserContext);

    const handleBlur = (e) => {
        const value = e.target.value;
        setListDetails({...listDetails, [e.target.name]: value});
    };

    const handleUpdate = async(e) => {
        e.preventDefault();
        const content = selectedOptions.map(i => {
            return i.id;
        });
        listDetails.content = content;
        try {
            const res = await axios.put(`http://localhost:3000/api/list/${id}`, listDetails, {
                headers: {
                    authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NThlYTUxYTE5NjhiZDMwZWVlM2MxZjEiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE3MDM4NDcyOTYsImV4cCI6MTcwNDI3OTI5Nn0.Yz3yJlixi41lvZjomRZPq_6ldQMH8msFnV_0-eDRiWM"
                }
            });
            console.log(res.data);
        } catch(err) {
            console.log(err);
        }
    };

    const opt = allMovies.map(movie => {
        const options = { value: movie.title, label: movie.title, id: movie._id };
        return options
    });

    const handleSelect = (selectedOptions) => {
        setSelectedOPtions(selectedOptions);
    };


    return (
        <div>
            <Navbar />
            <div className="flex">
                <div className="w-1/5">
                    <Sidebar />
                </div>
                <div className="w-4/5 pt-16 pb-6">

        <div className='flex items-center px-6 py-4 justify-between'>
            <p className='text-2xl font-bold'>List</p>
            <Link to="/admin/newList">
                <button className='bg-teal-600 text-white px-3 py-1 rounded-md font-medium'>Create</button>
            </Link>
        </div>

        <div className='w-full flex px-4'>
            <div className='w-full py-4 px-6 shadow-md border rounded-md mx-2'>
                <div className="flex items-center px-1 py-1">
                <p className="text-sm font-medium">Title:</p>
                    <p className='text-sm font-medium text-gray-500 px-3'>{state.title}</p>
                </div>

                <div className='flex items-center px-1 py-1'>
                    <p className="text-sm font-medium">Id:</p>
                    <p className='text-sm font-medium text-gray-500 px-3'>{state._id}</p>
                </div>

                <div className='flex items-center p-1 '>
                    <p className="text-sm font-medium">Genre:</p>
                    <p className='text-sm font-medium text-gray-500 px-3'>{state.genre}</p>
                </div>

                <div className='flex items-center p-1'>
                    <p className="text-sm font-medium">Type:</p>
                    <p className='text-sm font-medium text-gray-500 px-3'>{state.type}</p>
                </div>
            </div>
        </div>

        <div className='p-4 border shadow-md mx-6 my-4 rounded-md'>
            <p className='mx-8 text-2xl font-bold'>Edit List</p>
            <div className='mx-8'>

                <div className="flex justify-between">
                <div>
                <div className='flex flex-col pt-4'>
                    <label className='text-sm text-gray-500 font-medium'>Title</label>
                    <input type="text" name="title" className='w-[400px] h-10 border-b-2 placeholder:text-sm font-medium px-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500 my-1' placeholder={state.title} onBlur={handleBlur}/>
                </div>

                <div className='flex flex-col pt-4'>
                    <label className='text-sm text-gray-500 font-medium'>Genre</label>
                    <input type="text" name="genre" className='w-[400px] h-10 border-b-2 placeholder:text-sm font-medium px-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500 my-1' placeholder={state.genre} onBlur={handleBlur}/>
                </div>

                <div className="flex w-[400px] flex-col pt-4">
                    <label className='text-sm text-gray-500 font-medium'>Type</label>
                    <select className="px-2 py-1 focus:outline-gray-300 border border-solid rounded-md border-gray-300 my-2" name="type" id="active" onBlur={handleBlur}>
                        <option>type</option>
                        <option value="movie">Movie</option>
                        <option value="series">Series</option>
                    </select>
                </div>
                </div>

                <div>

                <div className='flex w-[400px] flex-col pt-4'>
                        <label className='text-sm text-gray-500 font-medium'>Content</label>
                            <Select
                                onChange={handleSelect}
                                value={selectedOptions}
                                isMulti
                                options={opt}
                                className="basic-multi-select py-1 border-solid rounded-md my-2"
                                classNamePrefix="select"
                            />

                        </div>

                </div>

                </div>

                <div className='my-4'>
                     <button className='bg-teal-600 text-white px-4 py-1 rounded-md font-medium' onClick={handleUpdate}>Update</button>
                </div>
            </div>
        </div>
        </div>
        </div>
    </div>
    );
};

export default List;