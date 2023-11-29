import React from 'react'
import {BsFillPersonLinesFill } from 'react-icons/bs'
import {  FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

function Contact() {
  return (
    <div name='contact' className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
                <div className='lg:hidden my-10 flex flex-row justify-center text-center'>
                    <ui className='list-none flex flex-row'>
                        <li className='mx-2'>
                            <a href='https://github.com/DEEPBHUVA'><FaGithub size={30}/></a>
                        </li>
                        <li className='mx-2'>
                            <a href='https://www.linkedin.com/in/deep-bhuva-878ab0222/'><FaLinkedin size={30}/></a>
                        </li>
                        <li className='mx-2'>
                            <a href='https://twitter.com/Deep_Bhuva_?t=YZP7K5jBXHcTJHmWkicf-Q&s=08'><FaTwitter size={30}/></a>
                        </li>
                        
                        <li className='mx-2'>
                            <a href='https://flowcv.com/resume/ok8tn1ipnt'><BsFillPersonLinesFill size={30}/></a>
                        </li>
                    </ui>
                    
                    
                    
                    
                </div>
                <p className='py-5'>Submit the form to get in touch with me.</p>
            </div>

            <div className='flex justify-center items-center '>
                <form action='https://getform.io/f/de0062ef-5abc-4eba-8863-1a92ffcd5092' method='POST' className='flex flex-col w-full md:w-1/2'>
                    <input type='text' name='name' placeholder='Enter Your Name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></input>
                    <input type='text' name='email' placeholder='Enter Your Email' className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></input>
                    <textarea name='message' rows='10' placeholder='Enter Your Message' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>
                    <button className='text-white bg-gradient-to-b  from-cyan-500 to-blue-700 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Let's talk</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact