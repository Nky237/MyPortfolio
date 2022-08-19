import React from 'react'
import Bar from '../Images/Bar.png' 

const Servicebar = ({name, image}) => {
  return (
    <div className='flex'>
       <div className='mx-5'>
        <img src = {image} alt = 'img' />
        </div>     
       <div>
        <h3> {name}</h3>
        <img src={Bar} width = {300} alt ='bar'/>
        </div>     
    </div>
  )
}

export default Servicebar