import { useAppContext } from '../../context/Products/AppContext'
import { AnimatePresence, motion } from 'framer-motion'

export function Cart () {
  const { showCart, setShowCart, productsCart } = useAppContext()
  return (
    <AnimatePresence>
      {showCart && (
        <motion.div
          initial={{ x: '150%' }}
          animate={{ x: '0' }}
          exit={{ x: '150%' }}
          transition={{ duration: 0.8 }}
          className='w-full h-screen fixed top-0 right-0 flex justify-end backdrop-blur-sm z-50 overflow-hidden'
          onClick={() => { setShowCart(showCart) }}
        >
          <div className='relative bg-gray-200 sm:w-3/4 w-2/4 min-h-screen rounded-3xl flex flex-col z-30 overflow-y-scroll'>
            <span onClick={() => { setShowCart(showCart) }} className='fixed top-4 rigth-4 font-bold text-2xl cursor-pointer'>X</span>
            <h3 className='text-4xl font-bold text-center mt-5'>Carrito</h3>
            <h4 className='text-2xl font-semibold text-center'>{productsCart.length === 0 ? 'No hay ningun producto en tu carrito' : 'Productos que agregaste al carrito'}</h4>
            {
              productsCart && (productsCart.map(productCart => (
                <div key={productCart.id}>
                  <div className='flex sm:flex-col flex-row w-11/12 mx-auto shadow-xl rounded-3xl my-5 '>
                    <div>
                      <img className='sm:rounded-t-3xl md:rounded-l-3xl w-full h-full' src={productCart.images[0]} alt={productCart.title} />
                    </div>
                    <div className='flex flex-col content-center justify-center px-5'>
                      <h4 className='md:text-2xl font-bold'>{productCart.title}</h4>
                      <p className='mt-2'>{productCart.description}</p>
                      <div className='flex flex-row gap-7 mt-4'>
                        <div className='flex flex-row gap-3'>
                          <p className='font-bold'>Cantidad  1</p>
                        </div>
                        <div className=''>
                          <p className='font-bold'>Valor Unidad ${productCart.price}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )))
            }
            <button className='bg-red-100 font-bold hover:text-white hover:bg-red-200 rounded-full w-3/4 mx-auto py-1'>Completar Compra</button>
          </div>

        </motion.div>)}
    </AnimatePresence>
  )
}
