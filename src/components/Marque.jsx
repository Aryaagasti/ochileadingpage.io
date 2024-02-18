import { motion } from 'framer-motion'
import React from 'react'

function Marque() {
 
motion

  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]'>
     <div className='text   flex   overflow-hidden whitespace-nowrap'>
       <motion.h1 initial={{x: "0"}} animate={{x:"-100%"}} transition={{ repeat: Infinity, ease: "linear", duration: 10 }}className='text-[22vw] leading-none font-["Founders_Grotesk_X-Condensed"] uppercase font-semibold  gap-10 -mb-[1vw] pt-10 pr-20 '>We are ochi</motion.h1>
       <motion.h1  initial={{x: "0"}} animate={{x:"-100%"}} transition={{repeat: Infinity, ease: "linear", duration: 10 }}  className='text-[22vw] leading-none font-["Founders_Grotesk_X-Condensed"] uppercase font-semibold gap-10 -mb-[1vw] pt-10 pr-20'>We are ochi</motion.h1> 
     </div>
    </div>
  )
}

export default Marque