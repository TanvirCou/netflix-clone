import { Link, useParams } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';

const User = () => {
    const { id } = useParams();
    console.log(id);

    return (
        <div>
            <Navbar />
            <div className="flex">
                <div className="w-1/5">
                    <Sidebar />
                </div>
                <div className="w-4/5 pt-16 pb-4">
                    <div className='flex items-center px-5 py-4 justify-between'>
                        <p className='text-2xl font-bold'>Edit User</p>
                        <Link to="/admin/newUser">
                            <button className='bg-teal-600 text-white px-3 py-1 rounded-md font-medium'>Create</button>
                        </Link>
                    </div>

                    <div className='w-full flex px-4'>
                        <div className='w-2/5 border shadow-md mx-1 rounded pb-16 px-4'>
                            <div className='flex items-center py-3'>
                                <div>
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" className="w-12 h-12 rounded-[50%] object-cover" />
                                </div>
                                <div className='px-3'>
                                    <p className='font-medium'>Saqiul Islam</p>
                                    <p className='text-sm font-normal text-gray-500'>Hardware Engineer</p>
                                </div>
                            </div>

                            <div>
                                <p className='text-sm font-semibold text-gray-500 py-4'>Account Details</p>
                                <div className='flex items-center px-1'>
                                    <div className='flex items-center text-lg text-gray-700'>
                                        <ion-icon name="person-outline"></ion-icon>
                                    </div>
                                    <p className='text-sm font-medium px-2'>Saqi999</p>
                                </div>
                                <div className='flex items-center px-1 py-3'>
                                    <div className='flex items-center text-lg text-gray-700'>
                                        <ion-icon name="calendar-outline"></ion-icon>
                                    </div>
                                    <p className='text-sm font-medium px-2'>10 jun 2012</p>
                                </div>
                            </div>

                            <div>
                                <p className='text-sm font-semibold text-gray-500 py-4'>Account Details</p>
                                <div className='flex items-center px-1'>
                                    <div className='flex items-center text-lg text-gray-700'>
                                        <ion-icon name="call-outline"></ion-icon>
                                    </div>
                                    <p className='text-sm font-medium px-2'>+8801819393432</p>
                                </div>
                                <div className='flex items-center px-1 py-3'>
                                    <div className='flex items-center text-lg text-gray-700'>
                                        <ion-icon name="mail-open-outline"></ion-icon>
                                    </div>
                                    <p className='text-sm font-medium px-2'>saqi@gmail.com</p>
                                </div>
                                <div className='flex items-center px-1 py-1'>
                                    <div className='flex items-center text-lg text-gray-700'>
                                        <ion-icon name="location-outline"></ion-icon>
                                    </div>
                                    <p className='text-sm font-medium px-2'>Noakhali|Bangladesh</p>
                                </div>
                            </div>
                        </div>
                        <div className='w-3/5 border shadow-md mx-1 rounded p-4'>
                            <p className='text-xl font-bold'>Edit</p>
                            <div className='flex justify-between'>
                                <div >
                                    <div className='flex flex-col pt-4'>
                                        <label className='text-sm text-gray-500 font-medium'>Username</label>
                                        <input type="text" className='w-72 h-10 border-b-2 placeholder:text-sm font-medium px-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500' placeholder='Saqi999' />
                                    </div>

                                    <div className='flex flex-col pt-2'>
                                        <label className='text-sm text-gray-500 font-medium'>Full name</label>
                                        <input type="text" className='w-72 h-10 border-b-2 placeholder:text-sm font-medium px-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500' placeholder='Saqiul Islam' />
                                    </div>
                                    <div className='flex flex-col pt-2'>
                                        <label className='text-sm text-gray-500 font-medium'>Email</label>
                                        <input type="text" className='w-72 h-10 border-b-2 placeholder:text-sm font-medium px-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500' placeholder='saqi@gmail.com' />
                                    </div>
                                    <div className='flex flex-col pt-2'>
                                        <label className='text-sm text-gray-500 font-medium'>Phone</label>
                                        <input type="text" className='w-72 h-10 border-b-2 placeholder:text-sm font-medium px-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500' placeholder='+8801819393432' />
                                    </div>
                                    <div className='flex flex-col pt-2'>
                                        <label className='text-sm text-gray-500 font-medium'>Address</label>
                                        <input type="text" className='w-72 h-10 border-b-2 placeholder:text-sm font-medium px-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500' placeholder='Noakhali|Bangladesh' />
                                    </div>
                                </div>
                                <div>
                                    <div className='flex flex-col h-full justify-between items-end'>
                                        <div className='flex mt-2'>
                                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" className="w-28 h-28 rounded-lg object-cover" />
                                            <label htmlFor='file' className='flex items-center ml-3 mr-2 cursor-pointer'>
                                                <div className={`text-2xl flex items-center`}>
                                                    <ion-icon name="images-sharp"></ion-icon>
                                                </div>
                                                <input type="file" id='file' accept=".png,.jpeg,.jpg" className='hidden' />
                                            </label>
                                        </div>
                                        <div>
                                            <button className='bg-teal-600 text-white px-5 py-1 font-medium rounded-md'>Update</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default User;