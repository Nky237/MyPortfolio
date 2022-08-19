import React from 'react'
import '../App.css'


const Cert = ({image, Text}) => {
  return (
    <div>
        <img src={image}  alt = 'image'  className='CertImg'/>
        <p>{Text}</p>
    </div>
  )
}

export default Cert