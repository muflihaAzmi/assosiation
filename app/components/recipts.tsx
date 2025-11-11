"use client";

import React, { useState } from "react";
import { Search } from "lucide-react";
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
import Transaction from "./transaction";
import { motion } from "framer-motion";

// 🧩 Type Definitions
type Event = {
  user: string;
  purpose: string;
  transactionID: string;
  payment: string;
  Date: string;
  amount: string;
  invoices: string;
};

type Column = {
  label: string;
  key: keyof Event;
};

interface EventTableProps {
  Columns: Column[];
  Event: Event[];
  mainheading: string;
}

const Receipts: React.FC<EventTableProps> = ({
  Columns,
  Event,
  mainheading,
}) => {
  const [search, setSearch] = useState("");
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const filteredEvents = Event.filter((e) =>
    e.user.toLowerCase().includes(search.toLowerCase())
  );
  const [showPopup, setShowPopup] = useState(false);

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
              aria-label="Search events"
            />
          </div>

          <div className="flex flex-row gap-3 items-center px-2 mt-4 md:mt-0">
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
          <Table className="">
            <TableHeader className="">
              <TableRow className="text-[14px] bg-black/3 w-full tracking-tight border-0">
                {Columns.map((col) => (
                  <TableHead
                    key={col.key}
                    className={
                      col.key === "invoices"
                        ? "align-middle rounded-2xl text-end items-center"
                        : col.key === "amount"
                        ? "text-start"
                        : col.key === "purpose"
                        ? "max-w-[300px] overflow-hidden p-3 whitespace-normal break-words"
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
                <TableRow key={id} className="text-[14px] font-medium border-b-1">
                  {Columns.map((col) => {
                    const value = item[col.key];
                    if (col.key === "purpose") {
                      return (
                        <TableCell
                          key={col.key}
                          className="max-w-[300px] overflow-hidden py-5 text-gray-400 whitespace-normal break-words"
                        >
                          {value}
                        </TableCell>
                      );
                    }
                    if (col.key === "invoices") {
                      return (
                        <TableCell
                          key={col.key}
                          className="text-black underline justify-end flex flex-row gap-3 py-5 items-center"
                        >
                          <button
                            onClick={() => {
                              setSelectedEvent(item); // ✅ pass row data
                              setShowPopup(true);
                            }}
                            className="underline text-black"
                          >
                            {value || "No invoice"}
                          </button>
                        </TableCell>
                      );
                    }

                    return (
                      <TableCell
                        key={col.key}
                        className="text-gray-500 rounded-2xl tracking-tight py-5 "
                      >
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
              Showing 1 to {filteredEvents.length} of {Event.length} entries
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
                  <PaginationNext href="#" className="border border-gray-400" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </div>
      {showPopup && (
        <Transaction
          showPopup={showPopup}
          setShowPopup={setShowPopup}
          data={selectedEvent} // ✅ passing row data
        />
      )}
    </div>
  );
};

export default Receipts;
