import { useState } from "react";

const ListItem = ({index}) => {
    const [isHovered, setIsHovered] = useState(false);
    const trailer =
    "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
    return (
        <div style={{left: isHovered && index * 245 - 50 + index * 2.5}} 
        onMouseEnter={() => setIsHovered(true)} 
        onMouseLeave={() => setIsHovered(false)} 
        className='w-[245px] h-[140px] hover:w-[345px] hover:h-[350px] hover:absolute hover:top-[-170px] overflow-hidden hover:shadow-2xl hover:rounded-md text-white bg-black mr-[5px]'>
            <img src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="w-full h-full hover:h-[150px] object-cover"/>
            {isHovered && ( 
            <>
                <video src={trailer} autoPlay={true} loop className="w-full h-[150px] object-cover absolute top-0 left-0"></video>
                <div className="p-1 bg-black">
                <div className="flex items-center my-2">
                    <div className="flex items-center text-lg border-2 border-white border-solid p-1 rounded-full text-white mx-1">
                    <ion-icon name="play-outline"></ion-icon>
                    </div>
                    <div className="flex items-center text-lg border-2 border-white border-solid p-1 rounded-full text-white mx-1">
                    <ion-icon name="add-outline"></ion-icon>
                    </div>
                    <div className="flex items-center text-lg border-2 border-white border-solid p-1 rounded-full text-white mx-1">
                    <ion-icon name="thumbs-up-outline"></ion-icon>
                    </div>
                    <div className="flex items-center text-lg border-2 border-white border-solid p-1 rounded-full text-white mx-1">
                    <ion-icon name="thumbs-down-outline"></ion-icon>
                    </div>
                </div>
                <div className="flex items-center text-sm text-gray-400 font-semibold">
                    <p>1 hour 20 mins</p>
                    <p className="mx-2 border border-solid px-1 py-0.5 rounded-sm border-gray-400">18+</p>
                    <p>1999</p>
                </div>
                <div className="my-1">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, velit dicta, suscipit nihil vel aut officiis quos, perspiciatis </p>
                </div>
                <div>
                    <p>Action</p>
                </div>

            </div>
            </>)}
        </div>
    );
};

export default ListItem;