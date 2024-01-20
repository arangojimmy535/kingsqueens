import { useAppContext } from '../../context/Products/AppContext'
import { AnimatePresence, motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { useAuth } from '../../context/AuthContext'
export function InicioSesion () {
  const { showLogin, registering, setShowLogin, changeViewLogin } = useAppContext()
  const { error, typeError, onSubmit, loginGoogle } = useAuth()
  const { register, handleSubmit } = useForm()

  return (
    <AnimatePresence>
      {showLogin && (
        <motion.div
          initial={{ y: '-150%' }}
          animate={{ y: '0' }}
          exit={{ y: '-150%' }}
          transition={{ duration: 0.8 }}
          className='w-full min-h-screen fixed top-0 flex bg-orange-100 bg-opacity-30 backdrop-blur-sm z-50 overflow-y-hidden'
        >
          {error && (
            <motion.div
              initial={{ y: '-150%' }}
              animate={{ y: '0' }}
              exit={{ y: '-150%' }}
              className='absolute sm:top-12 md:top-20 w-full flex justify-center z-50'
            >
              <p className='text-center bg-orange-200 bg-opacity-60 w-fit px-5 py-3 rounded-xl'>
                {
                typeError === 'register'
                  ? 'ya estas registrado, por favor Inicie Sesion'
                  : typeError === 'noregister' ? 'El usuario no se encuentra,por favor Registrate' : 'Hubo un error'
                }
              </p>
            </motion.div>)}
          <div
            className='m-auto relative bg-gray-200 bg-opacity-80 w-5/6 h-5/6 rounded-3xl sm:flex sm:flex-col grid grid-cols-2 z-30'
          >
            <motion.img layout className={`${registering ? 'md:rounded-r-xl md:order-2' : 'rounded-l-xl'}  object-center w-full min-h-full sm:max-h-44 sm:rounded-t-xl`} src='../src/static/login.jpg' alt='login' />
            <motion.div layout className='flex flex-col content-center justify-center relative sm:py-2 py-5 '>
              <span onClick={() => { setShowLogin(showLogin); if (registering) changeViewLogin(registering) }} className={`${registering ? 'md:-right-full md:pr-5' : 'md:right-7'} absolute sm:right-7 sm:-top-40 sm:text-gray-50  top-4 font-bold text-2xl cursor-pointer`}>X</span>
              <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col content-center justify-center'>
                <h3 className='text-center sm:text-2xl text-4xl font-bold sm:mb-2 mb-4'>{registering ? 'Registrarse' : 'Inicio de Sesión'}</h3>
                <div className='flex flex-col mx-auto w-3/4'>
                  <label>Email</label>
                  <input {...register('email')} placeholder='Email' className='rounded-xl py-1 pl-2 focus:outline-none focus:border-orange-100 focus:ring-1 focus:ring-orange-100 mb-4 bg-gray-100 ' type='text' />
                </div>
                <div className='flex flex-col mx-auto w-3/4'>
                  <label>Contraseña</label>
                  <input {...register('clave')} placeholder='Contraseña' className='rounded-xl py-1 pl-2 focus:outline-none focus:border-orange-100 focus:ring-1 focus:ring-orange-100 bg-gray-100 ' type='password' />
                </div>
                <div className='mx-auto mt-4'>
                  <input value={registering ? 'Registrarse' : 'Iniciar Sesión'} className='rounded-xl text-xl font-bold bg-orange-200 opacity-80 max-w-fit px-4 my-2 cursor-pointer hover:bg-orange-300 hover:opacity-100' type='submit' />
                </div>
              </form>
              <hr className='w-3/4 mx-auto my-2 border-gray-500 ' />
              <p className='text-center'>o Ingresa con tu cuenta de:</p>
              <div className='flex flex-row gap-10 mx-auto mt-3'>
                <img className='w-12 h-12 cursor-pointer' src='../src/static/facebook-logo.png' alt='facebook-logo' />
                <img onClick={() => loginGoogle()} className='w-12 h-12 cursor-pointer' src='../src/static/google-logo.png' alt='google-logo' />
              </div>
              <hr className='w-3/4 mx-auto my-2 border-gray-500 ' />
              <button>Haga click para <span onClick={() => changeViewLogin(registering)} className='text-orange-300 font-bold'>{registering ? 'Iniciar Sesión' : 'Registrarse'}</span></button>
            </motion.div>
          </div>
        </motion.div>)}
    </AnimatePresence>
  )
}
