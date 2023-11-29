import React from 'react'
import {FaFacebook, FaGithub,FaInstagram,FaLinkedin, FaTwitter} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'

function Sociallinks() {

    const links = [
        {
            id:1,
            child:(
                <>Linkedin <FaLinkedin size={30}/></>
            ),
            href:'https://www.linkedin.com/in/deep-bhuva-878ab0222/',
        },
        {
            id:2,
            child:(
                <>Github <FaGithub size={30}/></>
            ),
            href:'https://github.com/DEEPBHUVA'
        },
        {
            id:3,
            child:(
                <>Twitter <FaTwitter size={30}/></>
            ),
            href:'https://twitter.com/Deep_Bhuva_?t=YZP7K5jBXHcTJHmWkicf-Q&s=08'
        },
        {
            id:4,
            child:(
                <>Facebook <FaFacebook size={30}/></>
            ),
            href:'https://www.facebook.com/deep.bhuva.1',
        },
        {
            id:5,
            child:(
                <>Instagram <FaInstagram size={30}/></>
            ),
            href:'https://www.instagram.com/mr._deep_____/?igshid=YmMyMTA2M2Y%3D',
        },
        {
            id:6,
            child:(
                <>Mail <HiOutlineMail size={30}/></>
            ),
            href:"mailto:bhuvadeep@gmail.com",
        },
        {
            id:7,
            child:(
                <>Resume <BsFillPersonLinesFill size={30}/></>
            ),
            href:'https://flowcv.com/resume/ok8tn1ipnt',
            download : true,
        }
    ]
  return (
    <div className='hidden lg:flex flex-col top-[25%] left-0 fixed'>
        <ul>
            {links.map(({id,child,href,download}) => 
                <li key={id} className='flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:rounded-md duration-300 hover:ml-[-10px]'>
                <a href={href} className='flex justify-between items-center w-full text-white' download={download}><>{child}</></a>
            </li>
            )}

        </ul>
    </div>
  )
}

export default Sociallinks