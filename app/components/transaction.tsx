import { ArrowLeft, Handshake, Printer } from 'lucide-react'
import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
type TransactionProps = {
  showPopup: boolean;
  setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
   
};

function Transaction({ showPopup, setShowPopup, data }:TransactionProps) {

    if (!data) return null;  // safety

    return (
        <div className='fixed inset-0 flex items-center justify-center bg-black/40 overflow-scroll z-10 '>
            <div className='bg-white w-[50%] h-auto px-5 border rounded-2xl mt-20'>


                <div className='flex w-full justify-between border-b-1 py-8'>
                    <div className='flex gap-2 items-center'>
                        <button onClick={() => setShowPopup(false)}>
                            <ArrowLeft className="cursor-pointer" />
                        </button>
                        <h1 className='text-[18px] font-semibold'>Back To Dashboard</h1>
                    </div>

                    <div className="flex items-center gap-3 rounded-2xl">
                        <button className="bg-greencol hover:bg-hovergreen text-[15px] text-black py-2 px-4 rounded-xl font-sansserif flex gap-2" onClick={() => window.print()}>
                            Print <Printer className='h-5 w-5 ' />
                        </button>
                    </div>
                </div>


                <div className='flex flex-row justify-between border-b-1 py-10'>
                    <div className='font-semibold'>
                        <Handshake className="text-greencol hidden md:block" />
                        {data.transactionID}
                    </div>
                    <div className='bg-blue-100 text-green-500 w-10 flex justify-center rounded items-center px-8'>
                        Paid
                    </div>
                </div>


                <div className='flex w-full justify-between mt-3'>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-[18px] font-semibold'>Invoices To</h1>
                        <span className='text-[18px] text-gray-400 '>{data.user}</span>
                        <span className='text-[13px]  text-gray-400 '>association@gmail.com</span>
                        <p className='text-[14px]  text-gray-400'>1423 Forest Lane, Veridian</p>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <h1 className='text-[18px] font-semibold'>Pay To</h1>
                        <h1 className='text-[18px] text-gray-400'>Association</h1>
                        <h1 className='text-[14px] text-gray-400'>Khulna, Bangladesh</h1>
                    </div>
                </div>


                <Table className='mt-5 w-full '>

                    <TableHeader className='border-b-1'>
                        <TableCaption className='flex text-[18px] text-black font-semibold '>Invoice Items </TableCaption>


                        <TableRow>
                            <TableHead className='font-semibold max-w-[300px] text-[14px] overflow-clip p-3'>Type</TableHead>
                            <TableHead className='font-semibold text-[14px]'>Description</TableHead>
                            <TableHead className='text-right font-semibold text-[14px]'>Date</TableHead>
                            <TableHead className='text-right font-semibold text-[14px]'>Amount</TableHead>
                        </TableRow>

                    </TableHeader>


                    <TableBody className='border-b-0'>
                        <TableRow>
                            <TableCell className='max-w-[300px] overflow-hidden py-5 whitespace-normal break-words'>{data.purpose}</TableCell>
                            <TableCell>Payment for Event</TableCell>
                            <TableCell className='text-right py-3'>{data.Date}</TableCell>
                            <TableCell className='text-right py-3'>{data.amount}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>


                <Table className='mt-10'>

                    <TableHeader className='border-b-1'>
                        <TableCaption className='flex text-[18px] text-black font-semibold'>
                            Transaction History
                        </TableCaption>
                        <TableRow>
                            <TableHead className='text-[14px] font-semibold py-5'>Transaction Date</TableHead>
                            <TableHead className='text-[14px] font-semibold'>Payment Type</TableHead>
                            <TableHead className='text-right text-[14px] font-semibold'>Transaction ID</TableHead>
                            <TableHead className='text-right text-[14px] font-semibold'>Amount</TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        <TableRow>
                            <TableCell className='text-[14px]  py-5'>{data.Date}</TableCell>
                            <TableCell className='text-[14px]  py-5'>{data.payment}</TableCell>
                            <TableCell className='text-right text-[14px]'>{data.transactionID}</TableCell>
                            <TableCell className='text-right text-[14px]'>{data.amount}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

            </div>
        </div>
    );
}

export default Transaction;
