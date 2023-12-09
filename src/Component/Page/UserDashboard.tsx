import React from 'react'
import { FiGift } from "react-icons/fi";
import { CiStar } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";

const UserDashboard:React.FC = () => {
  return (
    <div className='ml-[250px] mt-16 pt-24 sm:mx-auto sm:flex-wrap sm:w-[100%] sm:ml-2'>
      <div className=''>
          <div className='flex ml-10 sm:flex sm:items-center sm:justify-center sm:ml-0'>
             <h1 className='sm:text-[12px] '>Dash Board</h1>
          </div>
           <div>
           <div className='flex justify-center items-center gap-10 pl-4 sm:flex-wrap sm:flex-col'>
            <div className='w-[300px] h-[120px] border-2 sm:w-[200px] sm:h-[100px]'>
              <div className='flex p-3'>
             <div className='bg-[#495057] border-2 h-[50px] m-5 w-[56px] flex items-center justify-center sm:text-[8px] sm:h-[30px] sm:w-[30px]'>
             <FiGift
              size = '35'
              />
             </div>
                <div className='flex-col sm:pt-5'>
                <p className=' text-[25px] sm:text-[15px] '>Our service</p>
              <h1 className='text-[30px] pl-10 sm:pl-2 sm:text-[14px]'>11</h1>
                </div>
              </div>
            </div>

            <div className='w-[300px] h-[120px] border-2 sm:w-[200px] '>
              <div className='flex p-3'>
             <div className='bg-[#495057] border-2 h-[50px] m-5 w-[56px] flex items-center justify-center sm:text-[8px] sm:h-[30px] sm:w-[30px]'>
             <IoEyeOutline
              size = '35'
              />
             </div>
                <div className='flex-col sm:pt-5'>
                <p className=' text-[25px] sm:text-[15px]'>Total view</p>
              <h1 className='text-[30px] pl-4 sm:pl-2 sm:text-[14px]'>2919</h1>
                </div>
              </div>
            </div>

            <div className='w-[300px] h-[120px] border-2 sm:w-[200px]'>
              <div className='flex p-3'>
             <div className='bg-[#495057] border-2 h-[50px] m-5 w-[56px] flex items-center justify-center sm:text-[8px] sm:h-[30px] sm:w-[30px]'>
             <CiStar
              size = '35'
              />
             </div>
                <div className='flex-col sm:pt-5'>
                <p className=' text-[25px] sm:text-[15px] '>Total Review</p>
              <h1 className='text-[30px] pl-10 sm:pl-2 sm:text-[14px] '>3</h1>
                </div>
              </div>
            </div>
            </div>
            </div>   
          </div>
       

      <div className='pt-36 sm:pt-6'>
        <div className='pl-20 pb-3'>
          <h1 className='font-[bold] text-[25px] sm:text-[15px]'>
          Recent Bookings
          </h1>
        </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg sm:w-[300px] sm:mx-auto">
      <table className="w-full text-sm text-left rtl:text-right text-black dark:text-black sm:w-[250px]">
        <thead className=" text-black  dark:text-black">
          <tr className='border-b'>
            <th scope="col" className="p-4">
              <div className="flex items-center ">
                <label htmlFor="checkbox-all-search" className="sr-only">
                  checkbox
                </label>
              </div>
            </th>
            <th scope="col" className="px-6 py-3 sm:text-[10px]">
              Booking Date
            </th>
            <th scope="col" className="px-6 py-3 sm:text-[10px]">
              Booking Time
            </th>
            <th scope="col" className="px-6 py-3 sm:text-[10px]">
              Amount
            </th>
            <th scope="col" className="px-6 py-3 sm:text-[10px]">
              Customer
            </th>
            <th scope="col" className="px-6 py-3 sm:text-[10px]">
              Status
            </th>
          </tr>
        </thead>
        <tbody >
          <tr className=" border-b">
            <td className="">
              <div className="flex items-center">
                <label htmlFor="checkbox-table-search-1" className="sr-only">
                  checkbox
                </label>
              </div>
            </td>
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black"
            >
              January 04, 2023
            </th>
            <td className="px-6 py-4">10am - 3pm</td>
            <td className="px-6 py-4">$600</td>
            <td className="px-6 py-4">
            <div className=''>
                <div className='flex gap-2'>
                <img className='bg-[black] h-[30px] w-[30px] rounded-full' src="" />
                <div><h1 className="font-extrabold cursor-pointer">manny</h1></div>
               </div>
              </div>
            </td>
            <td className="px-6 py-4">
              <span className=" p-2 bg-[#d1cbcb]  text-white font-semibold  dark:text-blue-500 ">
                confirmed
              </span>
            </td>
          </tr>
          <tr className="border-b">
            <td className="">
              <div className="flex items-center">
                <label htmlFor="checkbox-table-search-2" className="sr-only">
                  checkbox
                </label>
              </div>
            </td>
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black"
            >
              January 18, 2023
            </th>
            <td className="px-6 py-4">11am - 4pm</td>
            <td className="px-6 py-4">$360</td>
            <td className="px-6 py-4 w-8 h-6 justify-between items-center flex my-4 ">
            <div className=''>
                <div className='flex gap-2'>
                <img className='bg-[black] h-[30px] w-[30px] rounded-full' src="" />
                <div><h1 className="font-extrabold cursor-pointer">manny</h1></div>
               </div>
              </div>
            </td>
            <td className="px-6 py-4">
              <span className="p-2 bg-[#d1cbcb]  text-white font-semibold  dark:text-[red]">
                Rejected
              </span>
            </td>
          </tr>
          <tr className="border-b">
            <td className="">
              <div className="flex items-center">
                <label htmlFor="checkbox-table-search-3" className="sr-only">
                  checkbox
                </label>
              </div>
            </td>
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black"
            >
              February 04, 2023
            </th>
            <td className="px-6 py-4">10am- 3pm</td>
            <td className="px-6 py-4">$400</td>
            <td className="px-6 py-4">
            <div className=''>
                <div className='flex gap-2'>
                <img className='bg-[black] h-[30px] w-[30px] rounded-full' src="" />
                <div><h1 className="font-extrabold cursor-pointer">manny</h1></div>
               </div>
              </div>
            </td>
            <td className="px-6 py-4">
              <a
                href="#"
                className="p-2 bg-[#d1cbcb] text-white font-semibold  dark:text-blue-500"
              >
                Pending
              </a>
            </td>
          </tr>
          <tr className="border-b">
            <td className="">
              <div className="flex items-center">
                <label htmlFor="checkbox-table-search-3" className="sr-only">
                  checkbox
                </label>
              </div>
            </td>
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black"
            >
              February 15, 2023
            </th>
            <td className="px-6 py-4">10am - 3pm</td>
            <td className="px-6 py-4">$100</td>
            <td className="px-6 py-4">
            <div className=''>
                <div className='flex gap-2'>
                <img className='bg-[black] h-[30px] w-[30px] rounded-full' src="" />
                <div><h1 className="font-extrabold cursor-pointer">manny</h1></div>
               </div>
              </div>
            </td>
            <td className="px-6 py-4">
              <a 
                href="#"
                className="p-2 bg-[#d1cbcb]  text-white font-semibold  dark:text-blue-500"
              >
                Confirmed
              </a>
            </td>
          </tr>
          <tr className="border-b">
            <td className="">
              <div className="flex items-center">
                <label htmlFor="checkbox-table-search-3" className="sr-only">
                  checkbox
                </label>
              </div>
            </td>
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black"
            >
              February 28, 2023
            </th>
            <td className="px-6 py-4">!0 AM - 3 AM</td>
            <td className="px-6 py-4">$100</td>
            <td className="px-6 py-4">
            <div className=''>
                <div className='flex gap-2'>
                <img className='bg-[black] h-[30px] w-[30px] rounded-full' src="" />
                <div><h1 className="font-extrabold cursor-pointer">manny</h1></div>
               </div>
              </div>
            </td>
            <td className="px-6 py-4">
              <a
                href="#"
                className="p-2 bg-[#d1cbcb] text-white font-semibold  dark:text-blue-500"
              >
                Confirmed
              </a>
            </td>
          </tr>
          <tr className="border-b">
            <td className="">
              <div className="flex items-center">
                <label htmlFor="checkbox-table-search-3" className="sr-only">
                  checkbox
                </label>
              </div>
            </td>
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black"
            >
              March 08, 2023
            </th>
            <td className="px-6 py-4">!0 AM - 3 AM</td>
            <td className="px-6 py-4">$100</td>
            <td className="px-6 py-4">
            <div className=''>
                <div className='flex gap-2'>
                <img className='bg-[black] h-[30px] w-[30px] rounded-full' src="" />
                <div><h1 className="font-extrabold cursor-pointer">manny</h1></div>
               </div>
              </div>
            </td>
            <td className="px-6 py-4">
              <a
                href="#"
                className="p-2 bg-[#d1cbcb] text-white font-semibold  dark:text-blue-500"
              >
                Confirmed
              </a>
            </td>
          </tr>
          <tr className="border-b">
            <td className="">
              <div className="flex items-center">
                <label htmlFor="checkbox-table-search-3" className="sr-only">
                  checkbox
                </label>
              </div>
            </td>
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black"
            >
              January 04, 2023
            </th>
            <td className="px-6 py-4">!0 AM - 3 AM</td>
            <td className="px-6 py-4">$100</td>
            <td className="px-6 py-4">
            <div className=''>
                <div className='flex gap-2'>
                <img className='bg-[black] h-[30px] w-[30px] rounded-full' src="" />
                <div><h1 className="font-extrabold cursor-pointer">manny</h1></div>
               </div>
              </div>
            </td>
            <td className="px-6 py-4">
              <a
                href="#"
                className="p-2 bg-[#d1cbcb] text-white font-semibold  dark:text-blue-500"
              >
                Confirmed
              </a>
            </td>
          </tr>
          <tr className="border-b">
            <td className="w-4 p-4">
              <div className="flex items-center">
                <label htmlFor="checkbox-table-search-3" className="sr-only">
                  checkbox
                </label>
              </div>
            </td>
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black"
            >
              March 14, 2023
            </th>
            <td className="px-6 py-4">!0 AM - 3 AM</td>
            <td className="px-6 py-4">$100</td>
            <td className="px-6 py-4">
            <div className=''>
                <div className='flex gap-2'>
                <img className='bg-[black] h-[30px] w-[30px] rounded-full' src="" />
                <div><h1 className="font-extrabold cursor-pointer">manny</h1></div>
               </div>
              </div>
            </td>
            <td className="px-6 py-4">
              <a
                href="#"
                className="p-2 bg-[#d1cbcb]  text-white font-semibold  dark:text-blue-500"
              >
                Confirmed
              </a>
            </td>
          </tr>
          <tr className="border-b">
            <td className="">
              <div className="flex items-center">
                <label htmlFor="checkbox-table-search-3" className="sr-only">
                  checkbox
                </label>
              </div>
            </td>
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black"
            >
              March 30, 2023
            </th>
            <td className="px-6 py-4">!0 AM - 3 AM</td>
            <td className="px-6 py-4">$100</td>
            <td className="px-6 py-4">
            <div className=''>
                <div className='flex gap-2'>
                <img className='bg-[black] h-[30px] w-[30px] rounded-full' src="" />
                <div><h1 className="font-extrabold cursor-pointer">manny</h1></div>
               </div>
              </div>
            </td>
            <td className="px-6 py-4">
              <a
                href="#"
                className="p-2 bg-[#d1cbcb]  text-white font-semibold  dark:text-blue-500"
              >
                Confirmed
              </a>
            </td>
          </tr>
          <tr className="border-b">
            <td className="">
              <div className="flex items-center">
                <label htmlFor="checkbox-table-search-3" className="sr-only">
                  checkbox
                </label>
              </div>
            </td>
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black"
            >
              April 10, 2023
            </th>
            <td className="px-6 py-4">3pm - 8pm</td>
            <td className="px-6 py-4">$700</td>
            <td className="px-6 py-4">
            <div className=''>
                <div className='flex gap-2'>
                <img className='bg-[black] h-[30px] w-[30px] rounded-full' src="" />
                <div><h1 className="font-extrabold cursor-pointer">manny</h1></div>
               </div>
              </div>
            </td>
            <td className="px-6 py-4">
              <a
                href="#"
                className="p-2 bg-[#d1cbcb] text-white font-semibold  dark:text-blue-500"
              >
                Confirmed
              </a>
            </td>
          </tr>
        </tbody>
      </table>
     
    </div>
      </div>

      
    </div>
  )
}

export default UserDashboard


