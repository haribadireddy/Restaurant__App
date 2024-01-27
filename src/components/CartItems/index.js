import './index.css'

const CartItems = props => {
  const {cartDetails} = props
  const {dish_image, dish_name, dish_price} = cartDetails

  return (
    <li className='cart-list-item'>
      <img src={dish_image} alt={dish_name} className='cart-dish-image' />
      <p className='cart-dish-name'>{dish_name}</p>
      <p className='cart-dish-price'>{dish_price}</p>
    </li>
  )
}

export default CartItems
