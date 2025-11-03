"use client";

import { CircleAlert, Edit, Eye, Search, Trash2 } from "lucide-react";
import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import HeaderEvent from "../headerEvent";
import SideBar from "../sideBar";

function Eventbody() {
  const events = [
    {
      eventTitle: "assosiation inaugration",
      catagory: "middle",
      type: "free",
      date: "12/2/3000",
      status: "pending",
    },
    {
      eventTitle: "assosiation inaugration",
      catagory: "middle",
      type: "paid",
      date: "12/2/3000",
      status: "approved",
    },
    {
      eventTitle: " meeting",
      catagory: "middle",
      type: "paid",
      date: "12/2/3000",
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
    <div className="flex flex-col w-full px-10">
      <h1 className="text-[24px] font-medium p-5">My Event</h1>
      <div className="bg-white p-8 border rounded-2xl">
        <div className="flex sm:flex-row md:justify-between flex-col items-center">
          <div className=" h-10 md:w-[300px] w-full items-center flex flex-row gap-3 px-2 text-gray-700 border rounded-3xl  bg-black/3">
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
          <div className="flex flex-row gap-3 items-center h-10 ">
            <h1 className="text-gray-500 p-2 text-[13px] ">Show</h1>
            <select className="h-10 w-10">
              <option>10</option>
              <option>10</option>
              <option>10</option>
            </select>
            <h1 className="text-gray-500 text-[13px]">entries</h1>
          </div>
        </div>
        <div className="mt-10">
          <Table>
            <TableHeader>
              <TableRow className="text-[14px] bg-black/3 rounded-3xl ">
                <TableHead>Event Title</TableHead>
                <TableHead>catogary</TableHead>
                <TableHead>Type</TableHead>
                <TableHead className="">Date & Time</TableHead>
                <TableHead className=" text-center align-middle">
                  status
                </TableHead>
                <TableHead className="text-right ">Action</TableHead>
              </TableRow>
            </TableHeader>
            {filteredEvents.map((items, id) => (
              <TableBody key={id}>
                <TableRow className="pt-10 text-[14px] font-medium  ">
                  <TableCell className=" text-gray-500  ">
                    {items.eventTitle}
                  </TableCell>
                  <TableCell>
                    {" "}
                    <Badge className=" bg-[#E6EF84] px-5 text-black">
                      {items.catagory}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge
                      className={`${
                        items.type === "paid"
                          ? "bg-[#84DCEF] text-[#1B1C17]"
                          : "bg-[#EAEAEA] text-[#707070]"
                      } text-[14px] px-2 `}
                    >
                      {items.type}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-gray-500">{items.date}</TableCell>

                  <TableCell className={" text-center align-middle"}>
                    <Badge
                      className={`${
                        items.status === "approved"
                          ? "bg-green-100 text-green-500 "
                          : "bg-red-50 text-[#F5B40A]"
                      } rounded w-20 h-7 text-[14px] `}
                    >
                      {" "}
                      {items.status}
                    </Badge>
                  </TableCell>

                  <TableCell className="text-gray-500 text-right flex flex-row justify-end gap-3 ">
                    <button onClick={edit}>
                      <Edit
                        size={20}
                        className="cursor-pointer hover:text-blue-500  "
                      />
                    </button>

                    <button onClick={trash}>
                      <Trash2
                        size={18}
                        className="cursor-pointer hover:text-red-500 "
                      />
                    </button>
                    <Eye
                      size={18}
                      className="cursor-pointer hover:text-gray-700"
                    />
                  </TableCell>
                </TableRow>
              </TableBody>
            ))}
          </Table>
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
