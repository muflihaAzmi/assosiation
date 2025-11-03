"use client"

import Link from "next/link";
import React, { useState } from "react";
import LoginPage from "../Login/LoginImage";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,

} from "@/components/ui/select";
//  type inputs={
//     labals:"string",
//     place:"string",
//    style?: React.CSSProperties,
//  }
function SignUppage() {
    
    const Signup = [{
        labals: "Full Name",
        place: "full Name"
    }, {
        labals: "Phone Number",
        place: "phone number"
    },
    {
        labals: "Year of Joining",
        place: "year"
    },
    {
        labals: "Email Adress",
        place: "email Address"
    },
    {
        labals: "Password",
        place: "password"
    },
    {
        labals: "Confirm password",
        place: "confirm Password",

    },]

    return (
        <div>
            <div className="flex flex-row">
                <div className="hidden md:block">
                    {" "}
                    <LoginPage />
                </div>
                <div className="flex flex-col lg:ml-20 lg:w-[600px] w-full px-5 md:mt-25 mt-10">
                    <h1 className="text-black font-semibold text-3xl">Create Membership</h1>
                    <div className="flex flex-row gap-2 mt-2">
                        <h1 className="text-gray-400 text-l">Already have a membership?</h1>
                        <Link
                            href="/Login"
                            className="underline hover:text-[var(--hovergreen)]"
                        >
                            Sign In
                        </Link>
                    </div>
                    <div className=" gap-5 mt-15 grid sm:grid-cols-2 grid-col-1">
                        {Signup.map((items, index) => (


                            <div key={index} className="relative flex flex-col w-full">

                                <label className=" bg-white px-2 sm:px-3 text-gray-400 text-[12px] font-medium  absolute   md:-top-3 -top-2   left-5">
                                    {items.labals}<span className="text-red-500">*</span>
                                </label>


                                <div className="bg-white border border-gray-200 rounded-xl flex text-[15px] font-medium hover:border-hovergreen" >
                                    <input
                                        type="text"
                                        placeholder={items.place}
                                        className="rounded-xl  w-full  py-3 sm:py-4 px-4 sm:px-5  md:w-[190px] lg:w-[290px] outline-none  "
                                    />
                                </div>
                            </div>
                        ))}
                      

                    </div>
                    <div className="w-full py-3 bg-greencol flex justify-center items-center  font-medium  hover:bg-[var(--hovergreen)] rounded-xl mt-10 duration-300 transition ease-in-out">
                        <button>Sign up</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUppage;
