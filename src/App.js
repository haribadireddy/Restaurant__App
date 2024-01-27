import {Route, Switch, BrowserRouter} from 'react-router-dom'
import {Component} from 'react'
import CartContext from './context/CartContext'
import Home from './components/Home'
import LoginPage from './components/LoginPage'
import ProtectedRoute from './components/ProtectedRoute'
import Cart from './components/Cart'

import './App.css'

class App extends Component {
  state = {
    cartList: [],
  }

  addCartItem = item => {
    this.setState(prevState => ({
      cartList: [...prevState.cartList, item],
    }))
  }
  removeCartItem = () => {}

  render() {
    const {cartList} = this.state
    return (
      <BrowserRouter>
        <CartContext.Provider
          value={{
            cartList,
            addCartItem: this.addCartItem,
            removeCartItem: this.removeCartItem,
          }}
        >
          <Switch>
            <Route exact path="/login" component={LoginPage} />
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute exact path="/cart" component={Cart} />
          </Switch>
        </CartContext.Provider>
      </BrowserRouter>
    )
  }
}

export default App
