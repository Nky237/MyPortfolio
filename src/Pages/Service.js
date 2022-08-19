import React from 'react'
import Servicebar from '../Components/Servicebar'
import HTML from '../Images/HTML.png'
import Java from '../Images/Java.png'
import Php from '../Images/Php.png'
import Press from '../Images/Press.png'
import Python from '../Images/Python.png'
import Word from '../Images/Word.png'

const Service = () => {
  return (
    <div className='px-20 skilly'>
       <h2 className='pt-20  pt-5 text-center'>MY SKILLS</h2>
        <p className='text-center py-4'>Here are a few skills I posses</p>

           <div className='grid grid-rows-4 grid-flow-col gap-6'>
            <Servicebar image = {HTML} name = {'CSS'} />
            <Servicebar image = {Java} name = {'Python'} />
            <Servicebar image = {Php} name = {'JavaScript'} />
            <Servicebar image = {Press} name = {'Github'} />
            <Servicebar image = {Python} name = {'React'} />
            <Servicebar image = {HTML} name = {'Tailwind'} />
            <Servicebar image = {Word} name = {'Bootsrap'} />
            <Servicebar image = {Php} name = {'HTML '} />
            </div> 
    </div>
  )
}

export default Service