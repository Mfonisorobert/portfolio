import React from 'react'
import AboutImage from '../assets/am.jpg'
import ProgressBar from './ProgressBar'

const About = () => {
  return (
    // id='about' means when you click the Navbar for About, it should take you here immediately.
    <div className='bg-black text-white py-20' id='about'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <h2 className='text-4xl font-bold text-center mb-12'>About Me</h2>
            <div className='flex flex-col md:flex-row items-center md:space-x-12'>
                <img src={AboutImage} alt="" 
                className='w-72 h-80 rounded-md object-cover mb-8 md:mb-0'/>
            <div className='flex-1'>
            <p className='text-lg mb-8'>
                I'm a passionate Software Engineer with specialty in Frontend web development 
                focusing on building modern and responsive web applications. 
                With a foundation in both UI/UX and frontend technologies, 
                I strive to create a seamless and efficient user experiences.
            </p>
            {/* <div className='space-y-4'>
                <div className='flex items-center'>
                    <label htmlFor="htmlandcss" className='w-4/12 md:w-3/12'>
                    HTML & CSS
                    </label>
                <div className='grow bg-gray-800 rounded-full h-2.5'>
                    <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded
                    transform transition-transform duration-300 hover:scale-105 w-10/12'>
                    </div>
                </div>
                </div>
                <div className='flex items-center'>
                    <SkillBar label htmlFor="htmlandcss" className='w-4/12 md:w-3/12'>
                    React JS
                    </label>
                <div className='grow bg-gray-800 rounded-full h-2.5'>
                    <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded
                    transform transition-transform duration-300 hover:scale-105 w-11/12'>
                    </div>
                </div>
                </div>
                <div className='flex items-center'>
                    <label htmlFor="htmlandcss" className='w-4/12 md:w-3/12'>
                    Node JS
                    </label>
                <div className='grow bg-gray-800 rounded-full h-2.5'>
                    <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded
                    transform transition-transform duration-300 hover:scale-105 w-8/12'>
                    </div>
                </div>
                </div>
            </div> */}


            {/* This is when you're not adding the digit to it */}
    {/* <div className="space-y-6">
      <ProgressBar label="HTML & CSS" percentage="80%" />
      <ProgressBar label="React JS" percentage="90%" />
      <ProgressBar label="Node JS" percentage="70%" />
    </div> */}
 
{/* This has a little delay before it start moving */}
{/* It has link with ProgressBar.jsx */}
<div className="space-y-6 mt-10">
      <ProgressBar label="HTML & CSS" percentage="90%" delay={0} />
      <ProgressBar label="React JS" percentage="85%" delay={200} />
      <ProgressBar label="Node JS" percentage="70%" delay={400} />
    </div>

            <div className='mt-6 flex justify-between text-center'>
                <div>
                    <h3 className='text-2xl font-bold text-transparent bg-clip-text
                    bg-gradient-to-r from-green-400 to to-blue-500'>
                        1+
                    </h3>
                    <p>Years Experience</p>
                </div>
                <div>
                    <h3 className='text-2xl font-bold text-transparent bg-clip-text
                    bg-gradient-to-r from-green-400 to to-blue-500'>
                        5+
                    </h3>
                    <p>Projects Completed</p>
                </div>
                <div>
                    <h3 className='text-2xl font-bold text-transparent bg-clip-text
                    bg-gradient-to-r from-green-400 to to-blue-500'>
                        3+
                    </h3>
                    <p>Happy Clients</p>
                </div>
            </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default About