import { React } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Nav } from './components/Nav/Nav'
import { AppContextProvider } from './context/Products/AppContext'
import { Cart } from './components/Store/Cart'
import { InicioSesion } from './components/Home/Login'
import { Loading } from './components/Home/Loading'
import { AuthcontextProvider } from './context/AuthContext'
import Home from './components/Home'
import { ProductDescription } from './components/Store/ProductDescription'

export function App () {
  return (
    <AppContextProvider>
      <AuthcontextProvider>
        <Loading />
        <Nav />
        <InicioSesion />
        <Cart />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product/:idProduct' element={<ProductDescription />} />
        </Routes>

      </AuthcontextProvider>
    </AppContextProvider>
  )
}
