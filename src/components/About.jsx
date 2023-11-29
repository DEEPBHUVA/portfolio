import React from 'react'
import { MdOutlineArrowRight } from 'react-icons/md'
import {Link} from 'react-scroll'

function About() {
  return (
    <div name='about' className='w-auto h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About Me</p>
        </div>
        <p className='text-xl mt-10 '>
          "I am a passionate computer science student with a focus on web development, particularly in MERN stack technology. I am dedicated to creating dynamic and user-friendly web applications. In addition to my proficiency in MERN, I am also actively learning ASP.Net Core MVC, expanding my skill set to encompass a broader range of technologies. I thrive on challenges and am eager to apply my knowledge to create innovative digital solutions."
        </p>
        <br></br>
          <div>
              <Link to='contact' smooth duration={500} className='text-white group w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-700'>
                  Contact ME
                  <span className='group-hover:rotate-90 duration-300 '>
                      <MdOutlineArrowRight size={25}/>
                  </span>
              </Link>
          </div>
        </div>
    </div>
  )
}

export default About