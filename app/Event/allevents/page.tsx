import EventTable from "../components/Eventtable";


export default function MainPage() {
  const columns = [
    { label: "Event Title", key: "eventTitle" },
    { label: "Category", key: "catagory" },
    { label: "Type", key: "type" },
    { label: "Date & Time", key: "date" },
    { label: "Location", key: "location" },
    { label: "Status", key: "status" },
    { label: "Action", key: "action" },
  ];

  const events = [
    {
      eventTitle: "Assosiation Inaugration",
      catagory: "middle",
      type: "Free",
      date: "12/2/3000",
      location: "Delhi",
      status: "pending",
      action:"Reservation"
    },
    {
      eventTitle: "Annual Meeting",
      catagory: "middle",
      type: "Paid",
      date: "21 Nov, 2023 11:00",
      location: "Delhi",
      status: "approved",
      action:"Reservation"
    },
  ];


  return (
    <div>
      <EventTable columns={columns} events={events} mainheading="All Events" />
    </div>
  );
}
