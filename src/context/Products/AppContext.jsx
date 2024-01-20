import { createContext, useContext, useReducer } from 'react'
import AppReducer from './AppReducer'
import { categorias } from './listcategories'

export const AppContext = createContext()

export const useAppContext = () => {
  const context = useContext(AppContext)
  return context
}

export function AppContextProvider (props) {
  const useVariants = () => {
    const initialstate = { products: [], product: {}, showProduct: false, showLogin: false, registering: false, showCart: false, productsCart: [{ id: 6, title: 'Intelligent Soft Pizza', price: 154, description: 'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design', images: ['https://api.lorem.space/image/watch?w=640&h=480&r=7614', 'https://api.lorem.space/image/watch?w=640&h=480&r=731', 'https://api.lorem.space/image/watch?w=640&h=480&r=4665'], creationAt: '2023-03-30T07:35:18.000Z', updatedAt: '2023-03-30T07:35:18.000Z', category: { id: 2, name: 'Electronics', image: 'https://api.lorem.space/image/watch?w=640&h=480&r=3746', creationAt: '2023-03-30T07:35:18.000Z', updatedAt: '2023-03-30T07:35:18.000Z' } }, { id: 5, title: 'Tasty Rubber Tuna', price: 578, description: 'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J', images: ['https://api.lorem.space/image/furniture?w=640&h=480&r=1560', 'https://api.lorem.space/image/furniture?w=640&h=480&r=1560', 'https://api.lorem.space/image/furniture?w=640&h=480&r=1560'], creationAt: '2023-03-30T07:35:18.000Z', updatedAt: '2023-03-30T23:06:26.000Z', category: { id: 3, name: 'Furniture', image: 'https://api.lorem.space/image/furniture?w=640&h=480&r=8354', creationAt: '2023-03-30T07:35:18.000Z', updatedAt: '2023-03-30T07:35:18.000Z' } }, { id: 8, title: 'Handmade Plastic Cheese', price: 115, description: "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles", images: ['https://api.lorem.space/image/watch?w=640&h=480&r=8104', 'https://api.lorem.space/image/watch?w=640&h=480&r=6901', 'https://api.lorem.space/image/watch?w=640&h=480&r=454'], creationAt: '2023-03-30T07:35:18.000Z', updatedAt: '2023-03-30T07:35:18.000Z', category: { id: 2, name: 'Electronics', image: 'https://api.lorem.space/image/watch?w=640&h=480&r=3746', creationAt: '2023-03-30T07:35:18.000Z', updatedAt: '2023-03-30T07:35:18.000Z' } }, { id: 10, title: 'Electronic Cotton Keyboard', price: 174, description: 'The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality', images: ['https://api.lorem.space/image/shoes?w=640&h=480&r=7751', 'https://api.lorem.space/image/shoes?w=640&h=480&r=1055', 'https://api.lorem.space/image/shoes?w=640&h=480&r=4200'], creationAt: '2023-03-30T07:35:18.000Z', updatedAt: '2023-03-30T07:35:18.000Z', category: { id: 4, name: 'Shoes', image: 'https://api.lorem.space/image/shoes?w=640&h=480&r=3684', creationAt: '2023-03-30T07:35:18.000Z', updatedAt: '2023-03-30T07:35:18.000Z' } }] }
    const [state, dispatch] = useReducer(AppReducer, initialstate)
    const { showLogin, registering, products, product, showProduct, showCart, productsCart } = state
    return {
      showLogin,
      showProduct,
      registering,
      showCart,
      productsCart,
      products,
      product,
      setAllProducts: (data) => dispatch({
        type: 'SET_PRODUCTS',
        payload: data
      }),
      setOneProduct: (data) => dispatch({
        type: 'SET_ONE_PRODUCT',
        payload: data
      }),
      setShowLogin: (showLogin) => dispatch({
        type: 'SET_VIEW_LOGIN',
        payload: !showLogin
      }),
      setShowProduct: (showProduct) => dispatch({
        type: 'SET_VIEW_PRODUCT',
        payload: !showProduct
      }),
      changeViewLogin: (registering) => dispatch({
        type: 'CHANGE_VIEW_LOGIN',
        payload: !registering
      }),
      setShowCart: (showCart) => dispatch({
        type: 'SET_VIEW_CART',
        payload: !showCart
      }),
      setProductsCart: (product) => dispatch({
        type: 'SET_PRODUCTS_CART',
        payload: productsCart.push(product)
      })
    }
  }
  const { setAllProducts, setOneProduct, setShowLogin, changeViewLogin, showLogin, setShowCart, showCart, setShowProduct, showProduct, registering, product, products, productsCart, setProductsCart } = useVariants()
  const baseUrlApiProducts = 'https://api.escuelajs.co/api/v1'
  const getProducts = async () => {
    const res = await fetch(`${baseUrlApiProducts}/products`)
    const data = await res.json()
    setAllProducts(data)
  }
  const getProduct = async (id) => {
    const res = await fetch(`${baseUrlApiProducts}/products/` + id)
    const data = await res.json()
    setOneProduct(data)
  }
  const clearProduct = () => {
    setOneProduct({})
  }

  return (
    <AppContext.Provider
      value={{
        getProducts,
        getProduct,
        clearProduct,
        setShowLogin,
        changeViewLogin,
        setShowCart,
        setShowProduct,
        setProductsCart,
        showCart,
        showLogin,
        showProduct,
        registering,
        products,
        product,
        productsCart,
        categorias
      }}
    >
      {props.children}
    </AppContext.Provider>
  )
}
