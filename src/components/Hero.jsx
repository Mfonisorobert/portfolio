// import React from 'react'
// import HeroImage from '../assets/hi.png'

// const Hero = () => {
//   return (
//     <div className='bg-black text-white text-center py-16'>
//         <img src={HeroImage} alt="" 
//         className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform 
//         transition-transform duration-300 hover:scale-105'/>
//         <h1 className='text-3xl font-bold'>
//             I'm {""}
//             <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to to-blue-500'>Mfoniso Robert</span>
//             , a Software Engineer
//         </h1>
//         <p className='mt-4 text-lg text-gray-300'>
//             I specialise in building resposive frontend web applications. Proficient in ReactJS and Tailwind CSS
//         </p>
//         <div className='mt-8 space-x-6'>
//           <a href="#contact">
//             <button
//             className='bg-gradient-to-r from-green-400 to-blue-500 text-white md:inline
//             transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Contact me
//             </button>
//             </a>
//             <button
//             className='bg-gradient-to-r from-pink-500 to-blue-500 text-white md:inline
//             transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Resume</button>
          
//         </div>
//     </div>
//   )
// }

// export default Hero



import React from 'react'
import HeroImage from '../assets/hi.png'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div className='bg-black text-white text-center py-16'>
        
        {/* Animated Image */}
        {/* <motion.img 
          src={HeroImage}
          alt=""
          className='mx-auto mb-8 w-48 h-48 rounded-full object-cover'
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
          whileHover={{ scale: 1.08 }}
        /> */}

{/* If you want the image to float up and down infinitly, use this */}
<motion.img
  src={HeroImage}
  alt="Hero"
  className="mx-auto mb-8 w-48 h-48 rounded-full"
  animate={{ y: [0, -10, 0], rotate: [0, 5, 0], scale: [1, 1.05, 1] }}
 // up 10px then back
  transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
/>
{/* It ends here */}


        <h1 className='text-3xl font-bold'>
            I'm{" "}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
              Mfoniso Robert
            </span>
            , a Software Engineer
        </h1>

        <p className='mt-4 text-lg text-gray-300'>
            I specialise in building responsive frontend web applications. 
            Proficient in ReactJS and Tailwind CSS
        </p>

        <div className='mt-8 space-x-6'>
          <a href="#contact">
            <button
              className='bg-gradient-to-r from-green-400 to-blue-500 text-white md:inline
              transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
              Contact me
            </button>
          </a>

          <button
            className='bg-gradient-to-r from-pink-500 to-blue-500 text-white md:inline
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
            Resume
          </button>
        </div>
    </div>
  )
}

export default Hero
