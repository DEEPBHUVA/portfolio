import React from 'react'
import tour from '../assets/portfolio/tour.png'
import bhagvat_geeta from '../assets/portfolio/bhagvat_geeta.png'
import advice from '../assets/portfolio/advice.png'
import speech from '../assets/portfolio/speech.png'
import expence from '../assets/portfolio/expence.png'
import admin from '../assets/portfolio/Admin.png'
import Url_Shortener from '../assets/portfolio/URL_Shortener.png'
import Coine_Bounce from '../assets/portfolio/coin_Bounce.png'

const Portfolio = () => {

    const portfolios = [
        {
            id : 1,
            src : tour,
            projectName : "Landing Page",
            link : 'https://tour-and-travel-dj1704-site.netlify.app/',
            codeLink : "https://github.com/DEEPBHUVA/trippy_Landing_Page"
        },
        {
            id : 2,
            src :bhagvat_geeta,
            projectName : "Shreemad Bhagvat Geeta",
            link : 'https://shrimad-bhagvat-geeta.netlify.app/',
            codeLink : 'https://shrimad-bhagvat-geeta.netlify.app/'
        },
        {
            id : 3,
            src : admin,
            projectName : "Admin Panel",
            link : 'https://github.com/DEEPBHUVA/Address_Book',
            codeLink : "https://github.com/DEEPBHUVA/Address_Book"
        },
        {
            id : 4,
            src : Coine_Bounce,
            projectName : "Coine Bounce",
            link : "https://github.com/DEEPBHUVA/coin-bounce"   ,
            codeLink : "https://github.com/DEEPBHUVA/coin-bounce"
        },
        {
            id : 5,
            src : expence,
            projectName : "Expence Tracker",
            link : 'https://expense-tracker-1704.netlify.app/',
            codeLink : 'https://expense-tracker-1704.netlify.app/'
        },
        {
            id : 6,
            src : Url_Shortener,
            projectName : "Url Shortener",
            link : 'https://github.com/DEEPBHUVA/URL_Shortner',
            codeLink : "https://github.com/DEEPBHUVA/URL_Shortner"
        },
        {
            id : 7,
            src : advice,
            projectName : "Real Advice",
            link : 'https://random-advice-generator-dj1704-site.netlify.app/',
            codeLink : 'https://random-advice-generator-dj1704-site.netlify.app/'
        },
        {
            id : 8,
            src : speech,
            projectName : "Speech To Tax Converter",
            link : 'https://speech-to-text-converter-dj1704-site.netlify.app/',
            codeLink : 'https://speech-to-text-converter-dj1704-site.netlify.app/'
        }
    ]



  return (
    <div name='portfolio' className='bg-gradient-to-b from-black to-gray-800 w-auto text-white md:h-auto'>
        <div className='max-w-screen-lg p-4 mx-auto flex-col justify-center w-full h-full'>
            <div className='pb-8 '>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6'>Check Out some of my work right here</p>
            </div>
            
            <div className='grid sm:grid-cols-3 md:grid-col-3 gap-8 px-12 sm:px-6'>
            {
                portfolios.map(({id,src,link,projectName,codeLink})=>
                <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                    <img src={src} alt='' className='rounded-md duration-200 hover:scale-105'></img>
                    <div className='items-center text-center py-3 m-4 duration-200 hover:scale-105 bg-cyan-900 rounded-md'><h1>{projectName}</h1></div>
                    <div className='felx items-center justify-center'>
                        <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 '><a href={link}>Demo</a></button>
                        <button className='duration-200 hover:scale-105'><a href={codeLink}>Code</a></button>
                    </div>
                </div>
                )
            }
            </div>
        </div>
    </div>
  )
}

export default Portfolio