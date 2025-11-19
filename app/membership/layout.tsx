import React from 'react'

import { SidebarProvider } from '@/components/ui/sidebar'
import SideBar from '../Event/sideBar';
import HeaderEvent from '../Event/headerEvent';



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