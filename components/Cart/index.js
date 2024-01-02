import CartContext from '../../context/CartContext'
import Header from '../Header'
import CartListView from '../CartListView'
import EmptyCarView from '../EmptyCartView'
import CartSummary from '../CartSummary'

import './index.css'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, removeAll} = value

      const displayEmptyList = cartList.length === 0

      const onClickRemoveAllItems = () => {
        removeAll()
      }

      return (
        <>
          <Header />
          {displayEmptyList ? (
            <EmptyCarView />
          ) : (
            <div className="cart-container">
              <div className="cart-content-container">
                <div className="heading-and-remove-button-container">
                  <h1 className="cart-heading">My Cart</h1>
                  <button
                    type="button"
                    className="remove-all-button"
                    onClick={onClickRemoveAllItems}
                  >
                    Remove All
                  </button>
                </div>
                <CartListView />
                <div className="cart-summary-container">
                  <CartSummary />
                </div>
              </div>
            </div>
          )}
        </>
      )
    }}
  </CartContext.Consumer>
)
export default Cart
