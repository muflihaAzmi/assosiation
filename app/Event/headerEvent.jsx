"use client";

import Link from "next/link";
import { MessageCircle, BellDot, User, LogOut } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import {  SidebarTrigger } from "@/components/ui/sidebar";
import { ChevronDownIcon, } from "lucide-react"


function HeaderEvent() {
  return (
    <header className="w-full bg-white border-b-1 h-[100px] flex items-center p-7 justify-between">
      <div className="flex justify-start gap-2 items-center">
      <SidebarTrigger className="text-gray-600 border flex items-center " />

      <div className="flex items-center gap-3 hidden sm:block">
        <button className="bg-greencol hover:bg-hovergreen text-[15px] text-black py-3 px-6 rounded-xl font-sansserif">
          Find a member
        </button>
      </div>
      </div>
      <div className="flex items-center gap-2 ">
        <div className="flex relative">
        <Link
          href="/"
          className="p-2 border rounded-full hover:bg-gray-100 transition-colors z-0"
        >
          <MessageCircle size={20} />
        </Link>
        <span className="border rounded-full bg-greencol p-1 z-10 absolute left-6 bottom-7 text-[10px] items-center flex w-4 h-4 ">0</span>
       </div>
       <div className="flex relative">
        <Link
          href="/"
          className="p-2 border rounded-full hover:bg-gray-100 transition-colors"
        >
          <BellDot size={20} />
        </Link>
          <span className="border rounded-full bg-greencol p-1 z-10 absolute left-6 bottom-7 text-[10px] items-center flex  w-4 h-4 ">1</span>

       </div>
        <div className="flex items-center gap-3">
          <img
            src="/profile.png"
            alt="Profile"
            className="rounded-full w-10 h-10 border"
          ></img>
          <div className="hidden md:block">
            <Select>
              <SelectTrigger className="border-none bg-transparent px-2 focus:ring-0 focus:outline-none">
                <div className="flex flex-col text-left leading-tight">
                  <span className="text-[12px] text-gray-500">Welcome</span>
                  <div className="flex items-center gap-1">
                  <span className="text-black font-medium">
                    George Sebastin
                  </span>
                    <ChevronDownIcon className="size-4 opacity-50 text-black " />
                    </div>
                </div>
              </SelectTrigger>

              <SelectContent className="w-40">
                <SelectItem value="profile">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <Link href="#">Profile</Link>
                  </div>
                </SelectItem>
                <SelectItem value="logout">
                  <div className="flex items-center gap-2">
                    <LogOut className="w-4 h-4" />
                    <Link href="#">Logout</Link>
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderEvent;
