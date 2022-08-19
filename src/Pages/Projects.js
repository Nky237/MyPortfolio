import React from 'react'
import Proj1 from '../Images/Proj1.png'
import Cert from '../Components/Cert'

const Projects = () => {
  return (
    <div>
        <h1 className='text-center pt-20 '>MY PROJECTS</h1>
        <div className='grid grid-rows-3 grid-flow-col gap-6'>
        <Cert image = {Proj1} Text = {'A personal Project'}/>
        <Cert image = {Proj1} Text = {'A personal Project'}/>
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

export default Projects