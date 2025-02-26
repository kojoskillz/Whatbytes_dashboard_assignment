import React from 'react'
import Image from 'next/image'
import img from '../Dashboard/PSX_20230627_105125.jpg'

const sidebar = () => {
  return (
    <div>
        {/* main sidebar content */}
            <div  className='overflow-y-hidden sticky top-4 h-[calc(100vh-32px-48px) ] '>
                  <div className='flex gap-2'>
                  <Image src={img} alt="" className='w-10 h-10 object-fit rounded-full' />
                        <h1 className='text-black text-[18px]  font-bold'>
                           Kwadwo Nyarko
                        </h1>
                  </div>
                 
            </div>
            {/* toggle */}
            <div className='grid gap-4 font-semibold font-[17px] mt-16 text-left'>
                  <button className='hover:text-blue-300 cursor-pointer  text-left'>
                      Dashboard
                  </button>
                  <button className='hover:text-blue-300 cursor-pointer  text-left'>
                       Skill set
                  </button>
                  <button className='hover:text-blue-300 cursor-pointer  text-left'>
                     Internship
                  </button>
            </div>

    </div>
  )
}

export default sidebar
