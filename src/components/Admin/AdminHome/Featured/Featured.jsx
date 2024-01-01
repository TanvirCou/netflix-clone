
const Featured = () => {
    return (
        <div className='w-full'>
            <div className='py-2 px-4 flex justify-between'>

                <div className='border w-[30%] p-7 rounded-md shadow-md'>
                    <p className='text-xl font-medium'>Revenue</p>
                    <div className='flex items-center py-3'>
                        <p className='text-3xl font-semibold'>$2,145</p>
                        <div className='flex items-center pl-6'>
                            <p className='text-sm font-medium'>-11.4</p>
                            <div className='flex items-center text-md text-red-600 pl-1'>
                                <ion-icon name="arrow-down-outline"></ion-icon>
                            </div>
                        </div>
                    </div>
                    <p className='text-sm text-gray-500 font-medium'>Compared to last Month</p>
                </div>

                <div className='border w-[30%] p-7  rounded-md shadow-md'>
                    <p className='text-xl font-medium'>Sales</p>
                    <div className='flex items-center py-3'>
                        <p className='text-3xl font-semibold'>$4,445</p>
                        <div className='flex items-center pl-6'>
                            <p className='text-sm font-medium'>-9.4</p>
                            <div className='flex items-center text-md text-red-600 pl-1'>
                                <ion-icon name="arrow-down-outline"></ion-icon>
                            </div>
                        </div>
                    </div>
                    <p className='text-sm text-gray-500 font-medium'>Compared to last Month</p>
                </div>

                <div className='border w-[30%] p-7  rounded-md shadow-md'>
                    <p className='text-xl font-medium'>Cost</p>
                    <div className='flex items-center py-3'>
                        <p className='text-3xl font-semibold'>$10,145</p>
                        <div className='flex items-center pl-6'>
                            <p className='text-sm font-medium'>+9.4</p>
                            <div className='flex items-center text-md text-green-600 pl-1'>
                                <ion-icon name="arrow-up-outline"></ion-icon>
                            </div>
                        </div>
                    </div>
                    <p className='text-sm text-gray-500 font-medium'>Compared to last Month</p>
                </div>

            </div>
        </div>
    );
};

export default Featured;