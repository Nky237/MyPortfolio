import React from 'react'
import Bar from '../Images/Bar.png' 

const Servicebar = ({name, image}) => {
  return (
    <div className='flex'>
       <div>
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