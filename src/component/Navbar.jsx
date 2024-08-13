import React from 'react'
import {ChevronRight , Search , ChevronDown , BellRing , UserRound} from "lucide-react"

function Navbar() {
  return (
    <div className='h-12  w-full bg-white flex items-center justify-between'>
        <div className='text-md font-medium px-4 sm:px-8 flex'>
            <div className='hidden sm:block'>home</div> <span className='ps-1 flex text-blue-500'><ChevronRight color="#7e8286" />Dashboard</span>
        </div>
        <div className='flex gap-2 sm:gap-5 px-6 '>
            <div>
                <div className='flex  h-7 bg-gray-200 rounded-md items-center px-1'>
                    <Search color="#7e8286" strokeWidth={1.75} height={'20px'} />
                    <input type="text" className='bg-gray-200 px-2 hidden sm:block h-full sm:w-[150px] md:w-[300px] outline-none '/>
                </div>
            </div>
            <div className='flex items-center lg:gap-8 md:gap-5 gap-1'>
                <div> <ChevronDown className='hidden sm:block' color="#7e8286" /></div>
                <div><BellRing color="#7e8286" strokeWidth={1.75} /></div>
                <div className='flex items-center sm:gap-2 font-medium text-sm'><UserRound color="#7e8286" strokeWidth={1.75} />Accuknox</div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
