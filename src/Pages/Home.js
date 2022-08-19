import React from 'react'
import Image from '../Images/Image.jpg'
import Pro from '../Components/Pro'
import About from './About'
import Projects from './Projects'
import Service from './Service'
import Contact from './Contact'
import '../App.css'


const Home = () => {
  return (
    <div>
        <h1 className='font-black text-4xl'>JHENNA</h1>
        <section className='py-7 my-7 flex justify-around'>
            <div className='text-center py-12 my-7 text-2xl font-black'>
                <p>HI THERE </p>
                <p>I AM EZIKE NKEMDILI</p>
                <h2>A FULLSTACK DEVELOPER AND A DATA ANALYST</h2>
            </div>
            <div>
              <img src={Image} height = {200} width = {300} alt = 'Profile' />
            </div>           
        </section>

        <Service />
        <About />
        <Projects />

        <section className='flex justify-around'>
            <div className='tes mx-20'>
                <h1 className='text-lg text-white mt-20 py-20'>Testimonies & Recommendations</h1>
            </div>
            <div className='grid grid-rows-2 grid-flow-col gap-4'>
                <Pro />
                <Pro />
                <Pro />
                <Pro />
                
           </div>
        </section>
        <Contact />
      
    
    </div>
  )
}

export default Home