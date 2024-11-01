import React from 'react'

/**
 * A section that displays the categories of properties on the website.
 *
 * This component displays a section with a heading, a horizontal line, a
 * paragraph, and a grid of four property categories. Each category is
 * represented by an image and a heading.
 *
 * @returns {React.ReactElement} A section element that displays the categories.
 */
const CategoriesWrapper = () => {
  return (
    <div className='w-full p-16 flex flex-col items-center justify-center bg-teal-900 space-y-6'>
        <h1 className='text-3xl font-bold text-amber-200'>عقاراتنا</h1>
        
        <hr className='w-1/2 border-white'></hr>

        <p className='text-amber-200'>بيع وايجار</p>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10'>
            <div className='group relative'>
                <img className='rounded-2xl h-64 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all' src="houses_category_image.png" alt="houses category image" />
                <p className='text-xl font-semibold absolute top-4 right-4 group-hover:scale-105 transition-all'>شقق</p>
            </div>
            <div className='relative'>
                <img className='rounded-2xl h-64' src="offices_category_image.png" alt="offices category image" />
                <p className='text-xl font-semibold absolute top-4 right-4'>مكاتب</p>
            </div>
            <div className='relative'>
                <img className='rounded-2xl h-64' src="villas_category_image.png" alt="villas category image" />
                <p className='text-xl font-semibold absolute top-4 right-4'>فيلات</p>
            </div>
            <div className='relative'>
                <img className='rounded-2xl h-64' src="shaleh_category_image.png" alt="shalehs category image" />
                <p className='text-xl font-semibold absolute top-4 right-4'>شاليهات</p>
            </div>
        </div>
    </div>
  )
}

export default CategoriesWrapper