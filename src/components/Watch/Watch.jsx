import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Watch = () => {
    const location = useLocation();
    const state = location.state.state;
    return (
        <div className='w-[100vw] h-[100vh]'>
            <Link to="/">
            <div className='flex items-center absolute z-10 top-2 left-2 cursor-pointer text-white'>
            <div className='flex items-center text-xl '>
            <ion-icon name="arrow-back-outline"></ion-icon>
            
            </div>
            <span className='text-md font-medium'>Home</span>
            </div>
            </Link>
            <video className='w-full h-full' src="https://vod-progressive.akamaized.net/exp=1624452918~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2400%2F14%2F362003850%2F1486625955.mp4~hmac=d6f829e7bb83f1ee6a28047d00aa2c1083c8fe5036c8084a4adf1c3903085856/vimeo-prod-skyfire-std-us/01/2400/14/362003850/1486625955.mp4" onProgress={true} autoPlay controls></video>
        </div>
    );
};

export default Watch;