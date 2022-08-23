import React from 'react'
import Pro from '../Components/Pro'
import {AiOutlineLinkedin } from 'react-icons/ai';
import {AiFillTwitterCircle } from 'react-icons/ai';
import { CgMail} from 'react-icons/cg';
import '../App.css'



const Footy = () => {
  return (
    <div>
       <footer className='pt-4'>
        <div>
        <h2 className='text-center'>NKEMDILI JANE</h2>
       <div className='flex justify-center'>
        < AiOutlineLinkedin className='m-3 ' />
        < AiFillTwitterCircle className='m-3' />
        < CgMail className='m-3' />
        </div>
        <small>copyright &copy;2021 | All rights reserved</small>
    </div>
    
        </footer> 
    </div>
  )
}

export default Footy