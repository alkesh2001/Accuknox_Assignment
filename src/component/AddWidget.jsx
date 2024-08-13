import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addWidget } from '../store/auth'
import {X} from "lucide-react"
function AddWidget() {
   
  const [title , setTitle] = useState('')
  const [content , setContent] = useState('')
  const dispatch = useDispatch()

  const addwidget =(e)=>{
    e.preventDefault()
    
    dispatch(addWidget(title,content))
  }

  return (
    <form action="" onSubmit={addwidget}>
        <div className='h-[330px] w-[500px]'>
          <div className='h-full w-full border border-black rounded-xl bg-gray-200'>
          <div className='flex justify-end px-5 py-3'><X/></div>
              <div className='px-5 pb-3 text-md font-medium'>
                  <input
                   onChange={(e)=>setTitle(e.target.value)}
                  type="text" placeholder='Title' className='border border-gray-400 w-full h-10 rounded-lg px-4'/>
              </div> 
              <div className='text-sm font-medium px-5'>
                  <textarea 
                    onChange={(e)=>setContent(e.target.value)}
                  type="text" className='border border-gray-400 font-medium text-md w-full h-[150px] rounded-lg p-4' />
              </div>
              <div className='flex justify-end items-center pt-4 px-5'>
                <button type='onsubmit' className='bg-black text-white font-medium text-sm px-3 py-2 rounded-md'>
                  Add Widget
                </button>
              </div>
          </div>
        </div>
    </form>
  )
}

export default AddWidget
