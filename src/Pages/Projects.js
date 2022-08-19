import React from 'react'
import Proj1 from '../Images/Proj1.png'
import Blog from '../Images/Blog.png'
import Cleaner from '../Images/Cleaner.png'
import Hire from '../Images/Hire.png'
import Link from '../Images/Link.png'
import Makeup from '../Images/Makeup.png'
import sales from '../Images/sales.png'
import Youtube from '../Images/Youtube.png'
import Cert from '../Components/Cert'
import '../App.css'

const Projects = () => {
  return (
    <div className='projo px-20 mb-5'>
        <h1 className='text-center pt-20 '>MY PROJECTS</h1>
        <div className='grid grid-rows-3 grid-flow-col gap-6 proj'>
        <Cert image = {Proj1} Text = {'A personal Project'}/>
        <Cert image = {Blog} Text = {'A blog site'}/>
        <Cert image = {Cleaner} Text = {'A business site'}/>
        <Cert image = {Link} Text = {'A link shortening site'}/>
        <Cert image = {Makeup} Text = {'A Makeup Project'}/>
        <Cert image = {sales} Text = {'A busimess site'}/>
        <Cert image = {Youtube} Text = {'A youtube clone'}/>
        <Cert image = {Hire} Text = {'A business site'}/>
    </div>
    </div>
  )
}

export default Projects