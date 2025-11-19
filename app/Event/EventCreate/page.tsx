"use client";

import React, { useState } from "react";
import Tiptap from '../EventCreate/tiptap'



import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { format } from "date-fns";
import {
  Calendar as CalendarIcon,
  ChevronDownIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";



function createEvent() {

// eslint-disable-next-line react-hooks/rules-of-hooks
const [date, setDate] = useState<Date | undefined>(undefined);

  const dataList = [
    {
      title: "Event Title",
      placeholder: "title",
    },
    {
      title: "number of tickets",
      placeholder: "300",
    },

  ];
  return (
    <div className="w-full px-8">
      <h1 className="text-[24px] mt-5">Create Event</h1>
      <div className="w-full bg-white border rounded-2xl px-10 pt-15 mt-3  ">
        <div className="lg:w-[70%] ">
          <div className="grid sm:grid-cols-2  grid-cols-1 gap-4  ">
            {dataList.map((items, index) => (
              <div key={index} className="relative xxl:w-[330px] w-full">
                <label className=" bg-white px-2 sm:px-3 text-gray-400 text-[12px] font-medium  absolute   md:-top-3 -top-2   left-5">
                  {items.title}
                  <span className="text-red-500">*</span>
                </label>
                <div className="bg-white border border-gray-200 rounded-xl flex text-[15px] font-medium hover:border-hovergreen">


                  <input
                    type="text"
                    placeholder={items.placeholder}
                    className="rounded-xl  w-full  py-3 sm:py-4 px-4 sm:px-5  md:w-[190px] lg:w-[290px] outline-none  "
                  />

                </div>
              </div>
            ))}

            <div className="relative">
              <label className=" bg-white px-2 sm:px-3 text-gray-400 text-[12px] font-medium absolute md:-top-3 -top-2 left-5">
                Event<span className="text-red-500">*</span>
              </label>

              <Select>
                <SelectTrigger className="w-full bg-white border border-gray-200 rounded-xl flex text-[15px] font-medium hover:border-hovergreen py-2 sm:py-4 px-4 sm:px-5 ">
                  <SelectValue placeholder="Event" />
                  <ChevronDownIcon className="size-4 text-gray-500" />
                </SelectTrigger>

                <SelectContent className="shadow-md ">
                  <SelectItem value="profile">meeting</SelectItem>
                  <SelectItem value="logout">assosiation</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="relative">
              <label className=" bg-white px-2 sm:px-3 text-gray-400 text-[12px] font-medium  absolute   md:-top-3 -top-2   left-5">
                Date<span className="text-red-500">*</span>
              </label>
              <Popover>
                <PopoverTrigger
                  asChild
                  className="w-full bg-white border border-gray-200 rounded-xl flex text-[15px] font-medium hover:border-hovergreen py-2 sm:py-4 px-4 sm:px-5 h-15 "
                >
                  <Button
                    variant="outline"
                    data-empty={!date}
                    className="data-[empty=true]:text-muted-foreground  justify-between text-left font-normal flex "
                  >
                    {date ? (
                      format(date, "PPP")
                    ) : (
                      <span className="text-black">12:33:00</span>
                    )}
                    <CalendarIcon className="text-black" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar mode="single" selected={date} onSelect={setDate} />
                </PopoverContent>
              </Popover>
            </div>
          </div>
          <div className="relative xxl:w-[330px] w-full mt-3">
            <label className=" bg-white px-2 sm:px-3 text-gray-400 text-[12px] font-medium  absolute   md:-top-3 -top-2   left-5">
              Location
              <span className="text-red-500">*</span>
            </label>
            <div className="bg-white border border-gray-200 rounded-xl flex text-[15px] font-medium hover:border-hovergreen">

              <textarea
                placeholder="write your location"
                className="rounded-xl w-full py-3 sm:py-4 px-4 text-[14px] sm:px-5 md:w-[190px] lg:w-[290px] outline-none resize-none"
                rows={3}
              />
            </div>
          </div>
          <div className="w-full mt-2">
            
             <Tiptap/> 
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 gap-2 mt-6">
            <div className="relative">
              <label className=" bg-white px-2 sm:px-3 text-gray-400 text-[12px] font-medium  absolute   md:-top-3 -top-2   left-5">
                upload Image<span className="text-red-500">*</span>
              </label>

              <div className="flex items-center justify-center w-full">
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center w-full h-55 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round" strokeLinejoin="round" 
                        strokeWidth="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p className="mb-2 text-sm text-gray-400">
                      {" "}
                      drag and drop
                    </p>
                  </div>
                  <input id="dropzone-file" type="file" className="hidden" />
                </label>
              </div>
            </div>
            <div className="relative">
              <label className=" bg-white px-2 sm:px-3 text-gray-400 text-[12px] font-medium  absolute   md:-top-3 -top-2   left-5">
                Ticket Image<span className="text-red-500">*</span>
              </label>
              <div className="flex items-center justify-center w-full">
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center w-full h-55 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                      strokeLinecap="round" strokeLinejoin="round" 
                        strokeWidth="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p className="mb-2 text-sm text-gray-400">
                      {" "}
                      drag and drop
                    </p>
                  </div>
                  <input id="dropzone-file" type="file" className="hidden" />
                </label>
              </div>
            </div>
            <div className="md:flex items-center gap-3 hidden sm:block p-5">
              <button className="bg-greencol hover:bg-hovergreen text-[15px] text-black py-3 px-4 rounded-xl ">
                Publish Now
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default createEvent;
