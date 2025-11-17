import React from 'react'
import employeeMSImage from "../assets/LifeTrak.png";
import bookMSImage from "../assets/Exo.png";
import bookImage from "../assets/sd.png";


const projects = [
    {
        id: 1,
        name: "Health Companion Website",
        technologies: "Personal life tracker that helps you monitor your wellness, set goals and track your progress",
        image: employeeMSImage,
        github: "https://github.com/Mfonisorobert/Capstoneproject",
        site: "https://life-trak.vercel.app",
    },
    {
        id: 2,
        name: "Exo",
        technologies: "Business Strategy & Planning website that helps individual to manage their businesses",
        image: bookMSImage,
        github: "https://github.com/Mfonisorobert",
        site: "https://exowebsite-khaki.vercel.app/",
    },
    {
        id: 3,
        name: "CBT Exam Platform",
        technologies: "This is an online exams platform built for school and colleges. The UI and UX is user friendly with seamless experience",
        image: bookImage,
        github: "https://github.com/Mfonisorobert",
        site: "https://sundream-cbt.vercel.app/",
    },
    // {
    //     id: 4,
    //     name: "Employee MS",
    //     technologies: "MERN Stack",
    //     image: employeeMSImage,
    //     github: "https://github.com/Mfonisorobert",
    // },
    // {
    //     id: 5,
    //     name: "Employee MS",
    //     technologies: "MERN Stack",
    //     image: employeeMSImage,
    //     github: "https://github.com/Mfonisorobert",
    // },
    // {
    //     id: 6,
    //     name: "Employee MS",
    //     technologies: "MERN Stack",
    //     image: employeeMSImage,
    //     github: "https://github.com/Mfonisorobert",
    // },
]
const Projects = () => {
  return (
    <div className='bg-black text-white py-20 px-16' id='project'>
        <div className='container mx-auto px-0 md:px-0 lg:px-0'>
            <h2 className='text-4xl font-bold text-center mb-12'>My Projects</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 '>
                 {projects.map((project) => (
                     <div key={project.id} className='bg-gray-800 px-6 p-6 rounded-lg hover:shadow-lg
                transform transistion-transform duration-300 hover:scale-105'
                >
                <img src={project.image} alt={project.name} className='
                        rounded-lg mb-4 w-full h-48 object-fill hover:scale-105 duration-300' />
                        <h3 className='text-2xl font-bold mb-2'>{project.name}</h3>
                        <p className='text-gray-400 mb-4'>{project.technologies}</p>
                        <a href={project.github} className='inline-block bg-gradient-to-r
                        from-green-400 to-blue-500 text-white px-4 py-2 rounded-full' target='_blank'
                        rel='noopener noreferrer'>GitHub</a>
                        <a href={project.site} className='inline-block bg-gradient-to-r
                         from-pink-500 to-blue-500 text-white px-4 py-2 rounded-full mx-4' target='_blank'
                        rel='noopener noreferrer'>Visit Site</a>
                    </div>
                ))}
            </div>
        </div>
    </div>
    
  )
}

export default Projects