
"use client"
import React, { useState } from 'react'
import Transaction from './[id]/page'
import EventTable from '../Event/components/Eventtable'

function Page() {



  type EventItem = {
    eventTitle: string;
    catagory: string;
    type: string;
    date: string;
    location: string;
    action: string;
  };

  type columns = {
    label: string;
    key: keyof EventItem;
  };



  const columns = [
    { label: "Event Title", key: "eventTitle" },
    { label: "Category", key: "catagory" },
    { label: "Type", key: "type" },
    { label: "Date & Time", key: "date" },
    { label: "Location", key: "location" },

    { label: "Action", key: "action" },
  ];


  const events = [
    {
      eventTitle: "Assosiation Inaugration",
      catagory: "middle",
      type: "Free",
      date: "12/2/3000",
      location: "Delhi",

      action: "Reservation"
    },
    {
      eventTitle: "Annual Meeting",
      catagory: "middle",
      type: "Paid",
      date: "21 Nov, 2023 11:00",
      location: "Delhi",

      action: "reservation"
    },
  ];

  return (
    <div>
      <EventTable
        events={events}
        columns={columns}
        mainheading="Upcoming Events"

      />
    


    </div>

  )
}

export default Page
