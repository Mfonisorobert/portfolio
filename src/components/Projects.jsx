import React from 'react'
import employeeMSImage from "../assets/LifeTrak.png";
import bookMSImage from "../assets/Exo.png";
import bookImage from "../assets/Landing.png";


const projects = [
    {
        id: 1,
        name: "Employee MS",
        technologies: "MERN Stack",
        image: employeeMSImage,
        github: "https://github.com/Mfonisorobert",
    },
    {
        id: 2,
        name: "Blog App",
        technologies: "MERN Stack",
        image: bookMSImage,
        github: "https://github.com/Mfonisorobert",
    },
    {
        id: 3,
        name: "Book MS",
        technologies: "MERN Stack",
        image: bookImage,
        github: "https://github.com/Mfonisorobert",
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
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                 {projects.map((project) => (
                     <div key={project.id} className='bg-gray-800 px-6 p-6 rounded-lg hover:shadow-lg
                transform transistion-transform duration-300 hover:scale-105'
                >
                <img src={project.image} alt={project.name} className='
                        rounded-lg mb-4 w-full h-48 object-fill' />
                        <h3 className='text-2xl font-bold mb-2'>{project.name}</h3>
                        <p className='text-gray-400 mb-4'>{project.technologies}</p>
                        <a href={project.github} className='inline-block bg-gradient-to-r
                        from-green-400 to-blue-500 text-white px-4 py-2 rounded-full' target='_blank'
                        rel='noopener noreferrer'>GitHub</a>
                    </div>
                ))}
            </div>
        </div>
    </div>
    
  )
}

export default Projects