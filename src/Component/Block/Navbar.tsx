import React from 'react'
import { HiMenuAlt2 } from "react-icons/hi";
import { FaSearchengin } from "react-icons/fa";
import { FaRegMoon } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdMessage } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5"
import { IoMdSettings } from "react-icons/io"
import { AiOutlineLogout } from "react-icons/ai"

const Navbar:React.FC = () => {
  return (
    <div className="fixed top-0 right-0 shadow-md h-24 w-[78%] z-30 mt-4 mr-4 border-2 border-solid flex justify-between bg-[#F2F1F9]">
    <div className="flex items-center ml-6 gap-4">
      <div className="cursor-pointer ">
        <HiMenuAlt2  />
      </div>
      <div className="overflow-hiden border-2 bg-[#F5F4FA]  border-solid h-12 flex">
        <input
          type="text"
          className="h-[100%] outline-none bg-[#F5F4FA]  w-[50%] ml-[5px]"
          placeholder="search"
        />
        <div className="h-full w-[50%] bg-[#6560F0] cursor-pointer flex justify-center gap-[10px] text-white text-xl border-none items-center">
          {" "}
          search <FaSearchengin />
        </div>
      </div>
    </div>

    <div className="flex w-[50%] items-center justify-end gap-7 mr-6 ">
      <div className="h-[60px] w-[60px] bg-[#6A8EF54A] rounded-full flex justify-center items-center text-2xl hover:bg-gray-300 hover:text-white transition-all transition-3000ms cursor-pointer">
        <FaRegMoon />
      </div>
      <div className="text-3xl cursor-pointer">
        <IoIosNotificationsOutline />

        <div className=" hidden  absolute shadow-lg h-96 top-24 right-52  w-80">
          <div className="flex  h-[20%] w-full justify-between border-b border-dotted border-b-gray-500">
            <p className="m-0 p-2  text-base font-medium">
              Notifications <span className="text-gray-400">(03)</span>
            </p>
            <p className="text-base p-2 text-[#6560f0] font-medium">
              Clear All
            </p>
          </div>

          <div className="flex  items-center hover:bg-gray-100 transition-all duration-300 ease-in-out justify-between border-b-gray-600 border-dotted border-b  p-3">
            <div className="h-[50px] w-[50px] rounded-full flex justify-center items-center text-[#6560F0] bg-[#F2F1F9]">
              <MdMessage />
            </div>
            <div>
              <p className="text-base font-bold  text-[#2b2a3f]">
                A customer just ordered
              </p>
              <p className="text-base font-normal ">2 hour ago</p>
            </div>
            <div className="h-3 w-3 rounded-full bg-[#6560F0]"></div>
          </div>

          <div className="flex  items-center hover:bg-gray-100 transition-all duration-300 ease-in-out justify-between border-b-gray-600 border-dotted border-b  p-3">
            <div className="h-[50px] w-[50px] rounded-full flex justify-center items-center text-[#6560F0] bg-[#F2F1F9]">
              <CiUser />
            </div>
            <div>
              <p className="text-base font-bold  text-[#2b2a3f]">
                A new user was Added
              </p>
              <p className="text-base font-normal ">2 hour ago</p>
            </div>
            <div className="h-3 w-3 rounded-full bg-[#6560F0]"></div>
          </div>

          <div className="flex  items-center hover:bg-gray-100 transition-all duration-300 ease-in-out justify-between border-b-gray-600 border-dotted border-b  p-3">
            <div className="h-[50px] w-[50px] rounded-full flex justify-center items-center text-[#6560F0] bg-[#F2F1F9]">
              <MdMessage />
            </div>
            <div>
              <p className="text-base font-bold  text-[#2b2a3f]">
                Withdrawal order initiated
              </p>
              <p className="text-base font-normal ">2 hour ago</p>
            </div>
            <div className="h-3 w-3 rounded-full bg-[#6560F0]"></div>
          </div>

          <p className="text-base flex w-full h-auto mt-9 text-[#6560f0] underline justify-center">
            see all Notifications
          </p>
        </div>
      </div>
      <div className="flex gap-[10px] items-center cursor-pointer">
        <div className="h-[50px] w-[50px] rounded-lg border-2 border-solid "></div>
        <div>
          <p className="font-bold text-xl text-black">Manny</p>
          <p
            className="font-light text-[#4c4a68]">
          </p>
        </div>

        <div className="hidden  absolute top-24 right-0 z-40  shadow-lg h-48 w-48 ">
          <div className="flex  gap-3 p-4 items-center text-[#6560F0] text-2xl">
            <IoPersonOutline />{" "}
            <p className="font-medium text-base text-[#2b2a3f]">
              My Account{" "}
            </p>
          </div>
          <div className="flex  gap-3 p-4 items-center text-[#6560F0] text-2xl">
            <IoMdSettings />
            <p className="font-medium text-base text-[#2b2a3f]">Settings</p>
          </div>
          <div className="flex  gap-3 p-4 items-center text-[#6560F0] text-2xl">
            <AiOutlineLogout />
            <p className="font-medium text-base text-[#2b2a3f]">Log Out</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Navbar