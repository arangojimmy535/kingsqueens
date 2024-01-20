import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function Carrousel ({ images, measures }) {
  const variants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0
      }
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0
      }
    }
  }
  const swipeConfidenceThreshold = 1000
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity
  }
  const [[page, direction], setPage] = useState([0, 0])
  const [imageIndex, setImageIndex] = useState(0)

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection])
    setImageIndex((page + newDirection) % 3)
  }

  return (
  // <motion.div
  //   className='flex gap-5 mx-auto snap-x snap-mandatory snap-always overflow-y-hidden cursor-pointer relative'
  //   style={
  //     measures
  //   }
  // >
  //   {images.map((image) => (
  //     <motion.img
  //       key={image.id} id={image.id} style={{ measures }} src={image.imagen} alt='' className='rounded-3xl min-w-full snap-start'
  //     />
  //   ))}

    // </motion.div>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className='relative flex justify-center items-center mx-auto'
      style={
        measures
      }
    >
      <AnimatePresence initial={false} custom={direction}>
        <a
          className='mx-auto'
          style={
            measures
          }
        >
          <motion.img
            key={page}
            className='rounded-3xl absolute object-cover mx-auto'
            style={
              measures
            }
            src={images[imageIndex]}
            custom={direction}
            variants={variants}
            initial='enter'
            animate='center'
            exit='exit'
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.8 }
            }}
            drag='x'
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x)

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1)
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1)
              }
            }}
          />
        </a>
      </AnimatePresence>
      <div className='absolute bottom-2 rounded-full px-2 z-10'>
        <span className='text-red-200'>{imageIndex === 0 ? '⬤' : '○'}</span>
        <span className='text-red-200'>{imageIndex === 1 ? '⬤' : '○'}</span>
        <span className='text-red-200'>{imageIndex === 2 ? '⬤' : '○'}</span>
      </div>
    </motion.div>
  )
}
