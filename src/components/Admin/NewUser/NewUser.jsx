import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

const NewUser = () => {
    return (
        <div>
            <Navbar />
            <div className="flex">
                <div className="w-1/5">
                    <Sidebar />
                </div>
                <div className="w-4/5 pt-20 px-12">
      
            <p className=' text-2xl font-bold'>New User</p>
            <div className='flex flex-wrap justify-between'>
                <div className='flex flex-col pt-4'>
                    <label className='text-sm text-gray-500 font-medium'>Username</label>
                    <input type="text" className='w-[400px] h-10 border border-solid border-gray-300 rounded-md placeholder:text-sm font-medium px-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500 my-2' placeholder='Username' />
                </div>

                <div className='flex flex-col pt-4'>
                    <label className='text-sm text-gray-500 font-medium'>Full name</label>
                    <input type="text" className='w-[400px] h-10 border border-solid border-gray-300 rounded-md placeholder:text-sm font-medium px-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500 my-2' placeholder='full name' />
                </div>

                <div className='flex flex-col pt-4'>
                    <label className='text-sm text-gray-500 font-medium'>Email</label>
                    <input type="email" className='w-[400px] h-10 border border-solid border-gray-300 rounded-md placeholder:text-sm font-medium px-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500 my-2' placeholder='Email' />
                </div>

                <div className='flex flex-col pt-4'>
                    <label className='text-sm text-gray-500 font-medium'>Password</label>
                    <input type="password" className='w-[400px] h-10 border border-solid border-gray-300 rounded-md placeholder:text-sm font-medium px-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500 my-2' placeholder='Password' />
                </div>

                <div className='flex flex-col pt-4'>
                    <label className='text-sm text-gray-500 font-medium'>Phone</label>
                    <input type="text" className='w-[400px] h-10 border border-solid border-gray-300 rounded-md placeholder:text-sm font-medium px-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500 my-2' placeholder='Phone' />
                </div>

                <div className='flex flex-col pt-4'>
                    <label className='text-sm text-gray-500 font-medium'>Address</label>
                    <input type="text" className='w-[400px] h-10 border border-solid border-gray-300 rounded-md placeholder:text-sm font-medium px-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500 my-2' placeholder='Address' />
                </div>

                <div className='flex flex-col pt-4 w-[400px]'>
                    <label className='text-sm text-gray-500 font-medium'>Gender</label>
                    <div className="my-1 text-sm font-medium flex items-center">
                        <input type="radio" name="gender" id="male" value="male" />
                        <label htmlFor="male" className='pl-1 pr-5'>Male</label>
                        <input type="radio" name="gender" id="female" value="female" />
                        <label htmlFor="female" className='pl-1 pr-5'>Female</label>
                        <input type="radio" name="gender" id="other" value="other" />
                        <label htmlFor="other" className='pl-1 pr-5'>Other</label>
                    </div>
                </div>

                <div className="flex flex-col w-[400px] pt-4">
                    <label className='text-sm text-gray-500 font-medium'>Active</label>
                    <select className="px-2 py-1 focus:outline-gray-300 border border-solid rounded-md border-gray-300" name="active" id="active">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
            </div>

            <div className='mx-16 my-8'>
                <button className='bg-teal-600 text-white px-4 py-1 rounded-md font-medium'>Create</button>
            </div>
        </div>
        </div>
        </div>
    );
};

export default NewUser;