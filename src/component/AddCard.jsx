import React, { useState } from 'react'
import { Plus  , X} from 'lucide-react'
import { useDispatch } from 'react-redux'
import {addWidgetToCategory} from '../store/auth'

function AddCard({categoryId}) {
  
    const [show ,setShow] = useState(true)
    const [title , setTitle] = useState('')
    const [content , setContent] = useState('')

    const ShowAddwidget = () => {
         setShow(prev => !prev)
    }   
    const dispatch = useDispatch()

  const addwidget =(e)=>{
    e.preventDefault()
    dispatch(addWidgetToCategory( {categoryId , title , content} ))
    setContent('')
    setTitle('')
    setShow(!show)
  }

  return (
    <div className='h-[280px] w-[330px] sm:w-[500px] flex justify-center items-center rounded-xl bg-white'>
        <div className={`${show ? 'show' : 'hidden' }`}>
            <div className={`border-gray-500 flex border rounded-lg items-center px-1 sm:px-2 py-1 text-sm`}>
                <button className='' onClick={ShowAddwidget}>Add widget</button> 
                <span><Plus color="#7e8286" strokeWidth={3} height={16} /></span>
            </div>
        </div>
        <div className={` ${show? "hidden" : ""} w-full`}>
            <form action=" " onSubmit={addwidget}>
                <div className='h-full w-full'>
                <div className='flex justify-end px-5 py-3 w-full h-full' onClick={ShowAddwidget}><X/></div>
                    <div className='px-5 pb-3 text-md font-medium w-full'>
                        <input
                        onChange={(e)=>setTitle(e.target.value)}
                        type="text" placeholder='Title' className='border border-gray-400 w-full h-10 rounded-lg px-4'/>
                    </div> 
                    <div className='text-sm font-medium px-5'>
                        <textarea 
                            onChange={(e)=>setContent(e.target.value)}
                        type="text" className='border border-gray-400 font-medium text-md w-full h-[100px] rounded-lg p-4' />
                    </div>
                    <div className='flex justify-end items-center pt-4 px-5'>
                        <button type='onsubmit' className='bg-black text-white font-medium text-sm px-3 py-2 rounded-md'>
                        Add Widget
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default AddCard
