import { useAppContext } from '../../context/Products/AppContext'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export function ProductDescription () {
  const { getProduct, product } = useAppContext()
  const { idProduct } = useParams()
  useEffect(() => { getProduct(idProduct) }, [])
  const [quantity, setQuantity] = useState(1)
  return (
    <div
      className='sm:mt-5 md:mt-10 mx-auto w-11/12 fle bg-opacity-30 backdrop-blur-sm'
    >
      <div
        className='mx-auto relative w-full sm:flex sm:flex-col grid grid-cols-2'
      >
        <img className='md:rounded-3xl object-center w-full min-h-full  sm:rounded-t-xl' src={product.images} alt={product.title} />
        <div>
          <div className='w-10/12 ml-4'>
            <h3 className='md:mt-10 sm:text-2xl text-4xl font-bold sm:mb-2 mb-4'>{product.title}</h3>
            <h4 className='sm:text-2xl text-3xl font-semibold'>${product.price}</h4>
            <p className='mt-4 text-xl'>{product.description}</p>
            <div className='flex flex-row'>
              <button onClick={() => { if (quantity > 1) setQuantity(quantity - 1) }}>-</button>
              <p>
                {quantity}
              </p>
              <button onClick={() => { setQuantity(quantity + 1) }}>+</button>
            </div>
            <button className='text-center text-2xl font-semibold bg-orange-100 hover:text-white hover:bg-orange-200 rounded-xl md:p-1 sm:mx-4 sm:my-2 md:mx-12 md:my-4 '>
              Añadir al Carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
