import { createContext, useState, useContext, useEffect } from 'react'
import { AppContext } from '../context/Products/AppContext'
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth'
import { auth } from '../firebase.js'

export const Authcontext = createContext()

export const useAuth = () => {
  const context = useContext(Authcontext)
  return context
}
export function AuthcontextProvider (props) {
  const { showLogin, registering, setShowLogin, changeViewLogin } = useContext(AppContext)
  const [error, setError] = useState(null)
  const [typeError, setTypeError] = useState(null)
  useEffect(() => {
    setError(false)
    setTypeError('')
    onAuthStateChanged(auth, user => { console.log(user.email) })
  }, [])
  const registerUser = async (data) => {
    const response = await fetch('http://localhost:3000/api/users/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    if (response.status === 200) {
      const data = await response.json()
      window.localStorage.setItem('username', data.usuario)
      setShowLogin(showLogin)
      if (registering) changeViewLogin(registering)
    } else if (response.status === 409) {
      setError(true)
      setTypeError('register')
      setTimeout(() => {
        changeViewLogin(registering)
        window.location.reload()
      }, 1000)
      setTimeout(() => {
        setError(false)
        setTypeError('')
      }, 3000)
    }
  }
  const loginUser = async (data) => {
    const { email, clave } = data
    const response = await fetch(`http://localhost:3000/api/users/login/${email}/${clave}`)
    console.log(response.status)
    if (response.status === 200) {
      const data = await response.json()
      console.log(data)
      window.localStorage.setItem('username', data.usuario)
      window.location.reload()
    } else {
      setError('login')
      setTimeout(() => {
        changeViewLogin(registering)
      }, 1000)
      setTimeout(() => {
        setError(false)
        setTypeError('')
      }, 3000)
    }
  }
  const onSubmit = async (data) => {
    if (registering) {
      try {
        await registerUser(data)
      } catch (err) {
        console.log(err)
        setError(true)
        setTimeout(() => {
          setError(false)
        }, 3000)
      }
    } else {
      try {
        await loginUser(data)
      } catch (err) {
        console.log(err)
        setError(true)
        setTimeout(() => {
          setError(false)
        }, 3000)
      }
    }
  }
  const loginGoogle = () => {
    const googleProvider = new GoogleAuthProvider()
    signInWithPopup(auth, googleProvider)
  }
  return (
    <Authcontext.Provider value={{
      error,
      typeError,
      onSubmit,
      loginGoogle
    }}
    >
      {props.children}
    </Authcontext.Provider>
  )
}
