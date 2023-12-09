

import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

 
const Faq = () => {
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
      <div className='flex justify-center text-[25px]'>
         <p>Ask your Questions</p>
      </div>
      <form className='pt-5'>
               <div className=''>
                 <div className='flex justify-center ml-16'>
                   <div>
                       <input
                        required
                        onChange={onChangeForm}
                        name='username'
                        className ="h-[50px] ml-[200px] w-[400px] border-[1px] text-[gray] p-3"
                        placeholder="name" />
                        </div>
                        <div>
                        <input 
                            required
                            onChange={onChangeForm}
                            name='phonenumber'
                            className ="h-[50px] ml-[200px] w-[400px] border-[1px] text-[gray] p-3"
                        placeholder="phonenumber" />
                        </div>
                  </div>
                  
                   <div className='flex pt-3 justify-center ml-16'>
                   <div>
                    <input 
                        required
                        onChange={onChangeForm}
                        name='address'
                        className ="h-[50px] ml-[200px] w-[400px] border-[1px] text-[gray] p-3"
                    placeholder="address" />
                    </div>
                    <div>
                        <input 
                            required
                            onChange={onChangeForm}
                            name='email'
                            className ="h-[50px] ml-[200px] w-[400px] border-[1px] text-[gray] p-3"
                        placeholder="email" />
                        </div>
                   </div>
               </div>
            </form>
    </div>
  )
}

export default Faq


