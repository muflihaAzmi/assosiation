import React from 'react'



function Changepasword() {
    return (
        <div className='w-[70%] py-2'>
            <div>
                <h1 className='text-[18px] mt-10'>Change Password</h1>
                <h1 className='text-[14px] text-gray-400'>Change or reset your Account Password</h1>
            </div>
            <div className='grid md:grid-cols-2 gap-4 mt-10 grid-cols-1'>
            <div className="relative flex flex-col w-full">
          
                <label className="absolute md:-top-3 left-5 bg-white text-gray-400  px-2 sm:px-3 text-xs text-[12px] font-medium">
                   Current Password
                </label>

                <div className="bg-white border border-gray-200 rounded-xl flex  hover:hovergrren">
                    <input
                        type="text"
                        className="outline-none rounded-xl w-full py-3 sm:py-4 px-4 sm:px-5  md:w-[190px] lg:w-[260px] font-medium placeholder:text-[14px] placeholder:text-gray-600"
                        placeholder='Current Password'
                    />
                </div>
            </div>
            <div className="relative flex flex-col w-full">
               
                <label className="absolute md:-top-3 left-5 bg-white text-gray-400  px-2 sm:px-3 text-xs text-[12px] font-medium">
                    New password
                </label>

           
                <div className="bg-white border border-gray-200 rounded-xl flex  hover:hovergrren">
                    <input
                        type="text"
                        className="outline-none rounded-xl w-full py-3 sm:py-4 px-4 sm:px-5  md:w-[190px] lg:w-[260px] font-medium placeholder:text-[14px] placeholder:text-gray-600"
                        placeholder='Enter new Password'
                    />
                </div>
            </div>
            <div className="relative flex flex-col w-full">
            
                <label className="absolute md:-top-3 left-5 bg-white text-gray-400  px-2 sm:px-3 text-xs text-[12px] font-medium">
                    Confirm Password
                </label>
                <div className="bg-white border border-gray-200 rounded-xl flex  hover:hovergrren">
                    <input
                        type="text"
                        className="outline-none rounded-xl w-full py-3 sm:py-4 px-4 sm:px-5  md:w-[190px] lg:w-[260px] font-medium placeholder:text-[14px] placeholder:text-gray-600"
                        placeholder='Confirm Password'
                    />
                </div>
            </div>
            </div>
            <div className=" items-center gap-3 hidden sm:block p-5">
        <button className="bg-greencol hover:bg-hovergreen text-[15px] text-black py-3 font-medium px-6 rounded-xl ">
          Save Now
        </button>
      </div>
        </div>
    )
}

export default Changepasword