import React from 'react'
import Crousel from '../components/Crouser'
const WorksPage = () => {
  return (
    <div className=' flex flex-col px-6  bg-slate-100 pt-16'>
        <span className='text-3xl font-extrabold  text-fuchsia-600 py-6'>Works</span>
        <Crousel/>
    </div>
  )
}

export default WorksPage