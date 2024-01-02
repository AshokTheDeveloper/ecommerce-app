import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const numberOfItemsInCart = cartList.length

      /* const total = cartList.reduce(
        (previousValue, currentValue) =>
          previousValue + currentValue.quantity * currentValue.price,
        0,
      )
      */

      let total = 0
      cartList.forEach(eachItem => {
        total += eachItem.quantity * eachItem.price
      })

      return (
        <div>
          <h1 className="total-order-heading">Order Total: {total}/- </h1>
          <p className="active-cart-items-text">
            {numberOfItemsInCart} items in cart
          </p>
          <button type="button" className="check-out-button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
