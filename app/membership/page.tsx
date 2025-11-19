import React from 'react'
import Image from 'next/image'

function Membership() {
    return (
        <div className='p-8'>
            <h1 className='text-[24px] pb-3 font-medium tracking-wide '>Membership</h1>
            <div className='bg-white rounded-3xl border p-8 '>
                <div className='flex items-center gap-4 lg:px-20 lg:ml-13'>
                    <div className='border rounded-full h-9 w-9 items-center flex justify-center bg-pink-100 font-bold text-red-600'>!</div>
                    <h1 className='text-[18px] tracking-wide'>Currently you have no membership</h1>
                </div>

                <div className=' grid  py-10 justify-center lg:px-30 md:grid-cols-2 lg:grid-cols-3 grid-cols-1'>
                    <div className='border-1  py-2 rounded-3xl flex flex-col gap-1 w-[280px] px-4'><Image src="/premium.jpg" alt="premium" width={100} height={100}></Image>
                    <span className='text-[18px]'>Premium</span><p className='text-[32px] font-bold tracking-wide'>$20.5<span className='text-[14px] font-normal text-gray-600'>/6month</span></p><div className='h-[0.1px] w-full bg-gray-200'></div>
                        <div className="flex items-center mt-2">
                            <button className="bg-greencol hover:bg-hovergreen text-[15px] text-black py-2 px-6 rounded-xl font-sansserif">
                              Get MemberShip
                            </button>
                        </div>
                    </div>
                    <div className='border-1  py-2 rounded-3xl w-[280px] px-4 flex flex-col gap-1'><Image src="/silver.png" alt="premium" width={100} height={100}></Image>
                    <span className='text-[18px]'>Silver Membership</span><p className='text-[32px] font-bold tracking-wide'>$20.5<span className='text-[14px] font-normal text-gray-600'>/6month</span></p><div className='h-[0.1px] w-full bg-gray-200'></div>
                        <div className="flex items-center mt-2">
                            <button className="bg-greencol hover:bg-hovergreen text-[15px] text-black py-2 px-6 rounded-xl ">
                              Get MemberShip
                            </button>
                        </div></div>
                    <div className='border-1  py-4 rounded-3xl w-[280px] px-4 flex flex-col gap-1'><Image src="/basic.jpeg" alt="premium" width={100} height={100}></Image>
                    <span className='text-[18px]'>Basic membership</span><p className='text-[32px] font-bold tracking-wide'>$20.5<span className='text-[14px] font-normal text-gray-600'>/2month</span></p><div className='h-[0.1px] w-full bg-gray-200'></div>
                        <div className="flex items-center mt-2">
                            <button className="bg-greencol hover:bg-hovergreen text-[15px] text-black py-2 px-6 rounded-xl font-sansserif">
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