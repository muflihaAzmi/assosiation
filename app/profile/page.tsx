"use client"

import React, { useState } from 'react';
import Profileview from './profileview'
import EditProfile from './EditProfile';

function Profile() {
  const [currentPage, Setcurrentpage] = useState("profile")
  return (
    <div className='px-8'>
      <h1 className="text-[24px] mt-5 ">Profile</h1>
      <div className='bg-white h-full px-8 border rounded-2xl mt-2'>
        <div className='border-b flex gap-4' >
          <button
            onClick={() => Setcurrentpage("profile")}
            className={`relative pt-8 px-5 pb-3  transition-colors duration-300 ${currentPage === "profile" ? "text-black" : "text-gray-400"
              }`}
          >
            Profile
            <span
              className={`absolute bottom-0 left-0 h-[0.2px] bg-black transition-all duration-500 ${currentPage === "profile" ? "w-full" : "w-0"
                }`}
            ></span>
          </button>

          <button onClick={() => Setcurrentpage("Edit profile")} 
          className={`relative ${currentPage == "Edit profile" ? " text-black " : "text-gray-400"} pt-8 px-5 pb-3  `}>
            Edit profile
            <span className={`absolute bottom-0 left-0 h-[0.2px] bg-black transition-all duration-500 ${currentPage === "Edit profile" ? "w-full" : "w-0"
            }`}></span >
            </button>

        </div>

       
          {currentPage == "profile" && <Profileview />}
          {currentPage == "Edit profile" && <EditProfile />}

  

      </div>
    </div>
  )
}

export default Profile