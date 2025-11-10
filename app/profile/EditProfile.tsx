"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { ChevronDownIcon, X } from "lucide-react";

function EditProfile() {
    const [open, SetOpen] = useState(false);
    const formData =[
        { label: "Full Name", name: "fullName", type: "text", value: "" },
        { label: "Nick Name", name: "nickName", type: "text", value: "" },
        {
            label: "Blood Group",
            name: "bloodGroup",
            type: "select",
            value: "",
            options: ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"],
        },
        { label: "Birth Date", name: "birthDate", type: "date", value: "" },
    ];
    // const handleChange = ({ index, newValue }: { index: number; newValue: string }) => {
    //     const updated = [...formData];
    //     updated[index].value = newValue;
    //     setFormData(updated);
    // };
    const ContactInfo = [
        {
            label: "Phone Number",
            placeholder: "your number",
        },
        {
            label: "Personal Email Address",
            placeholder: "Email",
        },
        {
            label: "Linkdin Url",
            placeholder: "Your Linkdin profile url",
        },
        {
            label: "Instagram Url",
            placeholder: "Your Instagram profile url",
        },
        {
            label: "facebook Url",
            placeholder: "Your Facebook profile url",
        },
        {
            label: "twitter Url",
            placeholder: "Your Twitter profile url",
        },
    ];
    const Education = [
        {
            label: "Degree",
            placeholder: "Your degree",
        },
        {
            label: "Institution",
            placeholder: "name of Institution",
        },
        {
            label: "degree",
            placeholder: "Your degree",
        },
    ];
    const EducationInfo = [
        {
            label: "Institution",
            placeholder: "name of Institution",
        },
        {
            label: "Desigination",
            placeholder: "your Desigination",
        },
        {
            label: "Address",
            placeholder: "your Address",
        },
    ];
    const Address = [
        {
            label: "city",
            placeholder: "name of Institution",
        },
        {
            label: "State ",
            placeholder: "your Desigination",
        },
        {
            label: "country",
            placeholder: "your country",
        },
        {
            label: "zipcode",
            placeholder: "zipcode",
        },
        {
            label: "Address",
            placeholder: "your Adress",
        },
    ];

    return (
        <div className="md:px-3 py-8 h-full w-full">
            <div className="flex flex-col flex-wrap pt-8 gap-4">
                <h1 className="text-[18px] font-semibold">Personal Info</h1>
                <div className="relative flex h-[110px]">
                    <Image
                        src="/profile.png"
                        alt="Profile image"
                        width={110}
                        height={95}
                        className="rounded-full border-3 border-greencol object-cover"
                    />
                    <div className="flex items-center gap-2 absolute bottom-0 left-17">
                        <label
                            htmlFor="file-upload"
                            className="cursor-pointer flex items-center text-white rounded-full transition"
                        >
                            <img src="/edit.png" className="w-10 h-10  "></img>
                        </label>
                        <input id="file-upload" type="file" className="hidden" />
                    </div>
                </div>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-5 w-full max-w-[800px] mt-8 ">
                    {formData.map((item,) => (
                        <div key={item.name} className="flex flex-col relative gap-2">
                            <label className=" bg-white px-2 sm:px-3 text-gray-400 text-[12px] font-medium  absolute   md:-top-3 -top-2   left-5">
                                {item.label}
                            </label>

                            {item.type === "select" ? (
                                <Select
                                    value={item.value}
                                   
                                >
                                    <SelectTrigger className="w-full  px-5 py-6 border hover:border-hovergreen rounded-xl ">
                                        <SelectValue placeholder={`Select ${item.label}`} />
                                        <ChevronDownIcon className="size-4 text-gray-500 placeholder:text-gray-400 " />
                                    </SelectTrigger>
                                    <SelectContent className="shadow-md">
                                        {item.options.map((opt) => {
                                            return (
                                                <SelectItem key={opt} value={opt}>
                                                    {opt}
                                                </SelectItem>
                                            );
                                        })}
                                    </SelectContent>
                                </Select>
                            ) : (
                                <Input
                                    type={item.type}
                                    value={item.value}
                                 
                                    placeholder={`Enter ${item.label}`}
                                    className="px-5 py-8 w-full lg:max-w-[400px] text-[14px] hover:border-hovergreen rounded-xl placeholder:text-gray-400 "
                                />
                            )}
                        </div>
                    ))}
                </div>
                <div className="relative md:w-[810px]  w-full mt-3">
                    <label className=" bg-white px-2 sm:px-3 text-gray-400 text-[12px] font-medium  absolute md:-top-3 -top-2   left-5">
                        About me
                    </label>
                    <div className="bg-white border border-gray-200 rounded-xl flex text-[15px] font-medium hover:border-hovergreen">
                        <textarea
                            placeholder="write your location"
                            className="rounded-xl w-full py-5 px-5 text-[14px] outline-none resize-none"
                            rows={4}
                        />
                    </div>
                </div>

                <h1 className="text-[18px] font-semibold mt-2">Contact Info</h1>
                <div className="grid md:grid-cols-2 md:w-[800px] grid-cols-1 gap-3 mt-2">
                    {ContactInfo.map((item, index) => (
                        <div key={index} className=" mt-2 relative ">
                            <label className=" bg-white px-2 sm:px-3 text-gray-400 text-[12px] font-medium  absolute   md:-top-3 -top-2   left-5">
                                {item.label}
                            </label>
                            <div className="bg-white border border-gray-200 rounded-xl flex text-[14px] font-medium hover:border-hovergreen">
                                <input
                                    type="text"
                                    placeholder={item.placeholder}
                                    className="rounded-xl  w-full lg:max-w-[400px] py-5 px-5  outline-none placeholder:text-gray-400  "
                                />
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-between md:w-[800px] mt-2">
                    <h1 className="text-[18px] font-semibold">Educational Information</h1>
                    <button
                        className=" underline text-[14px] font-medium hover:text-hovergreen transition-colors duration-300"
                        onClick={() => SetOpen(true)}
                    >
                        +Add New{" "}
                    </button>
                </div>
                <h1 className="text-gray-400 text-[16px] py-3 md:py-0">
                    No information found
                </h1>
                <div>
                    {open && (
                        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-10">
                            <div className="w-[480px] bg-white flex flex-col p-6 rounded-3xl shadow-lg  gap-4">
                                <div className="flex justify-between flex-row  w-full ">
                                    <h1 className="text-[20px] text-[#1b1c17]">Add Info</h1>
                                    <button onClick={() => SetOpen(false)}>
                                        <X className="rounded-full border h-10 w-10 p-1" />
                                    </button>
                                </div>
                                {Education.map((items, index) => (
                                    <div key={index} className=" mt-2 relative w-full ">
                                        <label className=" bg-white px-2 sm:px-3 text-gray-400 text-[12px] font-medium  absolute   md:-top-3 -top-2   left-5">
                                            {items.label}
                                        </label>
                                        <div className="bg-white border border-gray-200 rounded-xl flex text-[14px] font-medium hover:border-hovergreen">
                                            <input
                                                type="text"
                                                placeholder={items.placeholder}
                                                className="rounded-xl  w-full  py-5 px-5 lg:max-w-[400px] outline-none placeholder:text-gray-400"
                                            />
                                        </div>
                                    </div>
                                ))}
                                <div className="flex  gap-3 ">
                                    <button className="bg-greencol hover:bg-hovergreen text-[15px] text-black py-4 px-6 rounded-2xl font-sansserif ">
                                        Save Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <h1 className="text-[18px] font-semibold ">Professional Info</h1>
                <div className="grid md:w-[800px] md:grid-cols-2 grid-cols-1 gap-3 mt-2">
                    {EducationInfo.map((item, index) => (
                        <div
                            key={index}
                            className={`mt-2 relative w-full ${index === EducationInfo.length - 1 ? "md:col-span-2 col-span-1" : ""
                                }`}
                        >
                            {" "}
                            <label className=" bg-white px-2 sm:px-3 text-gray-400 text-[12px] font-medium absolute md:-top-3 -top-2 left-5">
                                {item.label}
                            </label>
                            <div className="bg-white border border-gray-200 rounded-xl flex text-[14px] font-medium hover:border-hovergreen">
                                <input
                                    type="text"
                                    placeholder={item.placeholder}
                                    className="rounded-xl w-full py-5 px-5 outline-none lg:max-w-[400px] placeholder:text-gray-400  "
                                />
                            </div>
                        </div>
                    ))}
                </div>
                <h1 className="text-[18px] font-semibold ">Address</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 md:w-[800px] gap-3 mt-2">
                    {Address.map((item, index) => (
                        <div
                            key={index}
                            className={`mt-2 relative w-full ${index === Address.length - 1 ? "md:col-span-2 col-span-1 ": ""
                                }`}
                        >
                            {" "}
                            <label className=" bg-white px-2 sm:px-3 text-gray-400 text-[12px] font-medium  absolute   md:-top-3 -top-2   left-5">
                                {item.label}
                                <span className="text-red-600">*</span>
                            </label>
                            <div className="bg-white border border-gray-200 rounded-xl flex text-[14px] font-medium hover:border-hovergreen">
                                <input
                                    type="text"
                                    placeholder={item.placeholder}
                                    className="rounded-xl  w-full  py-5 px-5 lg:max-w-[400px] outline-none placeholder:text-gray-400  "
                                />
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex  gap-3 ">
                    <button className="bg-greencol hover:bg-hovergreen text-[15px] text-black py-4 px-8 font-semibold rounded-2xl">
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
}

export default EditProfile;
