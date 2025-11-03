import React from 'react'
import HeaderEvent from './headerEvent';
import SideBar from './sideBar';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import DashboardLayout from '@/components/hed';


function Eventlayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='flex flex-col h-screen bg-pink-50'>
      <SidebarProvider>
        {/* <HeaderEvent/> */}
        <SideBar/>
        <div className='flex flex-col h-full w-full'>
          <HeaderEvent/>
          {children}
        </div>
        
      </SidebarProvider>

    </div>
  )
}

export default Eventlayout