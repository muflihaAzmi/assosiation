"use client";

import React, { useState } from "react";
import { CircleAlert, Edit, Eye, Search, Trash2 } from "lucide-react";
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
import Link from "next/link";


// const [show ,setShow]=useState(false);

// 🧩 Define TypeScript types
export interface Column {
  key: string;
  label: string;
}

export interface EventItem {
  eventTitle: string;
  catagory: string;
  type: string;
  date: string;
  location: string;

  action: string
  [key: string]: string; // allows dynamic access like item[col.key]
}

interface EventTableProps {
  columns: Column[];
  events: EventItem[];
  mainheading: string
}

// eslint-disable-next-line react-hooks/rules-of-hooks


const Recipts: React.FC<EventTableProps> = ({ columns, events, mainheading }) => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [search, setSearch] = useState("");


  const filteredEvents = events.filter((e) =>
    e.eventTitle.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col w-full px-8">
      <h1 className="text-[24px] font-medium mt-5">{mainheading}</h1>

      <div className="bg-white p-6 border rounded-2xl mt-3">
        {/* 🔍 Search and Select */}
        <div className="flex sm:flex-row md:justify-between flex-col items-center">
          <div className="h-10 md:w-[300px] w-full flex items-center gap-2 px-4 text-gray-700 border rounded-3xl bg-black/3">
            <Search size={14} />
            <input
              className="outline-none text-[13px] placeholder:text-gray-500 w-full"
              type="text"
              placeholder="Search all events"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="flex flex-row gap-3 items-center px-2">
            <h1 className="text-gray-500 text-[14px]">Show</h1>
            <Select>
              <SelectTrigger className="border px-5 font-semibold text-[16px]">
                <span>10</span>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="10">10</SelectItem>
                <SelectItem value="20">20</SelectItem>
                <SelectItem value="30">30</SelectItem>
              </SelectContent>
            </Select>
            <h1 className="text-gray-500 text-[14px]">entries</h1>
          </div>
        </div>

        {/* 🧾 Table */}
        <div className="mt-10">
          <Table>
            <TableHeader>
              <TableRow className="text-[14px] bg-black/3 rounded-3xl border tracking-tight">
                {columns.map((col) => (
                  <TableHead
                    key={col.key}
                    className={
                      col.key === "action"
                        ? " align-middle text-end items-center"
                        : col.key === "location"
                          ? "  text-start"

                          : ""
                    }
                  >
                    {col.label}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>

            <TableBody>
  {filteredEvents.map((item, id) => (
    <TableRow key={id} className="text-[14px] font-medium">
      {columns.map((col) => {
        const value = item[col.key];

        if (col.key === "catagory") {
          return (
            <TableCell key={col.key} className="py-5">
              <Badge className="bg-[#E6EF84] px-5 py-1 text-black">
                {value}
              </Badge>
            </TableCell>
          );
        }

        if (col.key === "type") {
          return (
            <TableCell key={col.key} className="py-5">
              <Badge
                className={`${value === "Paid"
                  ? "bg-[#84DCEF] text-[#1B1C17]"
                  : "bg-[#EAEAEA] text-[#707070]"
                  } text-[14px] px-2 `}
              >
                {value}
              </Badge>
            </TableCell>
          );
        }

        if (col.key === "location") {
          return (
            <TableCell key={col.key} className="text-start align-middle py-5">
              {value}
            </TableCell>
          );
        }

        if (col.key === "action") {
          return (
            <TableCell
              key={col.key}
              className="text-black underline justify-end flex flex-row gap-3 py-5 items-center"
            >
              <Link
                href=""  // ✅ Fixed HERE
                target="_blank"
                className="underline text-black"
              >
                {value}
              </Link>
            </TableCell>
          );
        }

        return (
          <TableCell key={col.key} className="text-gray-500 tracking-tight">
            {value}
          </TableCell>
        );
      })}
    </TableRow>
  ))}
</TableBody>
          </Table>

          {/* 📄 Pagination Footer */}
          <div className="flex flex-row justify-between w-full items-center mt-2">
            <span className="text-[14px] text-gray-400 w-full">
              Showing 1 to {filteredEvents.length} of {events.length} entries
            </span>

            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    href="#"
                    className="border border-gray-400"
                  />
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
                  <PaginationNext
                    href="#"
                    className="border border-gray-400"
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Recipts;
