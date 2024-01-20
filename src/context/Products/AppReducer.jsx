import { SET_ONE_PRODUCT, SET_PRODUCTS, SET_VIEW_LOGIN, CHANGE_VIEW_LOGIN, SET_VIEW_CART, SET_VIEW_PRODUCT, SET_PRODUCTS_CART } from '../types'

export default (state, action) => {
  const { payload, type } = action
  switch (type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: payload
      }
    case SET_ONE_PRODUCT:
      return {
        ...state,
        product: payload
      }
    case SET_VIEW_LOGIN:
      return {
        ...state,
        showLogin: payload
      }
    case CHANGE_VIEW_LOGIN:
      return {
        ...state,
        registering: payload
      }
    case SET_VIEW_CART:
      return {
        ...state,
        showCart: payload
      }
    case SET_VIEW_PRODUCT:
      return {
        ...state,
        showProduct: payload
      }
    case SET_PRODUCTS_CART:
      return {
        ...state,
        productsCart: payload
      }
    default:
      return state
  }
}
