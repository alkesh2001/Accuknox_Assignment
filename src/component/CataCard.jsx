import React from 'react'
import Card from './Card'
import AddCard from './AddCard'
import { useSelector } from 'react-redux'
function CataCard({items}) {

  return (
        <div className='text-md font-medium overflow-x-scroll py-3'>
            <div className='px-6 py-3'>{items.name}</div>
            <div className='flex flex-nowrap overflow-x-scroll gap-3 px-5 ' style={{width : "fit-content"}}>
                {items.widget.map((widgetitems , index)=>(<Card key={index} categoryId={items.id} widgetitems={widgetitems}/>))}
            <AddCard categoryId={items.id}/>
        </div>
    </div>
  ) 
}

export default CataCard
