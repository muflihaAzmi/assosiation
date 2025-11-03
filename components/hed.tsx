"use client"

import { Menu } from "lucide-react"
import { useState } from "react"
import AppSidebar from "./appsidebar"
// your sidebar

export default function DashboardLayout() {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex">
      {/* Sidebar — visible when open or on large screens */}
      <div className={`${open ? "block" : "hidden"} lg:block`}>
        <AppSidebar />
      </div>

      {/* Main content area */}
      <div className="flex-1">
        {/* Header with Menu Button */}
        

        {/* Page content */}
      
      </div>
    </div>
  )
}
