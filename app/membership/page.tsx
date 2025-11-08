import React from 'react'
import Image from 'next/image'

function Membership() {
    return (
        <div className='p-8'>
            <h1 className='text-[24px]  '>Membership</h1>
            <div className='bg-white rounded-3xl border p-8 '>
                <div className='flex  items-center gap-4 px-20'>
                    <div className='border rounded-full h-8 w-8 items-center flex justify-center bg-pink-100 text-red-600'>!</div>
                    <h1 className='text-2xl'>Currently you have no membership</h1>
                </div>

                <div className=' flex gap-10 py-10 justify-center'>
                    <div className='border-1  py-8 rounded-3xl shadow-md flex flex-col gap-2 w-[270px] px-4'><Image src="/premium.jpg" alt="premium" width={120} height={100}></Image>
                    <span className='text-[18px]'>Premium</span><p className='text-2xl'>$20.5<span className='text-[14px] text-gray-400'>/6month</span></p><div className='h-[0.1px] w-full bg-gray-400'></div>
                        <div className="flex items-center gap-3 hidden sm:block">
                            <button className="bg-greencol hover:bg-hovergreen text-[15px] text-black py-2 px-4 rounded-xl font-sansserif">
                              Get MemberShip
                            </button>
                        </div>
                    </div>
                    <div className='border-1  py-8 rounded-3xl shadow-md  w-[270px] px-4 flex flex-col gap-2'><Image src="/silver.png" alt="premium" width={120} height={100}></Image>
                    <span className='text-[18px]'>Silver Membership</span><p className='text-2xl'>$20.5<span className='text-[14px] text-gray-400'>/6month</span></p><div className='h-[0.1px] w-full bg-gray-400'></div>
                        <div className="flex items-center gap-3 hidden sm:block">
                            <button className="bg-greencol hover:bg-hovergreen text-[15px] text-black py-2 px-4 rounded-xl font-sansserif">
                              Get MemberShip
                            </button>
                        </div></div>
                    <div className='border-1  py-8 rounded-3xl shadow-md  w-[270px] px-4 flex flex-col gap-2'><Image src="/basic.jpeg" alt="premium" width={120} height={100}></Image>
                    <span className='text-[18px]'>basic membership</span><p className='text-2xl'>$20.5<span className='text-[14px] text-gray-400'>/6month</span></p><div className='h-[0.1px] w-full bg-gray-400'></div>
                        <div className="flex items-center gap-3 hidden sm:block">
                            <button className="bg-greencol hover:bg-hovergreen text-[15px] text-black py-2 px-4 rounded-xl font-sansserif">
                              Get MemberShip
                            </button>
                        </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Membership