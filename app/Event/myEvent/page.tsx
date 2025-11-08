"use client";

import { CircleAlert, Edit, Eye, Search, Trash2 } from "lucide-react";
import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";

import {
  Table,
  TableBody,
 
  TableCell,
 
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,

  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";

function Eventbody() {
  const events = [

    {
     
      eventTitle: "Assosiation inaugration",
      catagory: "middle",
      type: "free",
      date: "12/2/3000",
      location: "delhi",
      status: "pending",
    },
    {
     
      eventTitle: "Assosiation inaugration",
      catagory: "middle",
      type: "Paid",
      date: "21st november,2023 11:00",
      location: "delhi",
      status: "approved",
    },
    {
      
      eventTitle: " Meeting",
      catagory: "middle",
      type: "Paid",
      date: "12/2/3000",
      location: "delhi",
      status: "approved",
    },
  ];
  const [popup, setpopup] = useState(false);
  const [deleted, setdeleted] = useState(false);
  const [search, setSearch] = useState("");

  const edit = () => {
    setpopup((show) => !show);
  };

  const trash = () => {
    setdeleted((toggle) => !toggle);
  };
  
  const filteredEvents = events.filter((e) =>
    e.eventTitle.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col w-full px-8">
      <h1 className="text-[24px] font-medium  mt-5">My Event</h1>
      <div className="bg-white p-6 border rounded-2xl mt-3 ">
        <div className="flex sm:flex-row md:justify-between flex-col items-center">
          <div className=" h-10 md:w-[300px] w-full items-center flex flex-row gap-2 px-4 text-gray-700 border rounded-3xl  bg-black/3">
            {" "}
            <Search size={14} />
            <input
              className="outline-none text-[13px] placeholder:text-gray-500"
              type="text"
              placeholder="Search all event"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            ></input>
          </div>
          <div className="flex flex-row gap-3 items-center  px-2">
            <h1 className="text-gray-500  text-[14px] ">Show</h1>
            <div className="flex flex-col items-center">
              <Select>
                <SelectTrigger className="border px-5 font-semibold text-[16px]">
                  <span>10</span>
                </SelectTrigger>
                <SelectContent className="w-10">
                  <SelectItem value="10">
                    <span>10</span>
                  </SelectItem>
                  <SelectItem value="1">
                    <span>10</span>
                  </SelectItem>
                  <SelectItem value="2">
                    <span>10</span>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <h1 className="text-gray-500 text-[14px]">entries</h1>
          </div>
        </div>
        <div className="mt-10">
          <Table>
            <TableHeader>
          
              <TableRow className="text-[14px] bg-black/3 rounded-3xl border tracking-tight">  
                <TableHead >eventTitle</TableHead>
                <TableHead>Catogary</TableHead>
                <TableHead>Type</TableHead>
                <TableHead className="">Date & Time</TableHead>
                <TableHead className="">Location</TableHead>
                <TableHead className=" text-center align-middle">
                  status
                </TableHead>
                <TableHead className="flex justify-center items-center ">
                  Action
                </TableHead>
              </TableRow>
            </TableHeader>
           
              <TableBody>
                     {filteredEvents.map((items, id) => (
                <TableRow key={id}className="pt-10 text-[14px] font-medium ">
                  <TableCell className=" text-gray-500 p-7 flex tracking-tight ">
                    {items.eventTitle}
                  </TableCell>
                  <TableCell>
                    {" "}
                    <Badge className=" bg-[#E6EF84] px-5 py-1 text-black">
                      {items.catagory}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge
                      className={`${items.type === "Paid"
                        ? "bg-[#84DCEF] text-[#1B1C17]"
                        : "bg-[#EAEAEA] text-[#707070]"
                        } text-[14px] px-2 `}
                    >
                      {items.type}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-gray-500 tracking-tight w-[100px]">
                    {items.date}
                  </TableCell>
                  <TableCell className=" text-gray-500 tracking-tight">
                    {items.location}
                  </TableCell>

                  <TableCell className={" text-center align-middle"}>
                    <Badge
                      className={`${items.status === "approved"
                        ? "bg-green-100 text-green-500 "
                        : "bg-red-50 text-[#F5B40A]"
                        } rounded w-20 h-7 text-[14px]  tracking-tight`}
                    >
                      {" "}
                      {items.status}
                    </Badge>
                  </TableCell>

                  <TableCell className="text-gray-300 justify-center flex flex-row gap-3 items-center ">
                    <button onClick={edit}>
                      <Edit
                        size={25}
                        className="cursor-pointer hover:text-blue-500 border rounded-2xl p-1"
                      />
                    </button>

                    <button onClick={trash}>
                      <Trash2
                        size={25}
                        className="cursor-pointer hover:text-red-500 border rounded-2xl p-1"
                      />
                    </button>
                    <Eye
                      size={25}
                      className="cursor-pointer hover:text-gray-700 border rounded-2xl p-1"
                    />
                  </TableCell>
                </TableRow>
                  ))} 
              </TableBody>
          
            
          </Table>
          <div className="flex flex-row justify-between w-full items-center">
            
              <span className="text-[14px] text-gray-400 w-full ">
                showing 1 to 4 of 4 entries
              </span>
             
              <Pagination  className="mt-2 ">
                <PaginationContent >
                  <PaginationItem>
                    <PaginationPrevious href="#" className="border border-gray-400  "/>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      href="#"
                      className="bg-greencol hover:bg-hovergreen"
                    >
                      1
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" className="border border-gray-400" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
          </div>

          {popup && (
            <div className="fixed inset-0 flex items-center justify-center bg-black/40">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h1 className="text-lg font-semibold mb-4">
                  Are you sure you want to edit?
                </h1>
                <div className="flex justify-end gap-3">
                  <button
                    onClick={() => setpopup(false)}
                    className="px-4 py-2 bg-gray-200 rounded-md"
                  >
                    Cancel
                  </button>
                  <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
                    Yes, Edit
                  </button>
                </div>
              </div>
            </div>
          )}

          {deleted && (
            <div className="fixed inset-0 flex items-center justify-center bg-black/40">
              <div className="flex flex-col bg-white p-8 rounded-lg shadow-lg items-center gap-4 w-[400px] ">
                <CircleAlert className="text-red-400 w-25 h-25  " />

                <h1 className="text-2xl font-medium">
                  {" "}
                  sure! you want to delete?
                </h1>
                <h1>You won&apos;t be able to revert this!</h1>
                <div className="flex justify-end gap-3">
                  <button
                    onClick={() => setdeleted(false)}
                    className="px-4 py-2 bg-gray-200 rounded-md"
                  >
                    Cancel
                  </button>
                  <button className="px-4 py-2 bg-red-400 text-white rounded-md">
                    Yes, Delete
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Eventbody;
