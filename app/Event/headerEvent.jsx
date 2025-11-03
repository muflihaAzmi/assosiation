"use client";

import Link from "next/link";
import { MessageCircle, BellDot, User, LogOut, Menu } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

function HeaderEvent() {
  return (
    <header className="w-full bg-white shadow-sm h-[100px] flex items-center md:p-10 p-5 justify-between">
      <SidebarTrigger className="text-gray-600 border flex items-center" />

      <div className="flex items-center gap-3 hidden md:block">
        <button className="bg-greencol hover:bg-hovergreen text-[15px] text-black py-2 px-4 rounded-xl font-medium">
          Find a member
        </button>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex ">
        <Link
          href="/"
          className="p-2 border rounded-full hover:bg-gray-100 transition-colors z-0"
        >
          <MessageCircle size={20} />
        </Link>
        <span className="border rounded-full bg-greencol p-1 z-10 absolute right-36 text-[10px] items-center flex md:right-82 w-4 h-4 top-6">0</span>
       </div>
       <div className="flex">
        <Link
          href="/"
          className="p-2 border rounded-full hover:bg-gray-100 transition-colors"
        >
          <BellDot size={20} />
        </Link>
          <span className="border rounded-full bg-greencol p-1 z-10 absolute right-20 text-[10px] items-center flex md:right-66 w-4 h-4 top-6">1</span>

       </div>
        <div className="flex items-center gap-3">
          <img
            src="/profile.png"
            alt="Profile"
            className="rounded-full w-10 h-10 border"
          />
          <div className="hidden md:block">
            <Select>
              <SelectTrigger className="border-none bg-transparent px-2 focus:ring-0 focus:outline-none">
                <div className="flex flex-col text-left leading-tight">
                  <span className="text-sm text-gray-500">Welcome</span>
                  <span className="text-black font-medium">
                    George Sebastin
                  </span>
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
