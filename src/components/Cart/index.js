import Header from '../Header'
import CartContext from '../../context/CartContext'
import CartItems from '../CartItems'
import './index.css'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      console.log(cartList)
      return (
        <>
          <Header />
          <ul className="cart-list">
            {cartList.map(eachCartItem => (
              <CartItems key={eachCartItem.id} cartDetails={eachCartItem} />
            ))}
          </ul>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default Cart
