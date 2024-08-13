import React from 'react'
import {Plus , RefreshCcw , EllipsisVertical , Clock} from 'lucide-react'

function AddScetion({handleShowAside}) {


  return (
    <div className='w-full'>
       <div className='flex py-8 px-3 sm:px-10 justify-between'>
          <div className='text-lg font-semibold'>CNAPP Dashboard</div>
          <div className='flex gap-2'>
            <div onClick={()=>handleShowAside()} className='border-gray-500 flex border rounded-lg items-center px-1 sm:px-2 py-1 text-sm'>
              <button className='hidden sm:block' >Add widget</button> 
              <span><Plus color="#7e8286" strokeWidth={3} height={16} /></span>
            </div>
            <div className='h-8 flex justify-center rounded-lg items-center w-7 border border-gray-500'><RefreshCcw color="#7e8286" strokeWidth={1.75} height={14} /></div>
            <div className='h-8 flex justify-center rounded-lg items-center w-7 border border-gray-500'><EllipsisVertical color="#7e8286" strokeWidth={1.75} height={16}/></div>
            <div className='flex border items-center px-1 sm:px-3 border-blue-500  rounded-lg'>
                {/* <div className='text-sm sm:px-3 px-1 py-2 '> */}
                  <div ><Clock height={16}/></div>
                  <div className='hidden sm:block'> last 2 day</div> 
                {/* </div> */}
            </div>
          </div>
       </div>
    </div>
  )
}

export default AddScetion
