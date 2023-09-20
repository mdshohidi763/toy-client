import React from 'react';

const CarBanner = () => {
    return (
        <div className='mt-5'>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-96 lg:w-full mx-auto">
            {/* 1st div */}
            <div className="bg-[#FCE2AD] rounded-xl">
                <div className="flex">
                    <div className=" text-start relative lg:top-12 lg:left-9 left-10 top-2">
                        <h2 className="text-lg lg:text-2xl text-[#DC5C33] ">Spring Sales!!!</h2>
                        <h1 className="text-lg lg:text-xl text-white ">All Types of  Sports Cars <span className='text-[#DC5C33]'>50%</span> OFF !</h1>
                        <button className='text-white color2 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-xs px-3 py-1.5 text-center relative top-1 lg:top-2'>SHOP NOW </button>
                    </div>
                    <div className="relative lg:left-8 lg:top-10">
                        <img src="https://i.ibb.co/ftGQfq6/model-car-g6abd7a85b-1920-removebg-preview.png" className='animate-bounce duration-50
                    0' />
                    </div>
                </div>
            </div>

            {/* 2nd div */}
            <div className="flex bg-[#FCE2AD] rounded-xl">
                <div className="text-start relative lg:top-14 lg:left-9 left-10 top-3">
                    <h2 className="text-lg lg:text-2xl text-[#DC5C33]">Spring Sales!!!</h2>
                    <h1 className="text-lg lg:text-xl text-white">All Type of RC Toy Cars <span className='text-[#DC5C33]'>35%</span> OFF !</h1>
                    <button className='text-white color2 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-xs px-3 py-1.5 text-center relative top-1 lg:top-2'>SHOP NOW</button>
                </div>
                <div>
                    <img src="https://i.ibb.co/zrWNL71/car-63930-960-720-removebg-preview.png" className='animate-pulse relative left-5' alt="" />
                </div>
            </div>
            {/* 3rd div */}
            <div className="flex bg-[#FCE2AD] rounded-xl">
                <div className="text-start relative lg:top-12 lg:left-9 left-10 top-8">
                    <h2 className="text-lg lg:text-2xl text-[#DC5C33]">Spring Sales </h2>
                    <h1 className="text-lg lg:text-xl text-white">All Type of SUV Toy Cars <span className='text-[#DC5C33]'>45%</span>OFF!</h1>
                    <button className='text-white color2 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-xs px-3 py-1.5 text-center relative top-1 lg:top-2' >SHOP NOW </button>
                </div>
                <div className="pt-10 ">
                    <img src="https://i.ibb.co/PNxFSyn/model-car-gab6833f9d-1920-removebg-preview.png" className='animate-bounce relative left-5 lg:left-0' alt="" />
                </div>
            </div>
        </div>
    </div>
    );
};

export default CarBanner;