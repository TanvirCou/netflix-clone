import { useState } from 'react';
import Notification from "../Notification/Notification";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () => {
        setIsScrolled(window.scrollY === 0 ? false : true);
        return () => (window.onscroll === null); 
    };

    return (
        <div className='shadow-none w-full fixed z-10 top-0 left-0'>
            <div className={`md:flex items-center justify-between ${isScrolled ? "bg-black" : "bg-transparent"} py-3 md:px-10 px-7`}>
                <div className='flex items-center'>
                <div className='font-bold text-2xl cursor-pointer items-center font-[Poppins] 
      text-gray-800'>
        <Link to="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="" className='h-10'/>
                    </Link>
                </div>

                <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                    <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                </div>

                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in top-20`}>
                    <li className='md:ml-8 text-sm  md:my-0 my-7'>
                        <Link to='/' className='text-white hover:text-gray-400 duration-500'>Homepage</Link>
                    </li>
                    <li className='md:ml-8 text-sm  md:my-0 my-7'>
                        <Link to='/series' className='text-white hover:text-gray-400 duration-500'>Series</Link>
                    </li>
                    <li className='md:ml-8 text-sm  md:my-0 my-7'>
                        <Link to='/movies' className='text-white hover:text-gray-400 duration-500'>Movies</Link>
                    </li>
                    <li className='md:ml-8 text-sm  md:my-0 my-7'>
                        <a href='/' className='text-white hover:text-gray-400 duration-500'>New and Popular</a>
                    </li>
                    <li className='md:ml-8 text-sm  md:my-0 my-7'>
                        <a href='/' className='text-white hover:text-gray-400 duration-500'>My List</a>
                    </li>
                </ul>
                </div>
                <div>
                <ul className={`flex items-center`}>
                    <li className='md:ml-4 text-sm  md:my-0 my-7'>
                    <div className='text-lg md:text-xl text-white flex items-center'>
                    <ion-icon name="search-sharp"></ion-icon>
                    </div>
                    </li>
                    <li className='md:ml-4 text-sm  md:my-0 my-7 '>
                        <Notification />
                    </li>
                    <li className='md:ml-4 text-sm  md:my-0 my-7'>
                        <a href='/' className='text-white hover:text-gray-400 duration-500'>Kid</a>
                    </li>
                    <li className='md:ml-4 text-sm  md:my-0 my-7'>
                        <ProfileInfo />
                    </li>
                </ul>
                </div>

            </div>

        </div>
    );
};

export default Navbar;