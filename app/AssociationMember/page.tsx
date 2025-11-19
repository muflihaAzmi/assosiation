"use client";
import Association from "./recipts";
import { EventType } from "./type";


function Page() {
  type Column = {
    label: string;
    key: keyof EventType;
  };

  const columns: Column[] = [
    { label: "User", key: "user" },
    { label: "Purpose", key: "purpose" },
    { label: "Transaction ID", key: "transactionID" },
    { label: "Payment Method", key: "payment" },
    { label: "Action", key: "Action" },
  ];

  const events: EventType[] = [
    {
      user: "Sopia Johnson",
      purpose: "Nomination Payment Completed...",
      transactionID: "663cd17cb2f08",
      payment: "paypal",
      Action: "",
    },
    {
      user: "Sebastin",
      purpose: "middle",
      transactionID: "Free",
      payment: "cash",
      Action: "",
    },
  ];

  return (
    <div>
      <Association
        Event={events}
        Columns={columns}
        mainheading="Upcoming Events"
      />
    </div>
  );
}

export default Page;
