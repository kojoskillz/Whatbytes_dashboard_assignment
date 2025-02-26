"use client"


import { ChartBar, TrendingUp } from "lucide-react"
import { Area,Label, Pie, PieChart, Sector, AreaChart, CartesianGrid, XAxis } from "recharts"
import { PieSectorDataItem } from "recharts/types/polar/Pie"
import {
  Card,
  CardContent,
  CardDescription,
  // CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { month: "0", desktop: 186, mobile: 80 },
  { month: "10", desktop: 305, mobile: 200 },
  { month: "15", desktop: 237, mobile: 120 },
  { month: "20", desktop: 73, mobile: 190 },
  { month: "25", desktop: 209, mobile: 130 },
  { month: "30", desktop: 214, mobile: 140 },
]

 const chartDatax = [
  { browser: "HTML", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "Css", visitors: 200, fill: "var(--color-safari)" },
  { browser: "Javascript", visitors: 187, fill: "var(--color-firefox)" },
  { browser: "Reactjs", visitors: 173, fill: "var(--color-edge)" },
  { browser: "Nextjs", visitors: 90, fill: "var(--color-other)" },
]

const chartConfigx = {
  visitors: {
    label: "Visitors",
  },
  Chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig










const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Students",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig


import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
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

// import Chart from "chart.js";


const dashboard = () => {
  return (
    <div className=''>

{/* first container */}
    <div className='bg-white font-semibold rounded-lg pb-5 shadow h-[120vh] '>
     <div className='m-5 text-gray-500'>
        <h1>
          Skill Test
        </h1>
     </div>

<div className='grid grid-cols-2 gap-4 md:grid sm:grid '>

    <div  className='m-5 border-2 rounded-md p-6 gap-5 w-[632px] h-[130px] border-gray-500/5 flex ' >
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
           
    <div className="">

<div className="body">
<div className='m-5 border-2 mt-[-1px] rounded-md p-6 gap-5 w-[550px] border-gray-500/5 '>
            <h1 className='font-bold   ml-10'>
                Syllabus Wise Analysis
            </h1>

            {/* container */}

  <div className="skill grid">
     <div className="skill-name text-gray-500 ml-5 mb-4">HTML Tools, Forms, History</div>
  </div>
  <div className='flex'>
    <div className="skill-level bg-blue-50">
      <div className="skill-percent rounded-full bg-blue-500" style={{width: '80%'}}></div>
    </div>
    <div className="skill-percent-number text-blue-500 mt-[-10px]">80%</div>
  </div>

  <div className="skill grid">
     <div className="skill-name text-gray-500 ml-5 mb-4">Tags & References in HTML</div>
  </div>
  <div className='flex'>
    <div className="skill-level bg-orange-50">
      <div className="skill-percent rounded-full bg-orange-500 " style={{width: '60%'}}></div>
    </div>
    <div className="skill-percent-number text-orange-500 mt-[-10px]">60%</div>
  </div>

  <div className="skill grid">
     <div className="skill-name text-gray-500 ml-5 mb-4">Tables & References in HTML</div>
  </div>
  <div className='flex'>
    <div className="skill-level bg-red-50">
      <div className="skill-percent rounded-full bg-red-500" style={{width: '24%'}}></div>
    </div>
    <div className="skill-percent-number text-red-500 mt-[-10px]">24%</div>
  </div>

  <div className="skill grid">
     <div className="skill-name text-gray-500 ml-5 mb-4">Tables & CSS Basics</div>
  </div>
  <div className='flex'>
    <div className="skill-level bg-green-50">
      <div className="skill-percent rounded-full bg-green-500 " style={{width: '96%'}}></div>
    </div>
    <div className="skill-percent-number text-green-500 mt-[-10px]">96%</div>
  </div>

  </div>
      
</div>

</div>
    {/* second container */}
        <div className='m-5 border-2 mt-[-18rem]  rounded-md p-6 gap-5 h-[152px] w-[632px] border-gray-500/5 '>
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

{/* chart container */}
<div >


{/* chart */}

    <div>
    {/* "use client"

import { TrendingUp } from "lucide-react"
import { Label, Pie, PieChart, Sector } from "recharts" */}





    <Card className="flex flex-col border-2 m-10 mt-[-2rem] rounded-md p-6 gap-5 w-[550px] h-[22rem] border-gray-500/5">
      <CardHeader className="items-center mt-[-2rem] pb-0">
        <CardTitle className="font-bold align-left ">Question Analysis</CardTitle>
        <p className=''>
         You scored 10 questions correct out of 15. However it still needs some improvements
        </p>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfigx}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartDatax}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={60}
              strokeWidth={5}
              activeIndex={0}
              activeShape={({
                outerRadius = 0,
                ...props
              }: PieSectorDataItem) => (
                <Sector {...props} outerRadius={outerRadius + 10} />
              )}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    
    </Card>


    </div> 

</div>


{/* chart container */}

{/* chart */}

    <div className="mt-[-30rem]  m-5" >
    <Card>
      <CardHeader>
        <CardTitle>Comparison Graph</CardTitle>
        <CardDescription>
            You scored 0% Percentile which is lower than the average percentile 72% off all the engineers who tok the assessment.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <Area
              dataKey="mobile"
              type="natural"
              fill="var(--color-mobile)"
              fillOpacity={0.4}
              stroke="var(--color-mobile)"
              stackId="a"
            />
            <Area
              dataKey="Students"
              type="natural"
              fill="var(--color-desktop)"
              fillOpacity={0.4}
              stroke="var(--color-desktop)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>

    </Card>
   </div> 


        </div>
    </div>


{/* ends */}
    </div>
  )
}

export default dashboard
