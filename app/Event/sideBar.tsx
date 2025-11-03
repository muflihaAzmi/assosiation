"use client"

import { CalendarDays, ChevronRight, Handshake, Users } from "lucide-react"
import { User } from 'lucide-react';

import Link from "next/link"
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenuButton,
} from "@/components/ui/sidebar"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@radix-ui/react-collapsible"

function SideBar() {
  return (
    <Sidebar>
      <div className="h-full bg-[url('/sidebarimg.png')] bg-cover bg-center">
        {/* <div className="h-full bg-cover bg-center"> */}
        <div className="bg-black/30 h-full w-full flex flex-col">


          <SidebarHeader>
            <div className="flex items-center gap-2 p-4">
              <Handshake className="text-greencol hidden md:block" />
              <h1 className="text-2xl font-bold text-white">Association</h1>
            </div>
          </SidebarHeader>


          <SidebarContent className="mt-4 px-3 w-full">

            <div className="group/hovermenu flex flex-row items-center text-white gap-2 p-3 rounded-xl hover:bg-white/20 ">
              <User className="group-hover/hovermenu:text-hovergreen" size={16} />
              <Link
                href="#"
                className="group-hover/hovermenu:text-hovergreen text-white font-medium text-[14px] "
              >
                profile

              </Link>
            </div>

            <Collapsible className="group/collapsible">
              <CollapsibleTrigger className="flex items-center group/hovermenu justify-between w-full text-white font-medium p rounded-xl hover:bg-white/10 p-3 ">

                <div className="flex flex-row gap-2 ">
                  <CalendarDays size={16} className="group-hover/hovermenu:text-hovergreen" />
                  <span className="text-[14px] group-hover/hovermenu:text-hovergreen">Events</span>
                </div>
                <ChevronRight className="ml-2 transition-transform duration-300  group-hover/hovermenu:text-hovergreen group-data-[state=open]/collapsible:rotate-90" size={16} />
              </CollapsibleTrigger>

              <CollapsibleContent className="flex flex-col space-y-2 text-[12px] mt-2 px-10 text-gray-300">

                <li><Link
                  href="/Event/myEvent"
                  className="text-gray-300  hover:text-hovergreen"
                >
                  My Events
                </Link></li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-hovergreen "
                  >
                    All Events
                  </Link></li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-hovergreen"
                  >
                    My Tickets
                  </Link></li>
              </CollapsibleContent>
            </Collapsible>


            <div className="flex flex-row items-center text-white group/hovermenu gap-2 p-3  group-hover/hovermenu:border-l-hovergreen  rounded-2xl  hover:bg-white/10 ">
              <Users className="group-hover/hovermenu:text-hovergreen" size={16} />
              <Link
                href="#"
                className=" text-white font-medium group-hover/hovermenu:text-hovergreen  text-[14px]"
              >
                Membership

              </Link>
            </div>
            <div className="flex flex-row items-center text-white group/hovermenu gap-2 p-3 rounded-xl hover:bg-white/10 ">
              <Link
                href="#"
                className="group-hover/hovermenu:text-hovergreen text-white font-medium text-[14px]"
              >
                Alumini
              </Link>
            </div>
            <div className="flex flex-row items-center text-white group/hovermenu gap-2 p-3 rounded-xl hover:bg-white/10 transition-all duration-300 group-hover/hovermenu:pl-1">
              <Link
                href="#"
                className="group-hover/hovermenu:text-hovergreen text-white font-medium text-[14px] transition-colors duration-300"
              >
                Profile
              </Link>
            </div>



          </SidebarContent>

        </div>
      </div>


    </Sidebar>

  )
}

export default SideBar
