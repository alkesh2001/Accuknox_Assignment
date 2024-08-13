import { useSelector } from 'react-redux'
import './App.css'
import AddScetion from './component/AddScetion'
import CataCard from './component/CataCard'
import Navbar from './component/Navbar'
import { useEffect, useState } from 'react'
import AddSide from './component/AddSide'
// import { addWidgetToCategory } from './store/auth'

function App() {

  const userData = useSelector(state => state.categories.categories)
  const [items , setItems] = useState()

  useEffect(()=>{
    setItems(userData)
  },[userData])

  const [show , setShow] = useState(false)
  
  const handleShowAside = () =>{
    setShow(showprev => !showprev)
  }

  return (
    <div className='bg-gray-200 h-full pb-10 w-full relative'>
      <Navbar/>
      <AddScetion handleShowAside={handleShowAside}/>
      <div className='overflow-x-auto'>
        {items && items.map((items ) => (
            <CataCard items={items} key={items.id}/>
        ))}
      </div>
      <div className={`${show ? "" :"hidden"} absolute  top-0 right-0 h-full w-full sm:w-[600px]`}> 
          <AddSide show={show} handleShowAside={handleShowAside}/>
      </div>
    </div>
  )
}

export default App
