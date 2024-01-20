import { useEffect } from 'react'
import { useAppContext } from '../../context/Products/AppContext'
import ProductCard from './ProductCard'
export function ProductsList () {
  const { products, getProducts } = useAppContext()
  console.log(products)
  useEffect(() => {
    getProducts()
  }, [])
  return (
    <div className='grid sm:mx-4 md:grid-cols-4 grid-cols-5 md:gap-6 md:mx-20 sm:grid-cols-2 sm:gap-2 mt-4'>
      {
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
}
    </div>
  )
}
