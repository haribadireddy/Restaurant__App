import {Link, Redirect} from 'react-router-dom'
import CartContext from '../../context/CartContext'
import Cookies from 'js-cookie'
import {HiOutlineShoppingCart} from 'react-icons/hi'
import './index.css'

const Header = () => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
  }

  return (
    <div className="header-container">
      <div className="nav-container">
        <Link to="/">
          <h1 className="main-heading">UNI Resto cafe</h1>
        </Link>
        <div className="order-container">
          <p className="para">My Orders</p>
          <Link to="/cart">
            <HiOutlineShoppingCart className="icon" />
          </Link>
          <p className="cart-count">0</p>
          <button className="logout-button" onClick={onClickLogout}>
            Logout
          </button>
        </div>
      </div>
      <hr className="line" />
    </div>
  )
}

export default Header
