import React from 'react'
import {X} from "lucide-react"
import { useState } from 'react'
function AddSide({handleShowAside}) {

    const [slide , setSlide] = useState('0px')
    const [slidewidth , setslidewidth] = useState('40px')

    const handleSlide = (newslide , newslidewidth) =>{
        setSlide(newslide)
        setslidewidth(newslidewidth)
    }

    // console.log(show)

  return (
    <div className={`h-full show w-full sm:w-full bg-white border-l border-black`}>
        <div className='flex text-white bg-blue-500 py-3 justify-between items-center px-5'>
              <div className='text-md font-medium '>add widget</div>
            <div className='' onClick={()=> handleShowAside()}><X/></div>
        </div>
        <div className='px-5 py-4'>
            personalise your dashboard by adding the following widget
        </div>
        <div className='px-5 border-b border-black'>
            <div className='relative flex  pb-3 gap-5'>
                    <button className=' font-medium text-sm'  onClick={()=> handleSlide('0px' , "40px")}>
                            CSPM
                    </button>
                    <button className='font-medium text-sm'   onClick={()=> handleSlide('60px' , "40px")}>
                         CWPP
                    </button>
                    <button className='font-medium text-sm' onClick={()=> handleSlide('120px' , "48px")}>
                           Image
                    </button>
                    <button className='font-medium text-sm' onClick={()=> handleSlide('180px' , "48px")}>
                           TIcket
                    </button>
                    
                    <div className={`h-[2px] absolute top-[30px]  rounded-xl transition-all duration-200 bg-black `} style={{left : slide , width : slidewidth}}></div>
                </div> 
            </div>
    </div>
  )
}

export default AddSide
