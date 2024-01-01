import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <div className='shadow-md w-full fixed top-0 left-0 z-10'>

            <div className='flex items-center justify-between bg-white py-3 px-10'>
                <Link to="/">
                    <div className='font-bold text-3xl cursor-pointer items-center font-[Poppins] 
      text-gray-800'>
                        Panda-admin
                    </div>
                </Link>
                <ul className="flex items-center">
                    <li className='mx-3 cursor-pointer'>
                        <div className="relative">
                            <div className='text-lg md:text-2xl text-gray-800 flex items-center'>
                                <ion-icon name="notifications-outline"></ion-icon>
                            </div>
                            <span className='absolute flex items-center justify-center -top-2 ml-2 bg-red-600 rounded-[50%] text-white px-[5px] font-medium text-xs'>2</span>
                        </div>
                    </li>
                    <li className='mx-3 cursor-pointer'>
                        <div className='text-lg md:text-2xl text-gray-800 flex items-center'>
                            <ion-icon name="globe-outline"></ion-icon>
                        </div>
                    </li>
                    <li className='mx-3 cursor-pointer'>
                        <div className='text-lg md:text-2xl text-gray-800 flex items-center'>
                            <ion-icon name="settings-outline"></ion-icon>
                        </div>
                    </li>
                    <li className='mx-3 cursor-pointer'>
                        <div >
                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" className="w-9 h-9 rounded-[50%] object-cover" />
                        </div>
                    </li>
                </ul>

            </div>

        </div>
    );
};

export default Navbar;