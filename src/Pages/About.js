import React from 'react'
import ServiceRend from '../Components/ServiceRend'
import Vec1 from '../Images/Vec1.png'
import Vec2 from '../Images/Vec2.png'
import Vec3 from '../Images/Vec3.png'
import Vec4 from '../Images/Vec4.png'
import Vec5 from '../Images/Vec5.png'
import Vec6 from '../Images/Vec6.png'
import Vec7 from '../Images/Vec7.png'
import Vec8 from '../Images/Vec8.png'
import Vec9 from '../Images/Vec9.png'
import Cert from '../Components/Cert'
import Proj1 from '../Images/Proj1.png'
import '../App.css'

const About = () => {
  return (
    <div className='px-20 abouty'>
        <div className='ser'>
        <h1 className='py-20 text-center' >THE SERVICES THAT I RENDER</h1>
       <div className='grid grid-rows-3 grid-flow-col gap-6 rend'>   
        <ServiceRend image = {Vec1} />
        <ServiceRend image = {Vec2} />
        <ServiceRend image = {Vec3} />
        <ServiceRend image = {Vec4}/>
        <ServiceRend image = {Vec5}/>
        <ServiceRend image = {Vec6}/>
        <ServiceRend image = {Vec7}/>
        <ServiceRend image = {Vec8}/>
        <ServiceRend image = {Vec9}/>
    </div>
    </div>

      <h1 className=' pt-10'>CERTIFICATIONS</h1>
      <div className='grid grid-rows-3 grid-flow-col gap-6'>
        <Cert image = {Proj1} Text = {'A personal Project'}/>
        <Cert image = {Proj1} Text = {'A personal Project'}/>
        <Cert image = {Proj1} Text = {'A personal Project'}/>
        <Cert image = {Proj1} Text = {'A personal Project'}/>
        <Cert image = {Proj1} Text = {'A personal Project'}/>
        <Cert image = {Proj1} Text = {'A personal Project'}/>
    </div>
    </div>
  )
}

export default About