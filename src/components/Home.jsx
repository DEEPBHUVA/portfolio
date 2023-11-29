import React from 'react'
import  myprofile  from "../assets/mypic2.jpg";  
import { MdOutlineArrowRight } from 'react-icons/md'
import {Link} from 'react-scroll'


const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>

        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-8 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-2xl sm:text-7xl font-bold text-white mt-10'>I'm a Full Stack Developer</h2>
                <p className='text-gray-500 py-4'>
                     Hello! I'm a computer student deeply passionate about web development. My enthusiasm lies in crafting engaging and functional digital experiences, and I'm constantly exploring new technologies to expand my skills in this dynamic field. 
                </p>
                {/* button */}
                <div>
                    <Link to='portfolio' smooth duration={500} className='text-white group w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-700'>
                        Portfolio
                        <span className='group-hover:rotate-90 duration-300 '>
                            <MdOutlineArrowRight size={25}/>
                        </span>
                    </Link>
                </div>

            </div>

            {/* image */}
            <div className='rounded-full md:w-full mx-2 flex justify-center'>
                <img src={myprofile} alt='oneprofile' className='mx-auto rounded-full'></img>
            </div>

        </div>

    </div>
  )
}

export default Home