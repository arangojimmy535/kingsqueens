import React from 'react'
import { ProductsList } from '../components/Home/ProductsList'
import { Categories } from '../components/Home/Categories'
import { Carrousel } from '../components/Home/Carousel'
import { mainSlider } from '../context/imgslider'

export default function Home () {
  return (
    <div>

      <div className='w-full md:mt-7 sm:mt-4'>
        <Carrousel
          images={mainSlider}
          measures={window.screen.width < 767
            ? { width: '95%', height: '400px' }
            : { width: '95%', height: '500px' }}
        />
      </div>
      <div className=' mx-auto sm:hidden'>
        <img className='rounded' src='../src/static/seccion-envioseguro.png' alt='seccion-envioseguro' />
      </div>
      <div className='max-w-full mx-auto mt-3'>
        <Categories />
      </div>
      <div className='mt-6 max-w-full'>
        <h2 className='sm:text-4xl md:text-5xl text-6xl mt-2 sm:pt-2 text-center font-semibold text-orange-300 border-orange-300 border-2 rounded-3xl max-w-fit px-5 mx-auto pb-2.5'>
          Productos Nuevos
        </h2>
        <ProductsList />
      </div>
    </div>
  )
}
