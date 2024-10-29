import React from 'react'

/*************  ✨ Codeium Command ⭐  *************/
/**
 * A section that displays the categories of properties on the website.
 *
 * This component displays a section with a heading, a horizontal line, a
 * paragraph, and a grid of four property categories. Each category is
 * represented by an image and a heading.
 *
 * @returns {React.ReactElement} A section element that displays the categories.
 */
/******  157965f1-da72-4c5d-8874-644d1453f637  *******/
const CategoriesWrapper = () => {
  return (
    <div className='w-full p-16 flex flex-col items-center justify-center bg-gray-100 space-y-6'>
        <h1 className='text-3xl font-bold'>عقاراتنا</h1>
        
        <hr className='w-1/2 border-black'></hr>

        <p>بيع وايجار</p>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10'>
            <div className='relative'>
                <img className='rounded-2xl h-64' src="houses_category_image.png" alt="houses category image" />
                <p className='text-xl font-semibold absolute top-4 right-4'>شقق</p>
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