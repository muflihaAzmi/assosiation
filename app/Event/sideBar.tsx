"use client";

import {
  CalendarDays,
  ChevronRight,
  Handshake,
  House,
  LogOut,
  Users,
  User,
} from "lucide-react";

import Link from "next/link";
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@radix-ui/react-collapsible";

function SideBar() {
  return (
    <Sidebar>
      <div className="h-full bg-[url('/sidebarimg.png')] bg-cover bg-center w-full">
        <div className="bg-black/30 h-full w-full flex flex-col">
          <SidebarHeader>
            <div className="flex items-center gap-2 p-3">
              <Handshake className="text-greencol hidden md:block" />
              <h1 className="text-2xl font-bold text-white">Association</h1>
            </div>
          </SidebarHeader>

          <SidebarContent className="px-3 w-full space-y-1">
            {/* Home */}
            
            <div className="relative group/hovermenu flex items-center text-white gap-2 p-3 rounded-xl hover:bg-white/30 transition-colors duration-300 ease-in-out">
              <div className="absolute left-0 mr-2 top-1/2 -translate-y-1/2 w-1 h-full rounded bg-hovergreen opacity-0 group-hover/hovermenu:opacity-100" />
              <House className="group-hover/hovermenu:text-hovergreen" size={16} />
              <Link
                href="/home"
                className="group-hover/hovermenu:text-hovergreen text-white font-medium text-[14px]"
              >
                Home
              </Link>
            </div>
          

            {/* Events Collapsible */}
            <Collapsible className="group/collapsible">
              <CollapsibleTrigger className="relative flex items-center justify-between w-full text-white font-medium rounded-xl hover:bg-white/30 p-3 transition-colors duration-300 ease-in-out group/hovermenu">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-full rounded bg-hovergreen opacity-0 group-hover/hovermenu:opacity-100" />
                <div className="flex flex-row gap-2">
                  <CalendarDays size={16} className="group-hover/hovermenu:text-hovergreen" />
                  <span className="text-[14px] group-hover/hovermenu:text-hovergreen">
                    Events
                  </span>
                </div>
                <ChevronRight
                  className="ml-2 transition-transform duration-400 group-hover/hovermenu:text-hovergreen group-data-[state=open]/collapsible:rotate-90"
                  size={16}
                />
              </CollapsibleTrigger>

              <CollapsibleContent className="flex flex-col space-y-2 text-[12px] mt-2 px-10 text-gray-300">
                <li>
                  <Link href="/Event/EventCreate" className="hover:text-hovergreen">
                    Create Event
                  </Link>
                </li>
                <li>
                  <Link href="/Event/myEvent" className="hover:text-hovergreen">
                    MyEvent
                  </Link>
                </li>
                <li>
                  <Link href="/Event/allevents" className="hover:text-hovergreen">
                   All Events
                  </Link>
                </li>
              </CollapsibleContent>
            </Collapsible>

            {/* Membership */}
            <div className="relative group/hovermenu flex items-center text-white gap-2 p-3 rounded-xl hover:bg-white/30 transition-colors duration-300 ease-in-out">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-full rounded bg-hovergreen opacity-0 group-hover/hovermenu:opacity-100" />
              <Users className="group-hover/hovermenu:text-hovergreen" size={16} />
              <Link
                href="/membership"
                className="text-white font-medium group-hover/hovermenu:text-hovergreen text-[14px]"
              >
                Membership
              </Link>
            </div>

            {/* Alumini */}
            <div className="relative group/hovermenu flex items-center text-white gap-2 p-3 rounded-xl hover:bg-white/30 transition-colors duration-300 ease-in-out">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-full rounded bg-hovergreen opacity-0 group-hover/hovermenu:opacity-100" />
              <User className="group-hover/hovermenu:text-hovergreen" size={16} />
              <Link
                href="/components"
                className="group-hover/hovermenu:text-hovergreen text-white font-medium text-[14px]"
              >
                Transaction
              </Link>
            </div>

            {/* Profile */}
            <div className="relative group/hovermenu flex items-center text-white gap-2 p-3 rounded-xl hover:bg-white/30 transition-colors duration-300 ease-in-out">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-full rounded bg-hovergreen opacity-0 group-hover/hovermenu:opacity-100" />
              <User className="group-hover/hovermenu:text-hovergreen" size={16} />
              <Link
                href="/profile"
                className="group-hover/hovermenu:text-hovergreen text-white font-medium text-[14px]"
              >
                Profile
              </Link>
            </div>
            <div className="relative group/hovermenu flex items-center text-white gap-2 p-3 rounded-xl hover:bg-white/30 transition-colors duration-300 ease-in-out">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-full rounded bg-hovergreen opacity-0 group-hover/hovermenu:opacity-100" />
              <User className="group-hover/hovermenu:text-hovergreen" size={16} />
              <Link
                href="/settings"
                className="group-hover/hovermenu:text-hovergreen text-white font-medium text-[14px]"
              >
              Settings
              </Link>
            </div>
          </SidebarContent>

          <SidebarFooter className="text-[14px] p-5">
            <label className="text-gray-400 px-3">
              <span>Version: 4.1</span>
            </label>
            <div className="flex items-center gap-2 text-white p-3">
              <LogOut className="w-4 h-4" />
              <Link href="#">Logout</Link>
            </div>
          </SidebarFooter>
        </div>
      </div>
    </Sidebar>
  );
}

export default SideBar;