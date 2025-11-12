import { Check } from "lucide-react";
import React, { useState } from "react";
import { toast } from "sonner";

function Security() {
  const [on, SetOn] = useState(false);
  const [onn,SetOnn] =useState(false);
  function handleOn() {
    SetOn((toggle) => !toggle);
    toast.custom((t) => (
    <div className="px-4 py-3 bg-green-800 text-white rounded shadow-lg font-medium flex gap-2">
      <Check className="font-semibold"/> Updated Successfully!
    </div>))
  }
   function handleOnn() {
    SetOnn((toggle) => !toggle);
    toast.custom((t) => (
    <div className="px-4 py-3 bg-green-800 text-white rounded shadow-lg font-medium flex gap-2">
      <Check className="font-semibold"/> Updated Successfully!
    </div>))
  }
  return (
    <div className="w-[70%]">
      <div className="flex justify-between py-7 border-b-1">
        <div>
          <h1 className="text-[18px]">Phone Number Verification</h1>
          <h1 className="text-[14px] text-gray-400">234567890</h1>
        </div>
        <div className="flex items-center gap-3">
          <button className="bg-greencol hover:bg-hovergreen text-[15px] text-black py-3 px-4 rounded-xl font-sansserif">
            verified
          </button>
        </div>
      </div>
      <div className="flex justify-between py-7 border-b-1">
        <div>
          <h1 className="text-[18px]">Email Adress Verification</h1>
          <h1 className="text-[14px] text-gray-400">alumini@gmail.com</h1>
        </div>
        <div className="flex items-center gap-3">
          <button className="bg-greencol hover:bg-hovergreen text-[15px] text-black py-3 px-4 rounded-xl font-sansserif">
            verified
          </button>
        </div>
      </div>
      <div className="flex justify-between py-6 border-b-1">
        <div>
          <h1 className="text-[18px]">Show Email Address in Public Profile</h1>
        </div>
        <div
          className={` w-13 h-7 rounded-3xl cursor-pointer flex items-center 
          transition-all duration-300 ${on ? "bg-greencol" : "bg-gray-300"}`}
          onClick={handleOn}
        >
          <div
            className={`
            w-6 h-6 rounded-full bg-white shadow 
            transition-all duration-300
            ${on ? "translate-x-6" : "translate-x-0"}
          `}
          ></div>
        </div>
        
        
      </div>
       <div className="flex justify-between py-6 border-b-1">
        <div>
          <h1 className="text-[18px]">Show Phone Number in Public Profile</h1>
        </div>
        <div
          className={` w-13 h-7 rounded-3xl cursor-pointer flex items-center 
          transition-all duration-300 ${onn ? "bg-greencol" : "bg-gray-300"}`}
          onClick={handleOnn}
        >
          <div
            className={`
            w-6 h-6 rounded-full bg-white shadow 
            transition-all duration-300
            ${onn ? "translate-x-6" : "translate-x-0"}
          `}
          ></div>
        </div>
        
        
      </div>
    </div>
  );
}

export default Security;
