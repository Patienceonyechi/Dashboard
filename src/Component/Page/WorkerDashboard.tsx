import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { IoEyeOutline } from "react-icons/io5";
import { FiGift } from "react-icons/fi";

const WorkerDashboard:React.FC = () => {
    const Navigate = useNavigate()
    const [formData, setFormData] = useState({
        name: "",
        phonenumber: "",
        email: "",
        address: ""
    })
    const onChangeForm = (e:React.ChangeEvent<HTMLInputElement>)=>{
        const {name, value} = e.target;
        setFormData((prev)=>({
            ...prev,
            [name]:value
        }))
    }
  return (
    <div className=' mt-16 pt-24 sm:mx-auto sm:flex-wrap sm:w-[100%] sm:ml-2'>
        <div className='ml-[300px] flex gap-2 justify-between'>
        <div className='w-[390px] h-[110px] border-2 sm:w-[200px] '>
              <div className='flex p-3'>
             <div className='bg-[#495057] border-2 h-[50px] m-5 w-[56px] flex items-center justify-center sm:text-[8px] sm:h-[30px] sm:w-[30px]'>
             
             <FiGift
              size = '35'
             />
             
             </div>
                <div className='flex-col sm:pt-5'>
                <p className=' text-[25px] sm:text-[15px] pt-5'>Available Service</p>
                </div>
              </div>
            </div>
            <div className='w-[390px] h-[110px] border-2 sm:w-[200px] mr-10 '>
              <div className='flex p-3'>
             <div className='bg-[#495057] border-2 h-[50px] m-5 w-[56px] flex items-center justify-center sm:text-[8px] sm:h-[30px] sm:w-[30px]'>
             <IoEyeOutline
              size = '35'
              />
             </div>
                <div className='flex-col sm:pt-5'>
                <p className=' text-[25px] sm:text-[15px] pt-5'>Total view</p>
                </div>
              </div>
            </div>
        </div>
         <form>
               <div className='pt-20'>
                  <div className='flex justify-center ml-16'>
                    <div>
                        <input
                        required
                        onChange={onChangeForm}
                        name='first name'
                        className ="h-[50px] ml-[200px] w-[400px] border-[1px] text-[gray] p-3"
                        placeholder="First name" />
                        </div>
                        <div>
                        <input 
                            required
                            onChange={onChangeForm}
                            name='last name'
                            className ="h-[50px] ml-[200px] w-[400px] border-[1px] text-[gray] p-3"
                        placeholder="Last name" />
                        </div>
                  </div>
                  
                   <div className='flex pt-10 justify-center ml-16'>
                   <div>
                    <input 
                        required
                        onChange={onChangeForm}
                        name='email'
                        className ="h-[50px] ml-[200px] w-[400px] border-[1px] text-[gray] p-3"
                    placeholder="Email" />
                    </div>
                    <div>
                        <input 
                            required
                            onChange={onChangeForm}
                            name='address'
                            className ="h-[50px] ml-[200px] w-[400px] border-[1px] text-[gray] p-3"
                        placeholder="Address" />
                        </div>
                   </div>  
                   <div className='flex pt-10 justify-center ml-16'>
                   <div>
                    <input 
                        required
                        onChange={onChangeForm}
                        name='phone number'
                        className ="h-[50px] ml-[200px] w-[400px] border-[1px] text-[gray] p-3"
                    placeholder="Phone number" />
                    </div>
                    <div>
                        <input 
                            required
                            onChange={onChangeForm}
                            name='date of birth'
                            className ="h-[50px] ml-[200px] w-[400px] border-[1px] text-[gray] p-3"
                        placeholder="Date Of Birth" />
                        </div>
                   </div>  
               </div>
            </form>

            <form action="">
                <div className='flex ml-28 pt-11 mt-16 sm:mx-auto sm:flex-wrap sm:w-[100%] sm:ml-2'>
                    <div className=''>
                    <input
                      required
                      name="Bio"
                      className ="h-[250px] ml-[200px] w-[400px] border-[1px] text-[gray] p-3"
                      placeholder ='Bio'
                    />
                    </div>
                    <div className='pt-20'>
                    <div className ="h-[150px] ml-[200px] w-[400px] border-[1px] p-3">
                       <div>
                       <p>CV Upload</p>
                       </div>
                        <div className='bg-[blue] h-[30px] w-[80px]'>
                            <button className='text-[white]  ml-4'>submit</button>
                        </div>
                    </div>
                    </div>
                </div>
            </form>
    </div>
  )
}

export default WorkerDashboard