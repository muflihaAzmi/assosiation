"use client";

import Receipts from "./recipts";

function Page() {
  type Event = {
    user: string;
    purpose: string;
    transactionID: string;
    payment: string;
    Date: string;
    amount: string;
    invoices: string;
  };

  type Column = {
    label: string;
    key: keyof Event;
  };

  const columns: Column[] = [
    { label: "User", key: "user" },
    { label: "Purpose", key: "purpose" },
    { label: "Transaction ID", key: "transactionID" },
    { label: "Payment Method", key: "payment" },
    { label: "Date and Time", key: "Date" },
    { label: "Amount", key: "amount" },
    { label: "Invoices", key: "invoices" },
  ];

  const events: Event[] = [
    {
      user: "Sopia johnson",
      purpose: "Nomination Payment Completed for Executive Committee Vice President Nomination From",
      transactionID: "663cd17cb2f08",
      payment: "paypal",
      Date: "12/2/3000",
      amount: "$1000",
      invoices: "download"
    },
     {
      user: "sebastin",
      purpose: "middle",
      transactionID: "Free",
      payment: "cash",
      Date: "12/2/3000",
      amount: "$10000",
      invoices: "Download"
    },
  ];

  return (
    <div>
      <Receipts
        Event={events}
        Columns={columns}
        mainheading="Upcoming Events"
      />
    </div>
  );
}

export default Page;