import React from 'react';

const Featured = ({type}) => {
    return (
        <div className='h-[90vh] relative '>
            {type && (
                <div className='absolute top-24 left-12'>
                    <span className='text-white text-2xl font-medium'>{type === "movies" ? "Movies" : "Series"}</span>
                    <select name="genre" className='bg-black text-white py-1 px-2 border border-white rounded-md mx-4 font-medium'>
                        <option>Genre</option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="historical">Historical</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="western">Western</option>
                        <option value="animation">Animation</option>
                        <option value="drama">Drama</option>
                        <option value="documentary">Documentary</option>
                    </select>
                </div>
            )}
            <img
            src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="" className='w-full h-full object-cover'/>
            <div className='absolute w-[35%] bottom-20 left-12 '>
                <img src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1" alt="" className='w-[400px] object-cover'/>
               <p className='text-white py-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, nulla quasi sit, incidunt blanditiis quibusdam in alias, ex doloribus soluta aliquid. Odit animi ex ut velit nemo porro possimus officiis?</p>
               <div className='flex items-center '>
                <button className='flex items-center px-4 py-2 border-none bg-white rounded-md'>
                <div className='text-2xl flex items-center'>
                <ion-icon name="play-sharp"></ion-icon>
                </div>
                    <span className='text-lg font-medium pl-1'>Play</span>
                </button>
                <button className='flex items-center px-4 py-2 border-none bg-gray-500 rounded-md ml-3'>
                <div className='text-2xl text-white flex items-center'>
                <ion-icon name="information-circle-outline"></ion-icon>
                </div>
                    <span className='text-lg font-medium pl-1 text-white'>Info</span>
                </button>
               </div>
            </div>
        </div>
    );
};

export default Featured;