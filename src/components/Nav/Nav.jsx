import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Search } from './Search'
import { useAppContext } from '../../context/Products/AppContext'
import { Link } from 'react-router-dom'

export function Nav () {
  const { showLogin, register, setShowLogin, changeViewLogin, setShowCart, showCart } = useAppContext()
  const [username, setUsername] = useState()
  useEffect(() => setUsername(window.localStorage.getItem('username')), [window.localStorage.getItem('username')])

  return (
    <div className='sticky top-0 z-50 bg-slate-50 sm:flex sm:justify-around sm:items-center md:grid md:grid-flow-col md:grid-auto-columns md:gap-24 md:place-items-center md:place-content-center shadow-lg sm:pr-10 sm:pl-4 h-20'>
      <div className='flex flex-row gap-5 items-center mx-2'>
        <img className='sm:hidden w-14 h-14 rounded-full' src='../src/static/logo.png' alt='' />
        <Link to='/' className='md:hidden'>
          <img className=' w-14 h-14 rounded-full' src='../src/static/logo.png' alt='' />
        </Link>
        <Link to='/' className='sm:hidden sm:text-lg text-2xl font-sans font-semibold'>Kings & Queens</Link>
      </div>
      <div className='md:w-96'>
        <Search />
      </div>
      <motion.div className='sm:hidden'>
        <ul className='flex flex-row'>
          <li>
            {username
              ? <p className='font-semibold uppercase hover:text-orange-300 cursor-pointer'>{username}</p>
              : <button onClick={() => setShowLogin(showLogin)} className='font-semibold hover:text-orange-300'>Iniciar sesión</button>}
          </li>
          <span className='font-semibold px-2'>/</span>
          <li>
            {username
              ? <button onClick={() => { window.localStorage.removeItem('username'); setUsername('') }} className='font-semibold hover:text-orange-300'>Cerrar Sesión </button>
              : <button onClick={() => { setShowLogin(showLogin); changeViewLogin(register) }} className='font-semibold hover:text-orange-300'>Registrarse</button>}
          </li>
        </ul>
      </motion.div>

      <div className='flex flex-row'>

        <img
          onClick={() => setShowLogin(showLogin)}
          src='../src/static/user.png'
          alt=''
          className='object-cover md:hidden sm:mr-5 sm:h-8 sm:w-8'
        />

        <img
          onClick={() => setShowCart(showCart)}
          src='../src/static/cart.png'
          alt=''
          className='object-cover h-10 w-10 sm:h-8 sm:w-8 cursor-pointer'
        />

      </div>
      <br />
      <div className='sm:hidden md:hidden flex flex-row gap-4 w-11/12 mx-auto'>
        <div className=' w-4/5'>
          <Search />
        </div>
        {/* <div className=''>
            <button className='bg-orange-100 rounded-full min-w-full py-1'>Tienda</button>
          </div> */}
      </div>
    </div>
  )
}
