import React from 'react'
import '../App.css'
import html from '../assets/html.png'
import githib from '../assets/github.png'
import javascript from '../assets/javascript.png'
import css from '../assets/css.png'
import node from '../assets/node.png'
import react from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
import mongodb from '../assets/mongodb.png'
import python from '../assets/python.png'
import aspnet from '../assets/asp.net.png'
import java from '../assets/Java.png'


function Experience() {

    const techno = [
        {
            id:1,
            src:html,
            title:"Html",
            style:'shadow-orange-500'
        },
        {
            id:2,
            src:css,
            title:"Css",
            style:'shadow-blue-500'
        },
        {
            id:3,
            src:javascript,
            title:"Javascript",
            style:'shadow-yellow-500'
        },
        {
            id:4,
            src:react,
            title:"React",
            style:'shadow-blue-600'
        },
        {
            id:5,
            src:node,
            title:"Node",
            style:'shadow-green-500'
        },
        {
            id:6,
            src:tailwind,
            title:"Tailwind",
            style:'shadow-sky-400'
        },
        {
            id:7,
            src:mongodb,
            title:"MongoDB",
            style:'shadow-green-600'
        },
        {
            id:8,
            src:githib,
            title:"GitHub",
            style:'shadow-gray-400'
        },
        {
            id:9,
            src:java,
            title:"Java",
            style:'shadow-blue-700'
        },
        {
            id:10,
            src:python,
            title:"Python",
            style:'shadow-yellow-700'
        },
        {
            id:11,
            src:aspnet,
            title:".Net",
            style:'shadow-purple-700'
        },
    ]

  return (
    <div name='experirnce' className='experience bg-gradient-to-b from-gray-800 to-black w-full text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex-col justify-center'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                    Experience
                </p>
                <p className='py-6'>
                    These are the technologies i've worked with
                </p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>

                {
                    techno.map(({id,src,style,title})=>
                    <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                        <img src={src} alt='' className='w-20 mx-auto'></img>
                        <p className='mt-4'>{title}</p>
                    </div>
                    )
                }
            </div>
        </div>
    </div>
  )
}

export default Experience