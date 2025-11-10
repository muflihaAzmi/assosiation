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

function Transaction() {
    
    return (
        <div className='px-10 fixed inset-0 z-10 bg-black/15 w-[80%]'>
            <div className='flex w-full justify-between  border-b-1 p-3'>

                <div className='flex gap-2'>
                    <ArrowLeft />
                    <h1 className='text-[18px]'>Back To Dashboard</h1>
                </div>
                <div className="flex items-center gap-3 hidden sm:block">
                    <button className="bg-greencol hover:bg-hovergreen text-[15px] text-black py-2 px-4 rounded-xl font-sansserif flex">
                        print <Printer className='h-5 w-5' />
                    </button>
                </div>
            </div>
            <div className='flex flex-row justify-between border-b-1 py-5'>
                <div>
                    <Handshake className="text-greencol hidden md:block" />
                    123456
                </div>
                <div className='bg-blue-100 text-green-300 w-10 flex justify-center py-2 px-8'>paid</div>
            </div>
            <div className='flex w-full justify-between'>
                <div>
                    <h1 className='text-[18px] font-medium'>Invoices To</h1>
                    <span className='text-[18px] text-gray-300'>sopia johnson</span><br></br>
                    <span className='text-[14px]  text-gray-300'>association@gmail.com</span>
                    <p className='text-[14px]  text-gray-300'>1423 Forest Lane ,Veridian, Pineville - 67890, Evergreen, Veridian</p>
                </div>
                <div><h1 className='text-[18px] font-medium' >pay To</h1>

                    <h1 className='text-[18px] text-gray-300'>Association</h1>
                    <h1 className='text-[14px] text-gray-300'>khulna,bangladesh</h1></div>
            </div>
            {/* <table>
                <tr>
                    <div>
                    <div className='flex'>
                    <th>Type</th>
                    <th>Description</th>
                    </div>
                    <div className='flex'>
                    <th>Date</th>
                    <th>Amount</th>
                    </div>
                    </div>
                </tr>
            </table> */}
            <Table className='mt-10'>
                <TableHeader>
                    <TableCaption className='flex text-[18px] text-black font-semibold'>Invoice Items</TableCaption>
                    <TableRow>
                        <TableHead className='font-semibold' >Type</TableHead>
                        <TableHead className='font-semibold' >Description</TableHead>
                        <TableHead className='text-right font-semibold'>Date</TableHead>
                        <TableHead className='text-right font-semibold'>Amount</TableHead>

                    </TableRow>
                </TableHeader>
                <TableBody >
                    <TableRow className='border-none'>
                        <TableCell>Nomination</TableCell>
                        <TableCell>Nomination Payment Completed for Executive Committee Vice President Nomination From</TableCell>
                        <TableCell className='text-right'>

                            9 May 2024</TableCell>
                        <TableCell className='text-right'>$1000</TableCell>


                    </TableRow>
                </TableBody>
            </Table>
            <Table className='mt-10'>
                <TableHeader>
                    <TableCaption className='flex text-[18px] text-black font-semibold'>Transaction History</TableCaption>
                    <TableRow >
                        <TableHead className='font-semibold' >Transaction Date</TableHead>
                        <TableHead className='font-semibold' >payment Type</TableHead>
                        <TableHead className='text-right font-semibold'>transaction ID</TableHead>
                        <TableHead className='text-right font-semibold'>Amount</TableHead>

                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow className='border-none ' >
                        <TableCell>Nomination</TableCell>
                        <TableCell>Nomination Payment Completed for Executive Committee Vice President Nomination From</TableCell>
                        <TableCell className='text-right'>

                            9 May 2024</TableCell>
                        <TableCell className='text-right'>$1000</TableCell>


                    </TableRow>
                </TableBody>
            </Table>
        </div>
    )
}

export default Transaction
