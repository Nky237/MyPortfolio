import React from 'react'
import Image from '../Images/Image.jpg'

const Pro = () => {
  return (
    <div>
        <div className='imgo'>
            <img src={Image} height = {50} width = {50} alt = 'tae1' className='rounded-full'/>
        </div>
        <h3>Femi Okaseun</h3>
        <p>Seyi gets things done. He’s very passionate about what he
             does and he’s always fun to be with.</p>
    </div>
  )
}

export default Pro


    