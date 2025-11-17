import React from 'react'

const service = [
    {
        id: 1,
        title: "Web Design",
        description: "Creating visually appealing and user-friendly web design.",
    },
    {
        id: 2,
        title: "Frontend Development",
        description: "building responsive and interactive user interface.",
    },
    {
        id: 3,
        title: "Product Design",
        description: "creating products that user appealing.",
    },
    {
        id: 4,
        title: "Graphic Design",
        description: "Turning ideas into visually appealing designs.",
    },
    {
        id: 5,
        title: "Video Editing",
        description: "Creating eye catching videos for ads.",
    },
        
]
const Services = () => {
  return (
    <div className='bg-black text-white py-20 px-16' id='services'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <h2 className='text-4xl font-bold text-center mb-12'>My Services</h2>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {service.map(services => (
                <div key={services.id}
                className='bg-gray-800 px-6 p-6 rounded-lg hover:shadow-lg
                transform transistion-transform duration-300 hover:scale-105'
                >
                <div className='text-right text-2xl font-bold text-tranparent bg-clip-text 
                bg-gradient-to-r from-green-600 to blue-400'
                >
                    {services.id}
                    </div>
                    <h3 className='mt-2 text-2xl font-bold text-transparent bg-clip-text
                    bg-gradient-to-r from-green-400 to to-blue-500'>
                      {services.title}  
                    </h3>
                    <p className='mt-2 text-gray-300'>
                        {services.description}
                        <a href="#" className='mt-4 inline-block text-green-400 hover:text-blue-500'>
                            Read More
                            </a>
                    </p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Services