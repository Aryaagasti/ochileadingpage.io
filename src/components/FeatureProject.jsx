import { motion } from 'framer-motion'
import { Power4 } from 'gsap/all'
import React, { useState } from 'react'

const FeatureProject = () => {

    const[ishovering , setIshovering]=useState(false)

    motion
   
    return (
        <div className='w-full py-20'>
            <div className='w-full px-20 flex border-b-[1px] border-zinc-800 pb-20'>
                <h1 className='text-8xl font-["Font_Montreal"] tracking-tight'>Featured projects</h1>
            </div>
            <div>
                <div className='cards w-full flex gap-10 mt-10  '>

                    <div onMouseEnter={()=>setIshovering(true)} onMouseLeave={()=>setIshovering(false)}className='relative cardcontainer  rounded-xl w-1/2 h-[70vh]  '>
                        <h1 className='absolute flex overflow-hidden text-[#CDEA68] left-full -transalte-x-1/2 top-1/2 -translate-y-1/2 '>
                            <h1 className='absolute  text-[#CDEA68] right-full translate-x-1/2 top-1/2 -translate-y-1/2  z-[9]  leading-none tracking-tighter text-8xl "]'>
                                {"FYDE".split('').map((item, index) => <motion.span initial={{y: "100%"}} animate={ishovering ? ({y: "0"}) : ({y: "100%"}) } transition={{ease: Power4.easeInOut , delay: index*.06}} className='inline-block '>{item}</motion.span>)}
                            </h1>
                        </h1>
                        <div className='card w-full h-full  hover:scale-90'>
                            <img className='w-full h-full bg-cover overflow-hidden' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
                        </div>
                    </div>
                    <div className='relative cardcontainer  rounded-xl w-1/2 h-[70vh] '>
                        <h1 className='absolute flex overflow-hidden text-[#CDEA68] right-full translate-x-1/2 top-1/2 -translate-y-1/2  z-[9]  leading-none tracking-tighter text-8xl "]'>
                            {"FYDE".split('').map((item, index) => <span className='inline-block transalte-y-full'>{item}</span>)}
                        </h1>
                        <div className=' card w-full h-full hover:scale-90'>
                            <img className='w-full h-full bg-cover overflow-hidden' src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg" alt="" />
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default FeatureProject