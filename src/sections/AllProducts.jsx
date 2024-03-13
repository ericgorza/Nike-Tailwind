import React from 'react'
import PopularProductCard from '../components/PopularProductCard'
import { allproducts } from '../constants'

const AllProducts = () => {
  return (
    <section className='padding flex lg:flex-col max-lg:flex-col gap-10 w-full max-container mt-10'>
      <div className='flex flex-col items-center justify-center gap-5 mt-20'>
        <h2 className='text-4xl font-palanquin font-bold'>
          <span className='text-coral-red'>All</span> Products
        </h2>
        <p className='lg:max-w-[45rem] mt-10 font-montserrat text-slate-gray'>
            Explore our extensive range of cutting-edge athletic gear designed to elevate your performance and style. From iconic footwear to innovative apparel and accessories, Nike offers everything you need to excel in your sport and express your individuality. Discover the latest trends, technologies, and designs crafted with passion and expertise to help you unleash your full potential.</p>
      </div>

      <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap:14'>
        {allproducts.map((product) => (
            <div className='transition duration-200 transform hover:scale-105 hover:cursor-pointer'>
                <PopularProductCard key={product.name}
                {...product}/>
            </div>
        ))}
      </div>
    </section>
  )
}

export default AllProducts;