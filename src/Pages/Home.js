import React from 'react'
import Pro from '../Components/Pro'
import About from './About'
import Projects from './Projects'
import Service from './Service'
import Contact from './Contact'
import Lady1 from '../Images/Lady1.png'
import Lady2 from '../Images/Lady2.png'
import Lady3 from '../Images/Lady3.png'
import Lady4 from '../Images/Lady4.png'
import Pic from '../Images/Image.jpg'
import '../App.css'
import Button from 'react-bootstrap/Button';


const Home = () => {
  return (
    <div>
        <section className='py-7 flex justify-around land home'>
            <div className='text-center py-20 my-7 text-2xl font-black'>
                <p>HI THERE </p>
                <p>I AM EZIKE NKEMDILI</p>
                <h2>A FULLSTACK DEVELOPER AND A DATA ANALYST</h2>
                <Button variant="dark" className='mx-10'>Know more</Button> 
            </div>
            <div>
              <img src={Pic} height = {200} width = {300} alt = 'Profile' />
            </div>           
        </section>

        <Service />
        <About />
        <Projects />

        <section className='flex justify-around tessy pt-20 px-20 '>
            <div className='container flex tesco'>
            <div className='tes mr-7'>
                <h1 className='text-lg text-white mt-20 py-20'>Testimonies & Recommendations</h1>
            </div>
            <div className='grid grid-rows-2 grid-flow-col gap-4 pt-18'>
                <Pro Image = {Lady1} text = {'Jenny Cral'} />
                <Pro Image = {Lady2} text = {'John Cral'} />
                <Pro Image = {Lady3} text = {'Ednjy Cral'}/>
                <Pro Image = {Lady4} text = {'Swanza cook'} />
                
           </div>
            </div>
        </section>
        <Contact />
      
    
    </div>
  )
}

export default Home