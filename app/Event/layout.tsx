import React from 'react'
import HeaderEvent from './headerEvent';
import SideBar from './sideBar';
import { SidebarProvider } from '@/components/ui/sidebar'


function Eventlayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='flex flex-col h-full bg-pink-50 font-sansserif  '>
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