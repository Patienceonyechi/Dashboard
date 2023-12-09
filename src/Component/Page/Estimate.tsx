// import React from 'react'

// const Estimate:React.FC = () => {
//   return (
//     <div>
//         <center>
//             <div>
//               <h2 className='font-extrabold'>Log In</h2>
//               <p className='text-[12px]'>
//                 Welcome Admin, Please Login to your dashboard
//               </p>
//             </div>
//             <div className='p-5'>
//               <form>
//                 <div className='p-3'>
//                   <input
//                     className='h-[50px] w-[350px] bg-[#FFE3F2] text-[#801D48] p-3'
//                     placeholder='Email'
//                   />
//                 </div>
//                 <div className='p-3'>
//                   <input
//                     className='h-[50px] w-[350px] bg-[#FFE3F2] text-#801D48 p-3'
//                     placeholder='Password'
//                   />
//                 </div>
//                 <div className='p-1'>
//                   <button className='h-[50px] w-[350px] bg-[#801D48] text-white'>
//                     Log In
//                   </button>
//                 </div>
//                 <div className='flex items-center justify-end gap-1'>
//                   <p className='text-[12px]'>Don't have an account?</p>
//                   <span className='text-[#801D48] text-[12px]'>Sign Up</span>
//                 </div>
//               </form>
//             </div>
//           </center>
//     </div>
//   )
// }

// export default Estimate





import { Select } from 'flowbite-react'
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'


interface UData{
    size:string

}

const Estimate:React.FC = () => {
    const Navigate = useNavigate()
    const [formData, setFormData] = useState({
        name: "",
        phonenumber: "",
        email: "",
        address: ""
    })

    const [size, setSize] = useState<string>("");
    const [data, setData] = useState<Array<UData>>([])

    const submitData = () =>{
        setData((prev)=>[
            ...prev, {
                size,
                data
            }
        ])
    }
 

    const onChangeForm = (e:React.ChangeEvent<HTMLInputElement>)=>{
        const {name, value} = e.target;
        setFormData((prev)=>({
            ...prev,
            [name]:value
        }))
    }

  

  return (
    <div className=''>
       <div className='ml-[250px] mt-16 pt-24 sm:mx-auto sm:flex-wrap sm:w-[100%] sm:ml-2'>
          <div className='flex justify-center ml-10 sm:flex sm:items-center sm:justify-center sm:ml-0'>
            <h1 className='text-lg text-[23px] sm:text-[12px] '>QUOTE REQUEST FORM</h1>
          </div>
       </div>
       <div className='ml-[300px] mt-16 sm:mx-auto sm:flex-wrap sm:w-[100%] sm:ml-2'>
          <div>
            <p className='text-[25px] sm:text-[12px]'>Fill this form to receive a quote</p>
            <p className='text-[20px] sm:text-[12px]'>Contact information</p>
          </div>
       </div>
        <div className=''>
        <div className=''>
            <form
           >
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
        <div className='ml-[300px] mt-16 sm:mx-auto sm:flex-wrap sm:w-[100%] sm:ml-2'>
            <div>
                <h1>Property information</h1>
                   <form action="">
                   <input 
                  required
                  onChange={onChangeForm}
                name="Tell us about your apartment"
                className='h-[200px] w-[97%] border pb-36' 
                placeholder='Tell us about your apartment' />
                   </form>
            </div>
            <div className='flex  justify-between pt-5'>
                <div>
                    <p>Service</p>
                    <form action="">
                        <input 
                           onChange={(e)=>{
                            setSize(e.target.value)
                           }}
                        required placeholder="" />
                        <Select className=''>
                            <option selected disabled>Select Service</option>
                            <option value="Home">Home Cleaning</option>
                            <option value="Janitoria">Janitoria Services(8 H)</option>
                            <option value="Fumigation">Fumigation and Pest Control(45Min)</option>
                            <option value="Office">Office Cleaning</option>
                            <option value="Environment">Environmental Cleaning</option>
                            <option value="Waste">Waste Evacuation</option>
                            <option value="Post Construction">Post Construction Cleaning</option>
                            <option value="Waste">Facility Management Services(2 H)</option>
                            <option value="Lundray">Lundray Services</option>
                        </Select>
                    </form>
                </div>
                <div>
                    <p>Number of Bathroom</p>
                      <form>
                      <input 
                           onChange={(e)=>{
                            setSize(e.target.value)
                           }}
                        required placeholder="" />
                        <Select className=''>
                            <option selected disabled>Select of bathroome</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            <option value="4">Four</option>
                            <option value="5">Five</option>
                            <option value="1/10">One to Ten</option>
                            <option value="1/20">One to Twenty</option>
                        </Select>
                      </form>
                </div>
                <div className='mr-8'>
                    <p>Number of Toilet</p>
                    <form action="">
                    <input 
                           onChange={(e)=>{
                            setSize(e.target.value)
                           }}
                        required placeholder="" />
                        <Select className=''>
                            <option selected disabled>Select number of toilet</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            <option value="4">Four</option>
                            <option value="5">Five</option>
                            <option value="1/10">One to Ten</option>
                            <option value="1/20">One to Twenty</option>
                        </Select>
                    </form>
                </div>
            </div>
            <br />
            <br />
            <div>
                <div className='bg-[blue] w-[100px] h-[40px] rounded-[10px] ' >
                    <button className='flex ml-6 text-[white] pt-2' type='submit'>submit</button>
                </div>
            </div>
            <br />
            <br />
        </div>
        </div>
    </div>
  )
}

export default Estimate




