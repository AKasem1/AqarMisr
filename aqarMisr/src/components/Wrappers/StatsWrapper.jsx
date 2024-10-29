import React from 'react'

const StatsWrapper = () => {
  return (
    <div className='w-full p-16 bg-teal-900'>
        <div className='grid grid-cols-1 gap-6 place-items-center text-center md:grid-cols-3 md:gap-0'>
            <div>
                <h1 className='text-5xl text-amber-200 font-semibold'>+100</h1>
                <h2 className='text-4xl text-white'>عميل</h2>
            </div>
            <div>
                <h1 className='text-5xl text-amber-200 font-semibold'>+10</h1>
                <h2 className='text-4xl text-white'>سنوات خبرة</h2>
            </div>
            <div>
                <h1 className='text-5xl text-amber-200 font-semibold'>+100</h1>
                <h2 className='text-4xl text-white'>عقار</h2>
            </div>
        </div>
    </div>
  )
}

export default StatsWrapper