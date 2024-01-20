import { useAppContext } from '../../context/Products/AppContext'
import { motion } from 'framer-motion'

export function Categories () {
  const { categorias } = useAppContext()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ delay: 0.4, duration: 1.5 }}
      animate={{ opacity: 1 }}
      className='grid sm:grid-cols-2 sm:gap-3 md:grid-flow-col-dense sm:mx-4 max-w-full md:mx-20 md:gap-10'
    >
      {categorias.map((categoria) => (
        <motion.div
          whileHover={{
            scale: 1.2,
            boxShadow:
              'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
            transition: { duration: 0.5 }
          }}
          whileTap={{ scale: 0.9 }}
          className='sm:flex sm:flex-col sm:justify-center md:flex md:items-center md:justify-center bg-orange-100 rounded-full'
          key={categoria.id}
        >
          <motion.img
            initial={{ opacity: 0 }}
            transition={{ delay: 1, duration: 1.5 }}
            animate={{ opacity: 1 }}
            src={categoria.imagen}
            alt=''
            className='sm:mx-auto sm:w-14 sm:h-14 md:w-16 md:h-16'
          />
          <motion.h2
            initial={{ opacity: 0 }}
            transition={{ delay: 0.7, duration: 1.5 }}
            animate={{ opacity: 1 }} className='sm:mx-auto'
          >{categoria.nombre}
          </motion.h2>
        </motion.div>
      ))}
    </motion.div>
  )
}
