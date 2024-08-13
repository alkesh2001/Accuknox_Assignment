import React from 'react'
import { X } from "lucide-react"
import { useDispatch, useSelector } from 'react-redux'
import { removeWidgetFromCategory } from '../store/auth'
 function Card({widgetitems , categoryId}) {

    const dispatch = useDispatch()

    console.log(widgetitems.id , categoryId)

    const handleremove = () =>{
      dispatch(removeWidgetFromCategory({categoryId, widgetId : widgetitems.id })) 
      console.log(categoryId , widgetitems.id ,"remove")
    }

  return (
    <div className='h-[280px] w-[330px] sm:w-[500px] flex justify-between rounded-xl bg-white'>
      <div>
        <div className='py-3 px-6 font-medium'>
           {widgetitems.title}
        </div>
        <div className='px-6'>
            {widgetitems.content}
        </div>
      </div>
      <div>
        <div className='flex  px-5 pt-5' onClick={handleremove}><X/></div>
      </div>
    </div>
  )
}

export default Card
