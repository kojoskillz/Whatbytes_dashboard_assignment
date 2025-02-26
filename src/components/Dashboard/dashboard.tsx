"use client"

import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import Image from 'next/image';
import img1 from '../assets/html-5.png';
import img2 from '../assets/trophy-award.png';
import img3 from '../assets/check.png';
import img4 from '../assets/clipboard.png';



const dashboard = () => {
  return (
    <div>

{/* first container */}
    <div className='bg-white font-semibold rounded-lg pb-5 shadow- h-[200vh]'>
     <div className='m-5 text-gray-500'>
        <h1>
          Skill Test
        </h1>
     </div>


    <div  className='m-5 border-2 rounded-md p-6 gap-5 w-[632px] border-gray-500/5 flex ' >
             <Image src={img1} alt="" className='w-20 h-16 object-fit' />
          <div>
            <h1 className='text-bold '>
              Hyper Text Markup Language
            </h1>
            <p className='text-gray-500'>
              Questions: 08 I Duration: 15 mins I Submitted on 5 June 2021
            </p>
      
          </div>


    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className='bg-blue-900 text-white hover:bg-blue-800 hover:text-white'>Update</Button>
      </PopoverTrigger>
      <PopoverContent className="w-[520px] h-[280px]">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Update scores</h4>
            {/* <p className="text-sm text-muted-foreground">
              
            </p> */}
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="width">Update your <span className='font-bold'>Rank </span></Label>
              <Input
                id="width"
                defaultValue="100%"
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="width">Update your <span className='font-bold'>Percentile </span></Label>
              <Input
                id="maxWidth"
                defaultValue="300px"
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="width">Update your <span className='font-bold'>Current Score(Out of 15)</span></Label>
              <Input
                id="height"
                defaultValue="25px"
                className="col-span-2 h-8"
              />
            </div>

          </div>

    {/* button */}
    <div className='flex gap-4'>
      <button className='rounded-md p-2 border-blue-900 border-[1px] w-[65px] '>
            cancel
      </button>
      <button className='rounded-md p-2 bg-blue-900 text-white hover:bg-blue-800 hover:text-white w-[95px]'>
            save
      </button>
    </div>

        </div>
      </PopoverContent>
    </Popover>


    </div>
    {/* second container */}
        <div className='m-5 border-2 rounded-md p-6 gap-5 w-[632px] border-gray-500/5 '>
          <h1 className='font-bold '>
             Quick Statistics
          </h1>

{/* containers */}
<div className='flex m-4'>


           <div className='flex m-4'>
              <Image 
              src={img2}
              className='w-[36px] h-[36px] bg-gray-100/30 rounded-full p-2 object-fit'
              alt='trophy'
              />
              <div className='grid'>
                <h1 className='font-bold'>
                  1
                </h1>
                <p className='text-gray-300'>
                  YOUR RANK
                </p>
              </div>
           </div>
           <div className='flex m-4'>
              <Image 
              src={img4}
              className='w-[36px] h-[36px] bg-gray-100/30 rounded-full p-2 object-fit'
              alt='trophy'
              />
              <div className='grid'>
                <h1 className='font-bold'>
                  30%
                </h1>
                <p className='text-gray-300'>
                  PERCENTILE
                </p>
              </div>
           </div>
           <div className='flex m-4'>
              <Image 
              src={img3}
              className='w-[36px] h-[36px] bg-gray-100/30 rounded-full p-2 object-fit'
              alt='trophy'
              />
              <div className='grid'>
                <h1 className='font-bold'>
                  10/15
                </h1>
                <p className='text-gray-300'>
                  CORRECT ANSWERS
                </p>
              </div>
           </div>


        </div>
        </div>

        {/* section2 */}
        <div className='m-5 border-2 rounded-md p-6 gap-5 w-[632px] border-gray-500/5 '>
            <h1 className='font-bold'>
                Syllabus Wise Analysis
            </h1>

            {/* container */}
            
<div className="">

  <div className="body">
    <div className="skill">
      <div className="skill-name">HTML Tools, Forms, History</div>
      <div className="skill-level">
        <div className="skill-percent" style={{width: '90%'}}></div>
      </div>
      <div className="skill-percent-number">90%</div>
    </div>
    <div className="skill">
      <div className="skill-name">Tags & References in HTML</div>
      <div className="skill-level">
        <div className="skill-percent" style={{width: '0%'}}></div>
      </div>
      <div className="skill-percent-number">80%</div>
    </div>
    <div className="skill">
      <div className="skill-name">Tables & References in HTML</div>
      <div className="skill-level">
        <div className="skill-percent" style={{width: '75%'}}></div>
      </div>
      <div className="skill-percent-number">75%</div>
    </div>
    <div className="skill">
      <div className="skill-name">Tables & CSS Basics</div>
      <div className="skill-level">
        <div className="skill-percent" style={{width: '75%'}}></div>
      </div>
      <div className="skill-percent-number">75%</div>
    </div>
  </div>
</div>

            

        </div>
    </div>




{/* ends */}
    </div>
  )
}

export default dashboard
