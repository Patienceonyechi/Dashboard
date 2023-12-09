import React from 'react'
import {AiOutlineMail} from "react-icons/ai"
import {CiPhone, CiUser} from "react-icons/ci"
import {GoPencil} from "react-icons/go"


const UserProfile :React.FC= () => {
  return (
    <div>
        
            <div className='flex  ml-[330px] pt-[50px] gap-3 sm:mx-auto sm:flex-wrap md:mx-auto'>
                <div className='flex flex-col bg-[white] h-[500px] w-[350px] gap-10 p-5 pt-20 shadow-xl sm:hidden md:hidden'>
                    <div className='flex  gap-3'>
                        <div className='h-[70px] w-[70px] rounded-full bg-[gray] flex items-center justify-center'>
                            <AiOutlineMail  
                            color="white" size="30"
                            />
                        </div>
                        <div className='flex flex-col'>
                            <h3 className='text-black'>Email</h3>
                            <h3 className='text-black'>manny@gmail.com</h3>
                        </div>
                    </div>
                    <div className='flex gap-3'>
                        <div className='h-[70px] w-[70px] rounded-full bg-[gray] flex items-center justify-center' >
                            <CiPhone
                             color="white" size="30"
                            />
                        </div>
                        <div>
                            <h3 className='text-black'>Phone No</h3>
                            <h3 className='text-black'>+1-321-456-8873</h3>
                        </div>
                    </div>
                    <div className='flex gap-3'>
                        <div className='h-[70px] w-[70px] rounded-full bg-[gray] flex items-center justify-center'>
                            <CiUser 
                             color="white" size="30"
                            />
                        </div>
                        <div>
                            <h3 className='text-black'>Name</h3>
                            <h3 className='text-black'>Opay Manny V</h3>
                        </div>
                    </div>
                    <div className='flex gap-3'>
                        <div className='h-[70px] w-[70px] rounded-full bg-[gray]'></div>
                        <div>
                            <h3 className='text-black'>DOB</h3>
                            <h3 className='text-black'>09-12-1995</h3>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col h-[500] w-[800px] pt-3 sm:mx-auto sm:h-[500px] sm:w-[300px] sm:pt-2 md:mx-auto md:h-[500px]'>
                    <div className='flex items-center justify-end'>
                        <GoPencil />
                        <h3 className='sm:text-[12px] md:text-[16px]'>Edit</h3>
                    </div>
                    <form>
                        <div className='p-4'>
                            <input 
                            className='h-[40px] w-[800px] p-3 border-gray border-2 border-solid outline-none sm:w-[280px] sm:text-[12px] md:-[650px]'
                            placeholder='First Name'
                            />
                        </div>
                        <div className='p-4'>
                            <input
                            className='h-[40px] w-[800px] p-3 border-gray border-2 border-solid outline-none sm:w-[280px] sm:text-[12px]'
                            placeholder='Last Name'
                            />
                        </div>
                        <div className='p-4'>
                            <input 
                            className='h-[40px] w-[800px] p-3 border-gray border-2 border-solid outline-none sm:w-[280px] sm:text-[12px]'
                            placeholder='Email'
                            />
                        </div>
                        <div className='p-4'>
                            <input
                            className='h-[40px] w-[800px] p-3 border-gray border-2 border-solid outline-none sm:w-[280px] sm:text-[12px]' 
                            placeholder='Phone Number'
                            />
                        </div>
                        <div className='p-4'>
                            <input
                            className='h-[40px] w-[800px] p-3 border-gray border-2 border-solid outline-none sm:w-[280px] sm:text-[12px]'
                            placeholder='Date Of Birth'
                            />
                        </div>
                        <div className='p-4'>
                            <input
                            className='h-[40px] w-[800px]  p-3 border-gray border-2 border-solid outline-none sm:w-[280px] sm:text-[12px]' 
                            placeholder='Address'
                            />
                        </div>
                        <div className='flex items-center justify-center'>
                            <button className='bg-[#FFB400] h-[50px] w-[400px] rounded-[5px] sm:w-[150px] sm:h-[40px] sm:text-[12px]'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        
      
    </div>
  )
}

export default UserProfile