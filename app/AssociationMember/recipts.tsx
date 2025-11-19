"use client";

import React, { useState } from "react";
import { Edit, Eye, Search, Trash2 } from "lucide-react";
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

// 🧩 Type Definitions (updated to match Page.tsx)
type EventData = {
  user: string;
  purpose: string;
  transactionID: string;
  payment: string;
  Action: string;
};

type Column = {
  label: string;
  key: keyof EventData;
};

interface EventTableProps {
  Columns: Column[];
  Event: EventData[];
  mainheading: string;
}

const Association: React.FC<EventTableProps> = ({
  Columns,
  Event,
  mainheading,
}) => {
  const [search, setSearch] = useState("");
  const [selectedEvent, setSelectedEvent] = useState<EventData | null>(null);
  const [showPopup, setShowPopup] = useState(false);

  const filteredEvents = Event.filter((e) =>
    e.user.toLowerCase().includes(search.toLowerCase())
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
          <Table>
            <TableHeader>
              <TableRow className="text-[14px] bg-black/3 tracking-tight border-0">
                {Columns.map((col) => (
                  <TableHead
                    key={col.key}
                    className={
                      col.key === "Action"
                        ? "text-end"
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

                    if (col.key === "Action") {
                      return (
                        <TableCell
                          key={col.key}
                          className="text-black underline justify-end flex flex-row gap-3 py-5 items-center"
                        >
                          <button >
                      <Edit
                        size={25}
                        className="cursor-pointer hover:text-blue-500 border rounded-2xl p-1"
                      />
                    </button>

                    <button >
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
                      );
                    }

                    return (
                      <TableCell
                        key={col.key}
                        className="text-gray-500 rounded-2xl tracking-tight py-5"
                      >
                        {value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {/* 📄 Pagination footer */}
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

      {/* 🔲 Popup for Action click */}
      {showPopup && selectedEvent && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
          <div className="bg-white p-6 rounded-xl shadow-lg w-[350px]">
            <h2 className="text-lg font-semibold mb-2">{selectedEvent.user}</h2>
            <p className="text-gray-600 mb-4">{selectedEvent.purpose}</p>
            <button
              onClick={() => setShowPopup(false)}
              className="bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Association;
