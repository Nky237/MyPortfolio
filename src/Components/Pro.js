import React from 'react'


const Pro = ({Image, text}) => {
  return (
    <div>
        <div className='imgo'>
            <img src={Image} height = {50} width = {50} alt = 'tae1' className='rounded-full'/>
        </div>
        <h3>{text}</h3>
        <p>Seyi gets things done. He’s very passionate about what he
             does and he’s always fun to be with.</p>
    </div>
  )
}

export default Pro


    