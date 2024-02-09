import { HeaderContainer, NotificationCart } from './styles'
import logoCoffee from '../../assets/Logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import CoffeeContext from '../../contexts/CoffeeContext'

export function Header() {

  const { state } = useContext(CoffeeContext)

  return (
    <>
      <HeaderContainer>
        <img src={logoCoffee} alt="Emblema de café da nossa empresa" />
        <nav>
          <NavLink
            style={{ textDecoration: 'none' }}
            to="/"
            title="Sua cidade atual"
          >
            <button className="city">
              <MapPin weight="fill" size={23} />
              <span>São Bernardo, SP</span>
            </button>
          </NavLink>

          {/* {state.cart.length > 0 && (
            <>
              <NavLink to="/checkout" title="Carrinho de itens">
                <button className="cart">
                  <ShoppingCart weight="fill" size={22} />
                </button>
              </NavLink><NotificationCart></NotificationCart>
            </>
          )}

          {state.cart.length === 0 && (
            <>
              <NavLink to="/checkout" title="Carrinho de itens">
                <button className="cart">
                  <ShoppingCart weight="fill" size={22} />
                </button>
              </NavLink>
            </>
          )} */}

          {state.cart.length > 0 ?
            <><NavLink to="/checkout" title="Carrinho de itens">
              <button className="cart">
                <ShoppingCart weight="fill" size={22} />
              </button>
            </NavLink>
              <NotificationCart></NotificationCart></>

            :

            <>
              <NavLink to="/checkout" title="Carrinho de itens">
                <button className="cart">
                  <ShoppingCart weight="fill" size={22} />
                </button>
              </NavLink>
            </>
          }

        </nav>
      </HeaderContainer>
    </>
  )
}
