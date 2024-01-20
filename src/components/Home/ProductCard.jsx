import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function ProductCard ({ product }) {
  const resumeDescripcion = (descripcion) => {
    return descripcion.substring(0, 40).concat('...')
  }
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.95 }}
      className=' rounded-xl bg-slate-50 shadow-2xl min-h-min grid grid-flow-row'
    >
      <img
        className='object-cover rounded-t-xl overflow-hidden max-w-full'
        src={product.images[0]}
      />
      <div
        className='flex flex-col justify-center'
      >
        <p className='sm:text-sm md:text-xl text-center'>
          {product.category.name}
        </p>
        <Link
          to={'/product/' + product.id}
          className='sm:text-sm md:text-3xl font-bold text-center'
        >
          {product.title}
        </Link>
        <p className='sm:text-sm md:text-xl text-center opacity-60'>
          {resumeDescripcion(product.description)}
        </p>
        <p className='md:text-4xl font-semibold text-center'>${product.price}</p>
        <Link
          to={'/product/' + product.id}
          className='text-center font-semibold bg-orange-100 hover:text-white hover:bg-orange-200 rounded-xl md:p-1 sm:mx-4 sm:my-2 md:mx-8 md:my-2 '
        >
          Ver Produto
        </Link>
      </div>
    </motion.div>
  )
}

export default ProductCard
