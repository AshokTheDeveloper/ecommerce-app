import React from 'react'

const CartContext = React.createContext({
  cartList: [],
  addCartItem: () => {},
  deleteCartItem: () => {},
  removeAll: () => {},
  quantity: 0,
  incrementQuantity: () => {},
  decrementQuantity: () => {},
})

export default CartContext
