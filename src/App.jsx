import { useSelector } from 'react-redux'
import './App.css'
import AddScetion from './component/AddScetion'
import CataCard from './component/CataCard'
import Navbar from './component/Navbar'
import { useEffect, useState } from 'react'
// import { addWidgetToCategory } from './store/auth'

function App() {

  const userData = useSelector(state => state.categories.categories)
  console.log(userData)
  const [items , setItems] = useState()

  useEffect(()=>{
    setItems(userData)
  },[userData])
  console.log(userData)

  return (
    <div className='bg-gray-200 h-full pb-10 w-full relative'>
      <Navbar/>
      <AddScetion/>
      <div className='overflow-x-auto'>
        {items && items.map((items ) => (
            <CataCard items={items} key={items.id}/>
        ))}
      </div>
    </div>
  )
}

export default App
