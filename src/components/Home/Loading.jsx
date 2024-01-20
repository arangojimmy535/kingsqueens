import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export function Loading () {
  const [loading, setLoading] = useState(true)
  setTimeout(() => setLoading(false), 1000)
  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className='fixed top-0 w-full h-full bg-orange-50 z-50 grid place-content-center'
          >
            <img className='sm:w-48 sm:h-48 w-96 h-96 rounded-full' src='../src/static/logo.png' alt='' />
          </motion.div>)}
      </AnimatePresence>
    </>
  )
}
