import React from 'react'
import '../App.css'



 const Contact = () => {
  return (
  
    <div className='formo'>

        <form className='ml-4 formy'>
          
            <h3 className='pt-20'>Send a message</h3>
            <div className='border-solid border-2 border-black my-5   '>
            <div  >
            <label for = 'Name' className='ml-4 mt-3'>Name: <br />
            <input type='text' className='border-solid border-2 border-black  ml-4' />
            </label>
            </div>
        <div> 
            <label for = 'email' className='ml-4 mt-3'>Email: <br />
            <input type='email' className='border-solid border-2 border-black  ml-4'/>
            </label>
        </div>
        <div >
            <label for = 'state' className='ml-4 mt-3'>State: <br />
            <input type='text' className='border-solid border-2 border-black ml-4' />
            </label>
            </div>
        <div>
            <p className='ml-4'>Message:</p>
            <textarea rows={5} cols = {30} placeholder = 'enter your message' className='ml-4 border-solid border-2 border-black' /> 
            </div>
          <button type='button' className=' border-solid border-2 border-black my-4'>Send Message</button>
          </div>
        </form>
    </div>

  
  )
}
export default Contact
