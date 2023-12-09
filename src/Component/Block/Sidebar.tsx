
import React from 'react'
import { CiSettings } from "react-icons/ci";
import { MdOutlinePowerSettingsNew} from "react-icons/md";
import { MdOutlineDashboard } from "react-icons/md";
import { FaQuestionCircle } from "react-icons/fa";
import { FiGift } from "react-icons/fi";
import { BiCalendarMinus } from "react-icons/bi";
import { Link } from 'react-router-dom';


const Sidebar:React.FC = () => {
  return (
    <div className='z-[20] fixed top-0 left-0 right-1 gap-5'>
         <div>
            <div className = "flex">
                <div className = "bg-[#2B2A3F] h-[100vh] w-[20%] p-[20px] ">
                    <div className=''>
                       <div className=''>
                            <img className='w-[100px] h-[100px] bg-white rounded-full' src="" />   
                            <div className='flex text-[white] '>
                                <h3>Manny man</h3>
                                <span>manny@gmail.com</span>
                            </div>
                       </div>
                        <div>
                            <div className='text-[white] flex justify-center'> ———————————————— </div>
                        </div>
                      
                        <div>
                            <Link to= "/dashboard">
                            <div className='flex gap-5 text-[white]'>
                                <div>
                                < MdOutlineDashboard/>
                                </div>
                                <div>
                                    <h3 className='text-[13px] mb-6'>Dashboard</h3>
                                </div>
                            </div>
                            </Link>
                            
                            <Link to="/request">
                            <div className='flex gap-5 text-[white]'>
                                <div>
                                   <BiCalendarMinus />
                                </div>
                                <div className='flex gap-5'>
                                    <h3 className='text-[13px] mb-6'>Request an estimate</h3>
                                </div>
                            </div>
                            </Link>
                            
                            <Link to = "/myservice">
                            <div className='flex gap-5 text-[white]'>
                                <div>
                                  <FiGift />
                                </div>
                                <div className='flex gap-5 text-[white]'>
                                    <h3 className='text-[13px] mb-6'>My Services</h3>
                                </div>
                            </div>
                            </Link>
                            <Link to="/faq">
                            <div className='flex gap-5 text-[white]'>
                                <div>
                                <FaQuestionCircle />
                                </div>
                                <div>
                                    <h3 className='text-[13px] mb-6'>FAQ</h3>
                                </div>
                            </div>
                            </Link>
                            
                            <div className='flex gap-5 text-[white]'>
                                <div className=''>
                                    <CiSettings />
                                </div>
                                <div>
                                    <h3 className='text-[13px] mb-6'>Settings</h3>
                                </div>
                            </div>

                         <Link to="/worker">
                         <div className='flex gap-5 text-[white]'>
                                <div className=''>
                                    <CiSettings />
                                </div>
                                <div>
                                    <h3 className='text-[13px] mb-6'>WorkerDashboard</h3>
                                </div>
                            </div>
                         </Link>
                            
                            
                            <div className='flex gap-5 text-[white]'>
                                <div>
                                    <MdOutlinePowerSettingsNew />
                                </div>
                                <div>
                                    <h3 className='text-[13px] mb-6'>Log out</h3>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar