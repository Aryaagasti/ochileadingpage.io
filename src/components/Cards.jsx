import React from 'react'

const Cards = () => {
    return (
        <div className='w-full h-screen bg-zinc-900 flex px-32 items-center gap-5 '>
            <div className='cardcontainer h-[50vh] w-1/2'>
                <div className='relative card w-full rounded-xl h-full bg-[#004D43] flex items-center justify-center'>
                    <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                    <button className='absolute left-10 bottom-10 px-5 py-1 border-2 rounded-full'>&copy;2019-2022</button>
                </div>
            </div>
            <div className='cardcontainer flex gap-5 w-1/2 h-[50vh]'>
                <div className='relative card w-1/2 rounded-xl h-full bg-[#212121] flex items-center justify-center'>
                    <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                    <button className='absolute left-10 bottom-10 px-5 py-1 border-2 rounded-full uppercase leading-none tracking-tight'>rating 5.0 on clutch</button>
                </div>
                <div className='relative card w-1/2 rounded-xl h-full bg-[#212121] flex items-center justify-center'>
                    <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                    <button className='absolute left-10 bottom-10 px-5 py-1 border-2 rounded-full uppercase leading-none tracking-tight'>business bootcamp alumni</button>
                </div>
            </div>
        </div>
    )
}

export default Cards