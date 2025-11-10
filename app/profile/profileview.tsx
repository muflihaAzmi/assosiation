import React from 'react'
import Image from 'next/image'

function Profileview() {
    return (
        <div className='md:px-3 py-8'>
            <div className="flex flex-row flex-wrap items-center justify-between  ">

                <div className="flex items-center pt-8 gap-4 h-20">
                    <Image
                        src="/profile.png"
                        alt="Profile image"
                        width={110}
                        height={90}
                        className="rounded-full border-3 border-greencol object-cover"
                    />
                    <h1 className="md:text-[24px] text-[20px] font-medium text-gray-800">sopia johnson</h1>
                </div>


                <div className="flex items-center gap-3 mt-10">
                    <img
                        src="/face.png"
                        alt="Facebook"
                        className="w-10 h-10 border rounded-full p-2 hover:bg-hovergreen cursor-pointer transition-colors duration-300"
                    />
                    <img
                        src="/twitter.jpg"
                        alt="Twitter"
                        className="w-10 h-10 border rounded-full p-2 hover:bg-hovergreen cursor-pointer transition-colors duration-300"
                    />
                    <img
                        src="/link.png"
                        alt="LinkedIn"
                        className="w-11 h-11 border rounded-full p-2 hover:bg-hovergreen cursor-pointer transition-colors duration-300"
                    />
                    <img
                        src="/insta.png"
                        alt="Instagram"
                        className="w-10 h-10 border rounded-full p-2 hover:bg-hovergreen cursor-pointer transition-colors duration-300"
                    />
                </div>
            </div>
            <div className='flex md:flex-row  flex-col justify-between w-full '>
                <div className='flex flex-col bg-gray-50 mt-8 md:w-[800px] px-5 rounded-2xl  '>
                    <div className='flex flex-col gap-4 py-8 border-b-1 '>
                        <h1 className='text-[18px] font-medium'>Profile Bio</h1>
                        <p className='text-gray-400 text-[14px]'>Hello, I am Sophia Johnson, a seasoned accountant with a wealth of experience in financial management and analysis. I specialize in tax accounting, helping individuals and businesses navigate complex tax codes while optimizing their financial positions.</p>
                    </div>
                    <div className='flex gap-8 py-8 text-[14px]'>
                        <ul className=' font-semibold flex flex-col gap-3'>
                            <li >
                                Full Name:
                            </li>
                            <li >
                                Email:
                            </li>
                            <li>
                                Phone:
                            </li>

                            <li>
                                Batch:
                            </li> <li>
                                Date of Birth:
                            </li>
                            <li>
                                Gender
                            </li>
                            <li>
                                City:
                            </li>
                        </ul>
                        <ul className='text-gray-400 flex flex-col gap-3'>
                            <li><span className='text-gray-400'>sopia</span></li>
                            <li>sofia@gmail.com</li>
                            <li>234567890</li>
                            <li>1983</li>
                            <li>11/30/2000</li>
                            <li>male</li>
                            <li>malappuram</li>
                        </ul>
                    </div>
                </div>
                <div className='flex flex-col bg-gray-50 rounded-2xl xl:w-[290px] h-[260px] mt-10'>
                    <div className='text-[18px] flex flex-col py-8 border-b-1 px-5'>
                        <p className='font-semibold'>Educational Info</p>
                        <p className='text-[14px] text-gray-400'>No Educational Info Found</p>
                    </div>
                    <div className='text-[14px] py-8 px-5'>
                        <h1 className='text-black font-semibold text-[18px] '>Proffesional Info</h1>
                        <ul className='font-medium flex flex-col gap-2 mt-2'>
                            <li>Company Name:</li>
                            <li>Designation:</li>
                            <li>Office Adress:</li>

                        </ul>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Profileview