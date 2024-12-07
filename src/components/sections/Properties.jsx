import React from 'react'
import PropertyListView from '../PropertyListView'

const Properties = () => {
  return (
    <div className='w-full p-12 flex flex-col items-center justify-center gap-6'>
        <h1 className='text-3xl font-semibold'>أحدث المشاريع</h1>
        <p className='text-slate-500'>Lorem ipsum dolor sit amet.</p>

        <PropertyListView/>
    </div>
  )
}

export default Properties